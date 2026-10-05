import React, { useMemo, useState } from "react";
import Sidebar from "../Sidebar";
import TopHeader from "../TopHeader";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";
import { assistantWelcome, suggestedQuestionSet } from "./mockKnowledge";
import { sendQuestion } from "./knowledgeAssistantService";
import "./KnowledgeAssistant.css";

function createWelcomeMessage(locale) {
  return {
    id: `welcome-${locale}`,
    role: "assistant",
    content: assistantWelcome[locale]?.subtitle || assistantWelcome.en.subtitle,
    welcome: true,
    matched: true
  };
}

export default function KnowledgeAssistant() {
  const [assistantLocale, setAssistantLocale] = useState("en");
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(() => [createWelcomeMessage("en")]);

  const suggestions = useMemo(
    () => suggestedQuestionSet[assistantLocale] || suggestedQuestionSet.en,
    [assistantLocale]
  );

  const activeContent = assistantWelcome[assistantLocale] || assistantWelcome.en;

  const handleLocaleToggle = () => {
    setAssistantLocale((current) => (current === "en" ? "si" : "en"));
  };

  const handleClearChat = () => {
    setMessages([createWelcomeMessage(assistantLocale)]);
  };

  const handleFeedback = (messageId, type) => {
    setMessages((currentMessages) =>
      currentMessages.map((message) =>
        message.id === messageId ? { ...message, feedback: type } : message
      )
    );
  };

  const submitQuestion = (question) => {
    const trimmedQuestion = (question || "").trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmedQuestion
      }
    ]);

    setMessageInput("");
    setIsLoading(true);

    window.setTimeout(() => {
      const result = sendQuestion(trimmedQuestion, assistantLocale);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: result.answer,
          title: result.title,
          sources: result.sources || [],
          relatedQuestions: result.relatedQuestions || [],
          matched: result.matched,
          feedback: null
        }
      ]);

      setIsLoading(false);
    }, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(messageInput);
  };

  return (
    <div className="knowledge-assistant-page">
      <Sidebar />

      <div className="main-content">
        <TopHeader />

        <main className="knowledge-assistant-main">
          <div className="knowledge-assistant-shell">
            <ChatHeader
              title={activeContent.title}
              subtitle={activeContent.subtitle}
              locale={assistantLocale}
              onToggleLocale={handleLocaleToggle}
              onClearChat={handleClearChat}
            />

            <div className="ka-chat-panel">
              <div className="ka-chat-messages">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    onFeedback={handleFeedback}
                    onRelatedQuestion={submitQuestion}
                  />
                ))}

                {isLoading && <TypingIndicator />}
              </div>

              <SuggestedQuestions
                items={suggestions}
                locale={assistantLocale}
                onSelect={(question) => submitQuestion(question)}
              />

              <ChatInput
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                onSubmit={handleSubmit}
                placeholder={activeContent.placeholder}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
