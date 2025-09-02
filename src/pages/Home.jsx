import { withViewObserver } from "react-load-on-view";
import { loadData } from "@utility/hooks/useDataLoader";
import { useLanguage } from "@contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useMemo } from "react";
import Fallback from "@components/Fallback";
import FloatingButtons from "@components/FloatingButtons";
import Hero from "@home/Hero";

const Services = lazy(() => import("@home/Services"));

const Home = () => {
  const { data: generals = {} } = loadData("generals.js", "generals");
  const { language } = useLanguage();
  const dataPath = `/src/assets/data/${language}/home/`;

  const components = useMemo(
    () => [
      // {
      //   Component: withViewObserver(Services, {
      //     animate: true,
      //     // lazyload: true,
      //     // paths: [`${dataPath}services.js`],
      //   }),
      // },
    ],
    [dataPath]
  );

  return (
    <>
      <Helmet>
        <title>{generals?.pageTitle}</title>
      </Helmet>
      <Hero />
      <Suspense fallback={<Fallback />}>
        {components.map(({ Component }, i) => (
          <Component key={i} />
        ))}
      </Suspense>
      <FloatingButtons whatsappMessage={generals?.whatsappMessage} />
    </>
  );
};

export default Home;
