function DarkOverlay({ blur = "0px" }) {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-bl from-accent-300/30 to-gray-700/40 z-0"
      style={{ backdropFilter: `blur(${blur})` }}
    />
  );
}

export default DarkOverlay;
