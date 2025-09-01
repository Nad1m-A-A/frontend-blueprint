import logo from "@images/logo.webp";
function Fallback() {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <img src={logo} alt="Logo" className="w-40 animate-pulse" />
        <span className=""></span>
        <div className="bg-accent-500 h-0.5 w-20 relative rounded-full overflow-hidden">
          <div className="bg-accent-50 h-0.5 w-full absolute loader"></div>
        </div>
      </div>
    </div>
  );
}

export default Fallback;
