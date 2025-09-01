import { useState, useEffect } from "react";
import { withViewObserver } from "react-load-on-view";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedImage({
  image,
  images,
  intervalMs = 3000,
  alt,
  styles,
  imageSize = "md:max-w-[400px]",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray =
    images && images.length > 0 ? images : image ? [image] : [];

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [images, intervalMs]);

  const currentImage = imageArray[currentIndex] || "";

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={currentImage}
        src={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        alt={alt}
        className={`${styles} ${imageSize}`}
      />
    </AnimatePresence>
  );
}

export default withViewObserver(AnimatedImage, {
  animate: true,
  afterWrapperIsVisibleClass: "some_animation",
});
