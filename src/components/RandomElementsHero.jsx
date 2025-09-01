import { lazy } from "react";
import { withViewObserver } from "react-load-on-view";
import PageHeadings from "./PageHeadings";
import LightOverlay from "./LightOverlay";
import ServiceForm from "./form/ServiceForm";
const RandomSpheres = lazy(() => import("./RandomSpheres"));
const RandomImages = lazy(() => import("./RandomImages"));

function RandomElementsHero({
  data,
  elements,
  styles,
  imageStyles,
  imageAnimationClass,
}) {
  return (
    <div
      dir="ltr"
      className={`relative flex items-center justify-center pt-24 overflow-x-clip zoom_out_h_container section_b_padding ${styles}`}
    >
      {elements === "spheres" && <RandomSpheres />}
      {elements === "images" && <RandomImages />}
      <LightOverlay />
      <div className="relative flex flex-col gap-10 w-full z-10">
        <PageHeadings title={data?.title} subtitle={data?.subtitle} />
        {data?.image && (
          <img
            alt="Service Image"
            src={data?.image}
            className={`${imageStyles} ${imageAnimationClass}`}
          />
        )}
        <ServiceForm />
      </div>
    </div>
  );
}

export default withViewObserver(RandomElementsHero, { animate: true });
