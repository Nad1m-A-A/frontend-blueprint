import { withViewObserver } from "react-load-on-view";
import Tab from "./Tab";

function Tabs({ items, activeTreatment, setActiveTreatment, big }) {
  return (
    <div className="flex flex-wrap lg:flex-row gap-2 justify-center">
      {items?.map((item, i) => (
        <span key={i} onClick={() => setActiveTreatment(i)}>
          <Tab big={big} title={item.title} active={activeTreatment === i} />
        </span>
      ))}
    </div>
  );
}

export default withViewObserver(Tabs, {
  animate: true,
  rootMargin: "-50px",
});
