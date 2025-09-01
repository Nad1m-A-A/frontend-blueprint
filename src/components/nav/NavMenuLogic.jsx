import { useLocation } from "react-router-dom";
import { NO_MENU_ROUTES } from "@data/config";
function NavMenuLogic({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  const shouldHideMenu = NO_MENU_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (shouldHideMenu) {
    return null;
  }

  return children;
}

export default NavMenuLogic;
