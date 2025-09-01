// App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useLanguage } from "./contexts/LanguageContext";
import Nav from "@components/nav/Nav";
import Fallback from "@components/Fallback";
import PageLogic from "@pages/PageLogic";
import appBg from "@images/app_bg.webp";
import Footer from "@components/footer/Footer";
import useCampaignMode from "@utility/hooks/useCampaignMode";
import CampaignNav from "@components/nav/CampaignNav";
import CampaignFooter from "@components/footer/CampaignFooter";

// lazy pages
const Home = lazy(() => import("@pages/Home"));
const PrivacyPolicy = lazy(() => import("@pages/PrivacyPolicy"));
const NotFound = lazy(() => import("@pages/NotFound"));

// route definitions (object array)
const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/home/:lang?", element: <Home /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "*", element: <NotFound /> },
];

const App = () => {
  const isCampaign = useCampaignMode();

  return (
    <HelmetProvider>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${appBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        />
        <Suspense fallback={<Fallback />}>
          <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            {isCampaign ? <CampaignNav /> : <Nav />}
            <Routes>
              {routesConfig.map(({ path, element }) => (
                <Route
                  key={path}
                  path={path}
                  element={<PageLogic>{element}</PageLogic>}
                />
              ))}
            </Routes>
            {isCampaign ? <CampaignFooter /> : <Footer />}
          </BrowserRouter>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

const AppWithObserver = () => {
  const { language } = useLanguage();
  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      <App />
    </div>
  );
};

export default AppWithObserver;
