import { withViewObserver } from "react-load-on-view";

function HairReviewsCard({ name, rating, comment, image }) {
  return (
    <div className="p-4 h-fit rounded-sm shadow-sm flex flex-col gap-2 border border-accent-500">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="bg-accent-700 w-14 h-14 rounded-full object-cover border border-accent-500"
        />
        <div>
          <h3 className="font-semibold text-lg text-primary-600">{name}</h3>
          <div className="text-yellow-500">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className="text-primary-600">{comment}</p>
    </div>
  );
}

export default withViewObserver(HairReviewsCard, {
  animate: true,
});
