import { withViewObserver } from "react-load-on-view";

function AnimatedParagraph({
  text,
  styles,
  textColorClass = "text-primary-600",
}) {
  return <p className={`text-center ${styles} ${textColorClass}`}>{text}</p>;
}
export default withViewObserver(AnimatedParagraph, {
  animate: true,
  afterWrapperIsVisibleClass: "some_animation",
});
