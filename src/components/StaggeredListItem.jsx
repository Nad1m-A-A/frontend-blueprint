import { useLanguage } from "@contexts/LanguageContext";
import { withViewObserver } from "react-load-on-view";

function StaggeredListItem({ refValue, topMargin, styles, index, item }) {
  const { language } = useLanguage();

  return (
    <div
      id={`item-${index}`}
      ref={refValue}
      style={{
        marginTop: `${topMargin}px`,
        opacity: topMargin >= 200 ? 0.5 : 1,
      }}
      className={`${styles} bg-accent-500 border-t-2 border-primary-100 transition-all duration-1000 rounded-sm shadow flex flex-col gap-4 justify-center items-center`}
    >
      <div className="flex flex-col gap-2 items-center justify-center text-center flex-1 px-5 pt-5 md:pt-0">
        <h3 className="text-[clamp(1.2rem,4vw,2rem)] font-bold text-primary-100">
          {item.title}
        </h3>
        <p className="text-primary-50 max-w-[30rem]">{item.description}</p>
      </div>
      <div>
        <img
          alt={item.title}
          src={item.image}
          className={`w-[clamp(400px,100vw,500px)] max-h-[300px] object-contain ${
            language === "en"
              ? index % 2 === 0
                ? "object-right"
                : "object-left"
              : index % 2 === 0
              ? "object-left"
              : "object-right"
          }`}
        />
      </div>
    </div>
  );
}

export default withViewObserver(StaggeredListItem, {
  animate: true,
});
