import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function BookInvite() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll with dynamic duration
  const smoothScrollTo = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;

    // Adjust duration based on distance
    const baseSpeed = 0.3; // seconds per 500px
    let duration = Math.min(
      Math.max((Math.abs(distance) / 500) * baseSpeed * 1000, 300),
      2000
    );

    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-in-out
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * easeInOut);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Detect scroll to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5; // 50vh
      setIsVisible(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click handler
  const handleClick = () => {
    const section = document.getElementById("contact-section");

    if (section) {
      // Scroll to section with dynamic duration
      const offset = 200;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(topPosition);
    } else {
      // Redirect to homepage and scroll after load
      localStorage.setItem("scrollToContact", "true");
      window.location.href = "/";
    }
  };

  // If redirected, scroll when section is available
  useEffect(() => {
    if (localStorage.getItem("scrollToContact") === "true") {
      localStorage.removeItem("scrollToContact");

      const checkInterval = setInterval(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          clearInterval(checkInterval);
          const offset = 200;
          const topPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;
          smoothScrollTo(topPosition);
        }
      }, 100); // check every 100ms

      // Optional: Stop checking after 10 seconds to avoid infinite loop
      setTimeout(() => clearInterval(checkInterval), 10000);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed z-20 right-0 bottom-40"
          dir="rtl"
          onClick={handleClick}
        >
          <div className="items-center font-en font-bold text-primary-100">
            <div className="flex">
              <div className="cursor-pointer w-fit h-fit rounded-e-xl shadow bg-heavy-accent px-6 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex flex-col select-none">
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookInvite;
