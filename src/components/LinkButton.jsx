import { Link } from "react-router-dom";

function LinkButton({ link, text, styles }) {
  return (
    <Link className={`${styles || "dark_button regular_button"}`} to={link}>
      {text}
    </Link>
  );
}

export default LinkButton;
