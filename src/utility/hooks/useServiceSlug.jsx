import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_SERVICE = "/";
const DEFAULT_LANGS = new Set(["en", "ar"]);

/**
 * Extracts the service slug (and optional language) from paths like:
 * /campaign/:service
 * /campaign/:service/:lang?
 * Also works if "campaign" is missing: /:service or /:service/:lang?
 */
export default function useServiceSlug(options = {}) {
  const { base = "campaign", supportedLangs = DEFAULT_LANGS } = options;
  const { pathname } = useLocation();

  const { serviceSlug, lang } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean); // ["campaign","nutrition","en"]

    // If a base segment (e.g., "campaign") exists, look after it; otherwise use whole path
    const baseIndex = base ? segments.indexOf(base) : -1;
    const after = baseIndex >= 0 ? segments.slice(baseIndex + 1) : segments;

    if (after.length === 0) {
      return { serviceSlug: DEFAULT_SERVICE, lang: null };
    }

    const last = after[after.length - 1];
    const isLang = supportedLangs.has(last);
    const langDetected = isLang ? last : null;
    const service = isLang
      ? after[after.length - 2] || DEFAULT_SERVICE
      : last || DEFAULT_SERVICE;

    return { serviceSlug: service, lang: langDetected };
  }, [pathname, base, supportedLangs]);

  return { serviceSlug, lang };
}
