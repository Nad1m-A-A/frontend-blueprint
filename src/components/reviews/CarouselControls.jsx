import { withViewObserver } from "react-load-on-view";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CarouselControls = ({ onPrev, onNext }) => {
  return (
    <div dir="ltr" className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        className={`p-2 rounded-full transition-all duration-300 light_button`}
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        onClick={onNext}
        className={`p-2 rounded-full transition-all duration-300 light_button`}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default withViewObserver(CarouselControls, {
  animate: true,
});
