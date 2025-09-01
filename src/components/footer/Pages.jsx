import { Link } from "react-router-dom";

const Pages = ({ pages }) => (
  <div className="flex-1">
    <div className="font-bold mb-3 text-lg">{pages.title}</div>
    <ul className="space-y-1">
      {pages.items.map((page) => (
        <li key={page.url}>
          <Link to={page.url} className="hover:text-secondary-600 duration-300">
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Pages;
