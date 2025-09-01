import { FaCircleNotch } from "react-icons/fa";

function Button({ isLoading, buttonText, styles }) {
  return (
    <button
      className={`capitalize rounded-sm w-full shadow transition-all duration-300 big_button ${styles}`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <FaCircleNotch className="animate-spin size-6" />
        </span>
      ) : (
        buttonText
      )}
    </button>
  );
}

export default Button;
