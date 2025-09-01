import NavLogo from "./NavLogo";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import ContactButton from "@components/ContactButton";

function CampaignNav() {
  return (
    <nav className={`fixed z-50 left-0 right-0 morph select-none`}>
      <div className="app_container text_container flex justify-between items-center">
        <NavLogo logoSizeClass="w-32" target={null} />
        <div className="flex flex-col items-end gap-3">
          <ContactButton type="whatsapp" />
          <ContactButton type="toll" />
        </div>
      </div>
    </nav>
  );
}

export default CampaignNav;
