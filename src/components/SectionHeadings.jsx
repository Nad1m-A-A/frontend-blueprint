import AnimatedParagraph from "./AnimatedParagraph";
import SectionTitle from "./SectionTitle";

function SectionHeadings({ title, subtitle }) {
  return (
    <div className="overflow-hidden">
      <SectionTitle text={title} />
      {subtitle && (
        <AnimatedParagraph
          text={subtitle}
          styles="pb-5 max-w-[50rem] mx-auto"
        />
      )}
    </div>
  );
}

export default SectionHeadings;
