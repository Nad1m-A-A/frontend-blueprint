import { useLanguage } from "@contexts/LanguageContext";

const LanguageSetter = ({ setMenuOpen = () => {} }) => {
  const { language, changeLanguage } = useLanguage();
  const handleLanguageChange = () => {
    changeLanguage();
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="flex items-center gap-2 font-en"
      onClick={() => setMenuOpen(false)}
    >
      <span className="text-sm font-medium text-primary-50">
        {language === "en" ? "EN" : "AR"}
      </span>
      <button
        onClick={handleLanguageChange}
        className="relative w-10 h-6 rounded-full transition-colors duration-300 bg-heavy-accent hover:bg-secondary-500"
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-primary-100 shadow-md transform transition-transform duration-300 ${
            language === "en" ? "translate-x-0" : "translate-x-4"
          }`}
        />
      </button>
    </div>
  );
};

export default LanguageSetter;
