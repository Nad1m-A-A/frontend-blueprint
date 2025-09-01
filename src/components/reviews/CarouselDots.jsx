import { withViewObserver } from "react-load-on-view";

const CarouselDots = ({ totalItems, currentIndex, onDotClick }) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {[...Array(totalItems)].map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            currentIndex === index
              ? "light_button scale-150"
              : "morph hover:bg-secondary-500"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default withViewObserver(CarouselDots, {
  animate: true,
});
