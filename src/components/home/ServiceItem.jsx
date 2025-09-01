import { withViewObserver } from "react-load-on-view";
import { Link } from "react-router-dom";

function ServiceItem({ service }) {
  return (
    <Link to={service.url} className="group">
      <div className="bg-accent-500 group-hover:bg-accent-500/60 rounded-sm py-4 lg:pb-32 lg:pt-20">
        <div className="flex flex-col items-center lg:gap-10">
          <img
            alt={service.title}
            src={service.image}
            className="w-[clamp(100px,50vw,200px)] lg:w-[clamp(100px,50vw,500px)] object-contain group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"
          />
          <button className="light_button small_button regular_button group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
            {service.title}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default withViewObserver(ServiceItem, {
  animate: true,
});
