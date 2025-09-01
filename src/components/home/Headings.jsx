import { withViewObserver } from "react-load-on-view";

function Headings({ title, subTitle }) {
  const markup = { __html: title };
  return (
    <div className="mx-auto pt-2">
      <div className="text-primary-100 leading-tight md:leading-none select-none text-center">
        <h1
          className="headings_shadow text-[clamp(2rem,6vw,5rem)]"
          dangerouslySetInnerHTML={markup}
        ></h1>
        <h2 className="pt-4 font-thin text-[clamp(1rem,3vw,2rem)]">
          {subTitle}
        </h2>
      </div>
    </div>
  );
}

export default withViewObserver(Headings, {
  animate: true,
});
