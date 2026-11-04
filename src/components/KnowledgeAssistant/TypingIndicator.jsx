import React from "react";

export default function TypingIndicator({ locale }) {
  return (
    <div className="ka-message-row assistant">
      <div className="ka-avatar">AI</div>
      <div className="ka-message-bubble assistant typing">
        <div className="ka-typing-dots" aria-label={locale === "si" ? "සහායකය ටයිප් කරමින් සිටී" : "Assistant is typing"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
