import { useScrollMarginAnimation } from "@utility/hooks/useScrollMarginAnimation";
import StaggeredListItem from "./StaggeredListItem";
import SectionHeadings from "./SectionHeadings";

function StaggeredList({ data, noAnimation }) {
  // Get the first property from data object and use it as our list
  const list = data ? Object.values(data)[0] : null;

  if (!list || !list.items) return;

  const { refs, margins } = useScrollMarginAnimation({
    elements: list?.items?.length,
    marginStep: 10,
    visibilityBeforeAnimationStart: 40,
    maxMarginTop: -275,
  });

  // Generate styles array dynamically based on list length
  const styles = list.items.map((_, index) =>
    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
  );

  return (
    <div className="section_y_padding app_container">
      <SectionHeadings title={list.title} subtitle={list.subtitle} />
      <div>{list.items[0].buttonText}</div>
      <div className="flex flex-col gap-4">
        {list.items.map((item, i) => (
          <StaggeredListItem
            key={i}
            index={i}
            refValue={noAnimation ? null : refs[i]}
            topMargin={i === 0 ? 1 : margins[i]}
            styles={styles[i]}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default StaggeredList;
