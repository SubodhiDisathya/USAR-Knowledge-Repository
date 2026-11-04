import React from "react";

export default function SourceCard({ title, titleSi, locale }) {
  return (
    <div className="ka-source-card">
      <span className="ka-source-title">{locale === "si" ? titleSi : title}</span>
    </div>
  );
}
