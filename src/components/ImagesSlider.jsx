import styles from "@styles/ImagesSlider.module.css";
import React, { useRef } from "react";

function ImagesSlider({
  data,
  imagesSizeClass = "h-[200px]",
  imagesMarginClass = "",
}) {
  const sliderRef = useRef(null);

  const handleToggle = () => {
    if (sliderRef.current) {
      sliderRef.current.classList.toggle(styles.pause);
    }
  };

  return (
    <div
      dir="ltr"
      className="overflow-hidden w-full relative visible_wrapper rounded-sm app_container"
      onMouseEnter={(e) =>
        e.currentTarget
          .querySelector(`.${styles.slider}`)
          .classList.add(styles.pause)
      }
      onMouseLeave={(e) =>
        e.currentTarget
          .querySelector(`.${styles.slider}`)
          .classList.remove(styles.pause)
      }
      onClick={handleToggle}
    >
      {data?.list && (
        <div ref={sliderRef} className={`flex gap-1 ${styles.slider}`}>
          {data.list.map((src, index) => (
            <img
              key={`${index}-${src}`}
              src={src}
              alt={`Case ${(index % data.list.length) + 1}`}
              draggable={false}
              className={`w-auto rounded-sm shadow object-cover select-none ${imagesSizeClass} ${
                index % 2 === 0 ? imagesMarginClass : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagesSlider;
