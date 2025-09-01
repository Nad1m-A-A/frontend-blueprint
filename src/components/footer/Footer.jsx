import { useLocation } from "react-router-dom";
import { loadData } from "@utility/hooks/useDataLoader";
import logo from "@images/logo.webp";
import Services from "./Services";
import Pages from "./Pages";
import SocialsAndContacts from "./SocialsAndContacts";

function FooterContent() {
  const { data } = loadData("footer.js", "footer");
  const { services, pages, contact, socials, rights } = data || {};

  return (
    <div className="zoom_out_w_container">
      <footer className="text-primary-50 text-sm relative z-10 overflow-hidden px-12">
        <div className="section_y_padding max-w-5xl mx-auto flex flex-col items-center text-center md:text-start md:items-start md:flex-row gap-10 md:gap-0">
          {data && (
            <>
              <Services services={services} />
              <Pages pages={pages} />
              <SocialsAndContacts
                contactTitle={contact.title}
                socials={socials}
              />
            </>
          )}
        </div>
        <div className="py-5 space-y-2 text-center border-t-[1px] text-xs">
          <span>{rights?.segment1}</span>
          <div>
            {rights?.segment2} &copy; {new Date().getFullYear()}
          </div>
        </div>
        <div className="absolute rounded-sm inset-0 morph -z-20"></div>
        <img
          alt="Logo"
          className="absolute top-1/2 -translate-y-1/2 md:-translate-y-[65%] left-1/2 -translate-x-1/2 w-[330px] animate-pulse -z-30"
          src={logo}
        />
      </footer>
    </div>
  );
}

export default function Footer() {
  const location = useLocation();
  // location.key changes on each navigation; fallback to pathname for SSR/static cases
  const remountKey = location.key || location.pathname;
  return <FooterContent key={remountKey} />;
}
