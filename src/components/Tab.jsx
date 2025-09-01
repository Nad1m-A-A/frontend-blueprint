import { withViewObserver } from "react-load-on-view";

function Tab({ big, title, active }) {
  return (
    <h3
      className={` ${active ? "shadow" : "opacity-30 hover:opacity-60"} ${
        big === true
          ? "text-[clamp(.8rem,3vw,1.4rem)] px-4 py-3"
          : "text-[clamp(.7rem,3vw,1rem)] p-2"
      } rounded-sm cursor-pointer leading-none text-primary-100 font-bold bg-accent-500 transition-all duration-500`}
    >
      {title}
    </h3>
  );
}

export default withViewObserver(Tab, { animate: true });
