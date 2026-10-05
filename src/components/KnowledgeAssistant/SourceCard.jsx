import React from "react";

export default function SourceCard({ title, titleSi }) {
  return (
    <div className="ka-source-card">
      <span className="ka-source-title">{title}</span>
      <span className="ka-source-title-si">{titleSi}</span>
    </div>
  );
}
