import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "./NavLogo";
import MobileMenuButton from "./MobileMenuButton";
import NavMenu from "./NavMenu";
import LanguageSetter from "@components/LanguageSetter";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", closeMenu);
      window.addEventListener("scroll", closeMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  return (
    <div className="lg:hidden" ref={menuRef}>
      <div className="flex justify-between items-center">
        <NavLogo setMenuOpen={setMenuOpen} />
        <div className="grid grid-cols-2 gap-4">
          <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "400px", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-10 items-center justify-center py-10">
              <NavMenu classes="flex-col gap-10" setMenuOpen={setMenuOpen} />
              <LanguageSetter setMenuOpen={setMenuOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
