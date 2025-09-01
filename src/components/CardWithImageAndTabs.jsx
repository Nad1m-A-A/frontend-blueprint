import { useState } from "react";
import { withViewObserver } from "react-load-on-view";
import Tabs from "./Tabs";
import AnimatedParagraph from "./AnimatedParagraph";

function CardWithImageAndTabs({ item }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col items-center shadow gap-2 h-full text-primary-600 rounded-sm border-2 border-primary-100 p-5 overflow-hidden">
      <div className="rounded-full w-28 h-32 flex justify-center">
        <img
          className="object-center object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <p className="text-xl text-center font-bold">{item.title}</p>
      <Tabs
        items={item.content}
        activeTreatment={activeTab}
        setActiveTreatment={setActiveTab}
      />
      <AnimatedParagraph
        special_animation="visible_wrapper"
        text={item.content[activeTab].description}
      />
    </div>
  );
}

export default withViewObserver(CardWithImageAndTabs, {
  animate: true,
});
