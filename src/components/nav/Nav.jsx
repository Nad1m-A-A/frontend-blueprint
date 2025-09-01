import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Nav() {
  return (
    <nav dir="ltr" className={`fixed z-50 left-0 right-0 morph select-none`}>
      <div className="app_container">
        {/* Desktop */}
        <DesktopNav />
        {/* Mobile */}
        <MobileNav />
      </div>
    </nav>
  );
}

export default Nav;
