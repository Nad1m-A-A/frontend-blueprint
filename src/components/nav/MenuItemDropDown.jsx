import { useLanguage } from "@contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import DropDownButton from "./DropDownButton";
import DropDown from "./DropDown";

function MenuItemDropDown({ setMenuOpen, item, baseLinkClass, activeClass }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOrScroll = (event) => {
      // Close if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
      // Close on scroll
      if (event.type === "scroll") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOrScroll);
      window.addEventListener("scroll", handleClickOrScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOrScroll);
      window.removeEventListener("scroll", handleClickOrScroll);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-1">
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={`flex items-center gap-1 group`}
        >
          <DropDownButton language={language} title={item.title} open={open} />
          <DropDown
            baseLinkClass={baseLinkClass}
            activeClass={activeClass}
            language={language}
            item={item}
            open={open}
            setOpen={setOpen}
            setMenuOpen={setMenuOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuItemDropDown;
