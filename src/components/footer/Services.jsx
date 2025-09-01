import { Link } from "react-router-dom";

const Services = ({ services }) => (
  <div className="flex-1">
    <div className="font-bold mb-3 text-lg">{services.title}</div>
    <ul className="space-y-1">
      {services.items.map((service) => (
        <li key={service.url}>
          <Link to={service.url} className="hover:text-secondary-500 duration-300">
            {service.title}
          </Link>
          {service.sub && (
            <ul className="ms-4 mt-0.5">
              <li>
                <Link to={service.sub.url} className="hover:text-secondary-500 duration-300 text-xs">
                  {service.sub.title}
                </Link>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
