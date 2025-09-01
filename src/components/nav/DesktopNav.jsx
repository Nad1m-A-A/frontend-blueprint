import LanguageSetter from "@components/LanguageSetter";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-between text-center">
      <NavLogo />
      <div className="flex gap-10 items-center">
        <NavMenu />
        <LanguageSetter />
      </div>
    </div>
  );
}

export default DesktopNav;
