import React from "react";

export default function ChatHeader({ title, subtitle, locale, onToggleLocale, onClearChat }) {
  return (
    <div className="ka-header">
      <div className="ka-header-copy">
        <p className="ka-eyebrow">USAR / AI</p>
        <h2>{title}</h2>
        <p className="ka-subtitle">{subtitle}</p>
      </div>

      <div className="ka-header-actions">
        <button type="button" className="ka-language-toggle" onClick={onToggleLocale}>
          <span className={locale === "en" ? "active" : ""}>English</span>
          <span className="ka-language-divider">|</span>
          <span className={locale === "si" ? "active" : ""}>සිංහල</span>
        </button>

        <button type="button" className="ka-clear-button" onClick={onClearChat}>
          Clear chat
        </button>
      </div>
    </div>
  );
}
