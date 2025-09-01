import { withViewObserver } from "react-load-on-view";

function BenefitCard({ item, styles }) {
  const Icon = item.icon;
  return (
    <div
      className={`group h-full text-center rounded-sm p-5 shadow ${
        styles || "border-2 border-primary-100 text-primary-600"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="p-2 rounded-full group-hover:bg-primary-100 transition-colors">
          {Icon && (
            <Icon className="size-10 group-hover:text-accent-500 transition-colors duration-700" />
          )}
        </div>
        <p className="text-xl font-bold">{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default withViewObserver(BenefitCard, {
  animate: true,
});
