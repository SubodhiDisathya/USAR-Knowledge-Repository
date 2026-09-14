import React from "react";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import "./CategoryCard.css";

export default function CategoryCard({ categoryKey, count }) {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="category-card">
      <div className="card-content">
        <h3>{t[categoryKey]}</h3>
        <p className="count-badge">{count} items</p>
      </div>
    </div>
  );
}
