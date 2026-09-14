import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en";
import si from "../translations/si";

const translations = { en, si };
const LanguageContext = createContext(null);

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem("usar-language") || "en");

  useEffect(() => {
    localStorage.setItem("usar-language", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  function toggleLocale() {
    setLocale((current) => (current === "en" ? "si" : "en"));
  }

  const value = { locale, setLocale, toggleLocale, t: translations[locale] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
