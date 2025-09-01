import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();
const LANGUAGE_KEY = "companyname_language";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // First check URL for both en and ar
    if (location.pathname.includes("/en")) return "en";
    if (location.pathname.includes("/ar")) return "ar";
    // Then check localStorage
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage) return savedLanguage;
    // Default to English and save it
    const defaultLanguage = "en";
    localStorage.setItem(LANGUAGE_KEY, defaultLanguage);
    return defaultLanguage;
  });
  useEffect(() => {
    document.documentElement.lang = language;
    // Save to localStorage whenever language changes
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  const changeLanguage = (lang) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
