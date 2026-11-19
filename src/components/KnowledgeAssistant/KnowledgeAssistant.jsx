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
import { useLocale } from "../../context/LocaleContext";
import PageBackButton from "../PageBackButton";
import "./KnowledgeAssistant.css";

export default function KnowledgeAssistant() {
  const { locale, toggleLocale } = useLocale();
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const suggestions = useMemo(
    () => suggestedQuestionSet[locale] || suggestedQuestionSet.en,
    [locale]
  );

  const activeContent = assistantWelcome[locale] || assistantWelcome.en;

  const handleClearChat = () => {
    setMessages([]);
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
      const result = sendQuestion(trimmedQuestion, locale);

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
          <PageBackButton />
          <ChatHeader
              title={activeContent.title}
              locale={locale}
              onToggleLocale={toggleLocale}
              onClearChat={handleClearChat}
            />

            <div className="ka-chat-panel">
              <ChatInput
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                onSubmit={handleSubmit}
                placeholder={activeContent.placeholder}
                locale={locale}
              />

              <div className="ka-chat-messages">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    onFeedback={handleFeedback}
                    onRelatedQuestion={submitQuestion}
                    locale={locale}
                  />
                ))}

                {isLoading && <TypingIndicator locale={locale} />}
              </div>

              <SuggestedQuestions
                items={suggestions}
                locale={locale}
                onSelect={(question) => submitQuestion(question)}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
