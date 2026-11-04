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
  const { locale, toggleLocale } = useLocale();
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(() => [createWelcomeMessage(locale)]);

  const suggestions = useMemo(
    () => suggestedQuestionSet[locale] || suggestedQuestionSet.en,
    [locale]
  );

  const activeContent = assistantWelcome[locale] || assistantWelcome.en;

  const handleClearChat = () => {
    setMessages([createWelcomeMessage(locale)]);
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
              subtitle={activeContent.subtitle}
              locale={locale}
              onToggleLocale={toggleLocale}
              onClearChat={handleClearChat}
            />

            <div className="ka-chat-panel">
              <div className="ka-chat-messages">
                {messages.map((storedMessage) => {
                  const message = storedMessage.welcome ? createWelcomeMessage(locale) : storedMessage;
                  return (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      onFeedback={handleFeedback}
                      onRelatedQuestion={submitQuestion}
                      locale={locale}
                    />
                  );
                })}

                {isLoading && <TypingIndicator locale={locale} />}
              </div>

              <SuggestedQuestions
                items={suggestions}
                locale={locale}
                onSelect={(question) => submitQuestion(question)}
              />

              <ChatInput
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                onSubmit={handleSubmit}
                placeholder={activeContent.placeholder}
                locale={locale}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
