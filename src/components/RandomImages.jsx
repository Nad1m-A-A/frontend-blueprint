import styles from "@styles/RandomImages.module.css";
import orange from "@images/nutrition/orange.webp";
import lemon from "@images/nutrition/lemon.webp";
import peach from "@images/nutrition/peach.webp";
import strawberry from "@images/nutrition/strawberry.webp";
import pear from "@images/nutrition/pear.webp";
import mint from "@images/nutrition/mint.webp";
import carrot from "@images/nutrition/carrot.webp";
import orange_slice from "@images/nutrition/orange_slice.webp";
import chocolate from "@images/nutrition/chocolate.webp";
import compound from "@images/nutrition/compound.webp";
import mg from "@images/nutrition/mg.webp";
import fe from "@images/nutrition/fe.webp";
import ca from "@images/nutrition/ca.webp";

const imagesGroup1 = [orange, lemon, orange_slice];
const imagesGroup2 = [strawberry, pear, mint];
const imagesGroup3 = [compound, fe, ca];
const imagesGroup4 = [mg, chocolate, peach, carrot];

// Generate image with random images and random positioning classes
const images1 = Array.from({ length: 3 }, (_, i) => ({
  className: styles[`random_image${i + 1}`],
  src: imagesGroup1[i % imagesGroup1.length],
  size:
    i % 4 === 0
      ? "w-[40px]"
      : i % 4 === 1
      ? "w-[40px]"
      : i % 4 === 2
      ? "w-[40px]"
      : "w-[40px]",
}));

const images2 = Array.from({ length: 3 }, (_, i) => ({
  className: styles[`random_image2${i + 1}`],
  src: imagesGroup2[(i + 2) % imagesGroup2.length],
  size:
    i % 4 === 0
      ? "w-[40px]"
      : i % 4 === 1
      ? "w-[40px]"
      : i % 4 === 2
      ? "w-[40px]"
      : "w-[40px]",
}));

const images3 = Array.from({ length: 3 }, (_, i) => ({
  className: styles[`random_image3${i + 1}`],
  src: imagesGroup3[(i + 4) % imagesGroup3.length],
  size:
    i % 4 === 0
      ? "w-[40px]"
      : i % 4 === 1
      ? "w-[40px]"
      : i % 4 === 2
      ? "w-[40px]"
      : "w-[40px]",
}));

const images4 = Array.from({ length: 4 }, (_, i) => ({
  className: styles[`random_image4${i + 1}`],
  src: imagesGroup4[(i + 1) % imagesGroup4.length],
  size:
    i % 4 === 0
      ? "w-[50px]"
      : i % 4 === 1
      ? "w-[50px]"
      : i % 4 === 2
      ? "w-[50px]"
      : "w-[50px]",
}));

export default function RandomImages() {
  return (
    <div className="z-10">
      {[...images1, ...images2, ...images3, ...images4].map((image, i) => (
        <img
          key={i}
          src={image.src}
          alt="Service Related Image"
          className={`${image.className} ${image.size} absolute shadow-2xl border-[1px] border-accent-500 p-0.5 rounded-full object-cover`}
        />
      ))}
    </div>
  );
}
