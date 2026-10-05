import React from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({ value, onChange, onSubmit, placeholder }) {
  return (
    <form className="ka-input-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="ka-text-input"
        aria-label="Ask the USAR assistant"
      />
      <button type="submit" className="ka-send-button" aria-label="Send message">
        <SendHorizonal size={18} />
        <span>{"Send"}</span>
      </button>
    </form>
  );
}
