import { useEffect, useState, useMemo } from "react";
import { loadData } from "@utility/hooks/useDataLoader";
import DarkOverlay from "@components/DarkOverlay";
import Headings from "./Headings";
import Form from "@components/form/Form";
import hero_img1 from "@images/home/home_hero1.webp";

const Hero = () => {
  const { data: headings } = loadData("home/headings.js", "headings");
  const { data: selectOptions } = loadData("selectOptions.js", "selectOptions");
  const hero_images = useMemo(
    // () => [hero_img1, hero_img2, hero_img3, hero_img4],
    () => [hero_img1],
    []
  );

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % hero_images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="zoom_out_w_container zoom_out_h_container">
      <div className="relative visible_wrapper min-h-[100vh] duration-1000 flex items-center shadow rounded-sm overflow-hidden">
        <img
          alt="Clinic Overview"
          src={hero_images[activeImgIndex]}
          className="absolute h-full w-full object-cover"
        />
        <DarkOverlay />
        <div className="z-20 w-full visible_wrapper space-y-10 app_container">
          <Headings title={headings?.title} subTitle={headings?.subTitle} />
          <div className="max-w-[30rem] mx-auto">
            <Form
              buttonStyle="text-center bg-accent-500 text-primary-100 hover:bg-accent-600"
              services={selectOptions}
              inputsStyle="text-center bg-primary-100 text-secondary-500 placeholder:text-secondary-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
