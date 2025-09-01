import PageHeadings from "@components/PageHeadings";
import ServiceForm from "./form/ServiceForm";
import ProgressiveImage from "./ProgressiveImage";
import { withViewObserver } from "react-load-on-view";

function PlainHero({
  data,
  styles,
  imageAnimationClass = "some_animation",
  imageSizeClass = "w-[220px]",
}) {
  return (
    <div
      className={`section_y_padding zoom_out_h_container min-h-screen flex items-center ${styles}`}
    >
      <div className="app_container flex justify-center items-center h-full w-full">
        <div className="relative z-0 flex flex-col gap-8 justify-center items-center w-full md:pt-16">
          <div className="min-h-[200px]">
            {data && (
              <ProgressiveImage
                lowQualitySrc={data?.lowImage}
                highQualitySrc={data?.image}
                alt={data?.title}
                styles={`${imageAnimationClass} ${imageSizeClass} h-[200px] object-contain`}
              />
            )}
          </div>
          <PageHeadings title={data?.title} subtitle={data?.subtitle} />
          <ServiceForm />
        </div>
      </div>
    </div>
  );
}

export default withViewObserver(PlainHero, { animate: true });
