import { FaChevronLeft } from "react-icons/fa";
import { withViewObserver } from "react-load-on-view";

function FAQItem({ faq, i, activeIndex, toggleFAQ }) {
  return (
    <div>
      <div key={i} className="overflow-hidden rounded-sm">
        <div
          className="w-full px-6 py-4 text-left border-2 border-primary-100 flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(i)}
        >
          <span className="text-gray-600 text-start">{faq.question}</span>
          <span
            className={`transform transition-transform duration-500 ${
              activeIndex === i ? "-rotate-90" : ""
            }`}
          >
            <FaChevronLeft className="text-accent-500" />
          </span>
        </div>
        <div
          className={`bg-accent-500 rounded-b border border-transparent transition-all duration-700 ease-in ${
            activeIndex === i ? "max-h-[140px]" : "max-h-0 ease-out"
          }`}
        >
          <p className="px-6 py-4 text-primary-100 text-sm">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default withViewObserver(FAQItem, {
  animate: true,
});
