function MobileMenuButton({ menuOpen, setMenuOpen }) {
  return (
    <div dir="ltr" className="flex flex-col gap-2 relative my-auto">
      <span
        onClick={() => setMenuOpen(!menuOpen)}
        className={`absolute h-[1px] w-8 block rounded-full bg-white transition-all duration-700 right-0 ${
          menuOpen ? "rotate-45" : ""
        }`}
      />
      <span
        onClick={() => setMenuOpen(!menuOpen)}
        className={`absolute h-[1px] w-8 block rounded-full bg-white transition-all duration-700 right-0 ${
          menuOpen ? "-rotate-45" : "mt-2"
        }`}
      />
    </div>
  );
}

export default MobileMenuButton;
