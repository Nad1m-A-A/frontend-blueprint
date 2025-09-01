import { withViewObserver } from "react-load-on-view";

function SectionTitle({ text, styles }) {
  return (
    <h1
      className={`capitalize section_text_shadow text-center text-[clamp(2rem,6vw,3.2rem)] text-secondary-500 leading-10 md:leading-tight mb-6 ${styles}`}
    >
      {text}
    </h1>
  );
}

export default withViewObserver(SectionTitle, {
  animate: true,
});
