import { Helmet } from "react-helmet-async";

function IndexingHelmet({ canonical, isCampaign }) {
  return (
    <Helmet>
      {isCampaign ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        canonical && <link rel="canonical" href={canonical} />
      )}
    </Helmet>
  );
}

export default IndexingHelmet;
