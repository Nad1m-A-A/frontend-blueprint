import styles from "@styles/RandomSpheres.module.css";

const spheres1 = Array.from({ length: 10 }, (_, i) => ({
  className: styles[`random_sphere${i + 1}`],
  bg: "bg-white",
  size:
    i % 4 === 0
      ? "w-[20px] h-[20px]"
      : i % 4 === 1
      ? "w-[25px] h-[25px]"
      : i % 4 === 2
      ? "w-[30px] h-[30px]"
      : "w-[5px] h-[5px]",
}));

const spheres2 = Array.from({ length: 10 }, (_, i) => ({
  className: styles[`random_sphere2${i + 1}`],
  bg: "bg-white",
  size:
    i % 4 === 0
      ? "w-[10px] h-[10px]"
      : i % 4 === 1
      ? "w-[5px] h-[5px]"
      : i % 4 === 2
      ? "w-[10px] h-[10px]"
      : "w-[5px] h-[5px]",
}));

// New sets of spheres
const spheres3 = Array.from({ length: 10 }, (_, i) => ({
  className: styles[`random_sphere3${i + 1}`],
  bg: "bg-white",
  size:
    i % 4 === 0
      ? "w-[15px] h-[15px]"
      : i % 4 === 1
      ? "w-[20px] h-[20px]"
      : i % 4 === 2
      ? "w-[25px] h-[25px]"
      : "w-[10px] h-[10px]",
}));

const spheres4 = Array.from({ length: 10 }, (_, i) => ({
  className: styles[`random_sphere4${i + 1}`],
  bg: "bg-white",
  size:
    i % 4 === 0
      ? "w-[10px] h-[10px]"
      : i % 4 === 1
      ? "w-[15px] h-[15px]"
      : i % 4 === 2
      ? "w-[20px] h-[20px]"
      : "w-[8px] h-[8px]",
}));

export default function RandomSpheres() {
  return (
    <div>
      {[...spheres1, ...spheres2, ...spheres3, ...spheres4].map((sphere, i) => (
        <div
          key={i}
          className={`rounded-full absolute ${sphere.className} ${sphere.size} ${sphere.bg} ${styles.sphere_container}`}
        />
      ))}
    </div>
  );
}
