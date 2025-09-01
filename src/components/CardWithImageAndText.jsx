import { withViewObserver } from "react-load-on-view";
import LinkButton from "./LinkButton";

function CardWithImageAndText({
  item,
  cardStyles,
  buttonStyles,
  imageSizeClass = "md:max-w-[250px]",
}) {
  return (
    <div
      className={`group h-full text-center rounded-sm p-5 shadow text_container_sm ${
        cardStyles || "border-2 border-primary-100 text-primary-600"
      }`}
    >
      <div className="flex flex-col gap-4">
        <img
          alt={item.title}
          className={`object-center object-contain rounded-sm mx-auto ${imageSizeClass}`}
          src={item.image}
        />
        <div className="space-y-3">
          <p className="text-xl text-center font-bold">{item.title}</p>
          <p>{item.description}</p>
          {item.pageLink && (
            <LinkButton
              link={item.pageLink}
              text={item.buttonText}
              styles={buttonStyles}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default withViewObserver(CardWithImageAndText, {
  animate: true,
});
