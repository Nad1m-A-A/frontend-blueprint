import { useState, useEffect } from "react";
import { withViewObserver } from "react-load-on-view";

function ProgressiveImage({
  lowQualitySrc,
  highQualitySrc,
  alt,
  styles,
  imageSize,
}) {
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setCurrentSrc(highQualitySrc); // Update to high-quality image once loaded
    };
  }, [highQualitySrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      draggable={false}
      className={`${styles} ${imageSize}`}
    />
  );
}

export default withViewObserver(ProgressiveImage, {
  animate: true,
});
