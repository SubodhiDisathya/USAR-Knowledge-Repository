import React from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({ value, onChange, onSubmit, placeholder, locale }) {
  return (
    <form className="ka-input-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="ka-text-input"
        aria-label={locale === "si" ? "USAR සහායකගෙන් විමසන්න" : "Ask the USAR assistant"}
      />
      <button type="submit" className="ka-send-button" aria-label={locale === "si" ? "පණිවිඩය යවන්න" : "Send message"}>
        <SendHorizonal size={18} />
        <span>{locale === "si" ? "යවන්න" : "Send"}</span>
      </button>
    </form>
  );
}
