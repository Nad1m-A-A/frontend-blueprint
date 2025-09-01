import { useEffect, useState } from "react";
import { useLanguage } from "@contexts/LanguageContext";

// Use Vite's import.meta.glob to pre-bundle all data files
const modules = import.meta.glob(
  ["/src/assets/data/*/**/*.js", "/src/assets/data/*.js"],
  {
    eager: false,
  }
);

/**
 * Custom hook to dynamically load data based on language
 * @param {string} path - Path to the data module relative to the language data directory
 * @param {string} dataKey - The exported key from the module to extract (default: null, returns whole module)
 * @param {string} needLanguage - Decide wether to look in the root data directory or add the active language in the basePath
 * @param {string} basePath - Optional base path override (default: '/src/assets/data/')
 * @returns {Object} The loaded data and loading state
 */
export const loadData = (
  path,
  dataKey,
  needLanguage = true,
  basePath = "/src/assets/data/"
) => {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        let fullPath;
        if (needLanguage) {
          fullPath = `${basePath}${language}/${path}`;
        } else {
          fullPath = `${basePath}${path}`;
        }
        const module = await modules[fullPath]();

        if (dataKey) {
          setData(module[dataKey]);
        } else {
          setData(module);
        }
        setError(null);
      } catch (err) {
        console.error(`Error loading data from ${path}:`, err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language, path, dataKey, basePath, needLanguage]);

  return { data, loading, error };
};
