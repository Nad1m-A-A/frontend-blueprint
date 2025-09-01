import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, baseClass, activeClass }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      className={`${match ? activeClass : baseClass}  block w-fit`}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
