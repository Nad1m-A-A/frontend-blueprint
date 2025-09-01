import { useState, useEffect } from "react";
import { useElementObserver } from "react-load-on-view";

export function useScrollMarginAnimation({
  elements = 1,
  marginStep = 10,
  visibilityBeforeAnimationStart = 100,
  maxMarginTop = -300,
} = {}) {
  const [direction, setDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [margins, setMargins] = useState(Array(elements).fill(0));
  const elementRefs = Array.from(
    { length: elements },
    () => useElementObserver().ref
  );

  useEffect(() => {
    setLastScrollY(window.scrollY);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setDirection("up");
      }
      setLastScrollY(currentScrollY);

      // Update margins for each element
      setMargins((prevMargins) => {
        const newMargins = [...prevMargins];
        let previousElementReachedMax = true; // For first element

        elementRefs.forEach((ref, index) => {
          if (index > 0) {
            previousElementReachedMax = prevMargins[index - 1] <= maxMarginTop;
          }

          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.bottom < 0) return; // Don't execute if element no longer in view
            const viewportHeight = window.innerHeight;
            const rectTopAboveViewBottom =
              rect.top - viewportHeight + visibilityBeforeAnimationStart < 0;
            if (
              direction === "down" &&
              rectTopAboveViewBottom &&
              (index === 0 || previousElementReachedMax)
            ) {
              newMargins[index] = Math.max(
                prevMargins[index] - marginStep,
                maxMarginTop
              );
            } else if (direction === "up" && rectTopAboveViewBottom) {
              newMargins[index] = Math.min(prevMargins[index] + marginStep, 0);
            } else if (!rectTopAboveViewBottom) {
              newMargins[index] = 0;
            }
          }
        });

        return newMargins;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    lastScrollY,
    direction,
    elementRefs,
    marginStep,
    visibilityBeforeAnimationStart,
    maxMarginTop,
  ]);

  return {
    refs: elementRefs,
    margins,
  };
}
