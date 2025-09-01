import { useState, useEffect, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
const ReviewCard = lazy(() => import("./ReviewCard"));
const CarouselControls = lazy(() => import("./CarouselControls"));
const CarouselDots = lazy(() => import("./CarouselDots"));
const SectionTitle = lazy(() => import("@components/SectionTitle"));

const Reviews = ({ data }) => {
  // Early return if no data
  if (!data?.reviews?.items?.length) {
    return null;
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const items = data.reviews.items;

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="section_y_padding">
      <div className="app_container">
        <div className="max-w-3xl mx-auto">
          <SectionTitle text={data.reviews?.title} />
          <div className="h-[300px] overflow-y-scroll">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ReviewCard review={items[currentIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          <CarouselControls
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={currentIndex}
            totalItems={items.length}
          />

          <CarouselDots
            totalItems={items.length}
            currentIndex={currentIndex}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
