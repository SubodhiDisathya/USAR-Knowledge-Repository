import React from "react";

export default function ChatHeader({ title, locale, onToggleLocale, onClearChat }) {
  return (
    <div className="ka-header">
      <div className="ka-header-copy">
        <h2>{title}</h2>
      </div>

      <div className="ka-header-actions">
        <button type="button" className="ka-language-toggle" onClick={onToggleLocale}>
          <span className={locale === "en" ? "active" : ""}>{locale === "si" ? "ඉංග්‍රීසි" : "English"}</span>
          <span className="ka-language-divider">|</span>
          <span className={locale === "si" ? "active" : ""}>සිංහල</span>
        </button>

        <button type="button" className="ka-clear-button" onClick={onClearChat}>
          {locale === "si" ? "සංවාදය මකන්න" : "Clear chat"}
        </button>
      </div>
    </div>
  );
}
