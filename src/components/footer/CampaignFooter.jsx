import { loadData } from "@utility/hooks/useDataLoader";
import logo from "@images/logo.webp";
import Pages from "./Pages";
import LinksAndContacts from "./SocialsAndContacts";

function CampaignFooter() {
  const { data } = loadData("footer.js", "footer");
  const { pages, contact, rights } = data || {};
  return (
    <div className="app_padding pb-4 zoom_out_w_container">
      <footer className="text-primary-50 text-sm relative z-10 overflow-hidden px-12">
        <div className="section_y_padding text_container mx-auto flex flex-col text-center md:text-start md:flex-row gap-10 md:gap-0">
          {data && (
            <>
              <Pages
                pages={{
                  ...pages,
                  items: pages.items.filter(
                    (item) => item.url === "/privacy-policy"
                  ),
                }}
              />
              <LinksAndContacts contactTitle={contact.title} />
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

export default CampaignFooter;
