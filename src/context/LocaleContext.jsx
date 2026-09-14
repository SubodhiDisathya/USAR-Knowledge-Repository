import { LanguageProvider, useLanguage } from "./LanguageContext";

export function useLocale() {
  return useLanguage();
}

export function LocaleProvider({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
