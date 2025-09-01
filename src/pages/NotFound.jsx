import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadData } from "@utility/hooks/useDataLoader";
import FloatingButtons from "@components/FloatingButtons";

const NotFound = () => {
  const { data: generals = {} } = loadData("generals.js", "generals");
  const { data: notFoundContent } = loadData("not-found.js", "notFound");

  const { title, message, buttonText } = notFoundContent || {};

  return (
    <>
      <Helmet>
        <title>{title || generals?.pageTitle}</title>
      </Helmet>
      <main className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 relative">
        <div className="text-center max-w-lg text-secondary-500">
          <h1 className="text-7xl font-bold  mb-4 font-en">404</h1>
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="mb-8">{message}</p>
          <Link to="/" className="light_button big_button regular_button">
            {buttonText}
          </Link>
        </div>
        <FloatingButtons
          phoneNumber={generals?.phoneNumber}
          whatsappMessage={generals?.whatsappMessage}
        />
      </main>
    </>
  );
};

export default NotFound;
