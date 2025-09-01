import { AVAILABLE_LANGUAGES } from "@data/config";
import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndexingHelmet from "./IndexingHelmet";
import useCampaignMode from "@utility/hooks/useCampaignMode";

const NotFound = lazy(() => import("./NotFound"));

function PageLogic({ children }) {
  const { lang } = useParams();
  const [invalidUrl, setInvalidUrl] = useState(false);

  // Detect campaign mode for canonical handling
  const isCampaign = useCampaignMode();

  // Compute canonical: only set for public pages (not campaign)
  const canonical = !isCampaign
    ? window.location.origin + window.location.pathname
    : undefined;

  useEffect(() => {
    if (lang) {
      if (!AVAILABLE_LANGUAGES.includes(lang)) {
        setInvalidUrl(true);
        return;
      }
    }
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (invalidUrl) {
    return <NotFound />;
  }

  return (
    <>
      <IndexingHelmet canonical={canonical} isCampaign={isCampaign} />
      {children}
    </>
  );
}

export default PageLogic;
