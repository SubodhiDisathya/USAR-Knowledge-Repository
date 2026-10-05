import React from "react";

export default function SuggestedQuestions({ items, onSelect, locale }) {
  return (
    <div className="ka-suggested-box">
      <p className="ka-section-label">{locale === "si" ? "පිළිතුරු ඉල්ලීම්" : "Suggested questions"}</p>
      <div className="ka-suggestion-list">
        {items.map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            className="ka-suggestion-button"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
