import { BASE, CLINIC } from "@data/config";
import { withViewObserver } from "react-load-on-view";
import { Link } from "react-router-dom";
import logo from "@images/logo.webp";

function NavLogo({ setMenuOpen, logoSizeClass = "w-24", target = BASE }) {
  return (
    <div onClick={() => setMenuOpen(false)}>
      <Link to={target}>
        <img src={logo} alt={CLINIC} className={logoSizeClass} />
      </Link>
    </div>
  );
}

export default withViewObserver(NavLogo, { animate: true });
