import React from "react";
import SourceCard from "./SourceCard";

export default function ChatMessage({ message, onFeedback, onRelatedQuestion }) {
  const isUser = message.role === "user";

  return (
    <div className={`ka-message-row ${isUser ? "user" : "assistant"}`}>
      {!isUser && <div className="ka-avatar">AI</div>}

      <div className={`ka-message-bubble ${isUser ? "user" : "assistant"} ${message.matched === false ? "fallback" : ""}`}>
        <div className="ka-message-text">{message.content}</div>

        {message.sources && message.sources.length > 0 && (
          <div className="ka-sources-list">
            {(message.sources || []).map((source, index) => (
              <SourceCard key={`${source.en}-${index}`} title={source.en} titleSi={source.si} />
            ))}
          </div>
        )}

        {!isUser && message.relatedQuestions && message.relatedQuestions.length > 0 && (
          <div className="ka-related-questions">
            <p className="ka-related-label">Related questions</p>
            <div className="ka-related-list">
              {message.relatedQuestions.map((question, index) => (
                <button
                  key={`${question}-${index}`}
                  type="button"
                  className="ka-related-question"
                  onClick={() => onRelatedQuestion && onRelatedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {!isUser && !message.welcome && (
          <div className="ka-feedback-row">
            <button
              type="button"
              className={`ka-feedback-button ${message.feedback === "up" ? "active" : ""}`}
              onClick={() => onFeedback && onFeedback(message.id, "up")}
              aria-label="Helpful answer"
            >
              👍
            </button>
            <button
              type="button"
              className={`ka-feedback-button ${message.feedback === "down" ? "active" : ""}`}
              onClick={() => onFeedback && onFeedback(message.id, "down")}
              aria-label="Not helpful answer"
            >
              👎
            </button>
          </div>
        )}
      </div>

      {isUser && <div className="ka-user-avatar">You</div>}
    </div>
  );
}
