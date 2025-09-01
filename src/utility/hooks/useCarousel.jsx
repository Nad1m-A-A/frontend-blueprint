import { useState, useEffect } from "react";

export const useCarousel = (totalItems, breakpoints) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < breakpoints.sm) {
        setVisibleItems(1);
      } else if (width < breakpoints.md) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const totalSlides = Math.max(1, totalItems - (visibleItems - 1));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return {
    currentIndex,
    visibleItems,
    totalSlides,
    nextSlide,
    prevSlide,
    setCurrentIndex,
  };
};
