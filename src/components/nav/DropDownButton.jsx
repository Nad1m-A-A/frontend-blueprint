import { IoIosArrowForward } from "react-icons/io";

function DropDownButton({ language, title, open  }) {
  return (
    <button className="flex items-center gap-0.5">
      <span className="text-primary-50">{title}</span>
      <span
        type="button"
        className={`text-primary-50 group-hover:text-accent-500 transition-colors duration-200 ${
          language === "en" ? "mt-1" : ""
        }`}
      >
        <IoIosArrowForward
          className={`transition-transform duration-200 flex items-center justify-center ${
            open ? "rotate-90" : ""
          }`}
        />
      </span>
    </button>
  );
}

export default DropDownButton;
