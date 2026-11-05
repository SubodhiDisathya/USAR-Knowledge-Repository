import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, CircleHelp, RotateCcw, ShieldAlert, XCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import { quizQuestionSets } from "../data/quizQuestions";
import "./Quiz.css";

const quizLabels = {
  en: {
    badge: "KNOWLEDGE CHECK",
    title: "Training Quiz",
    description: "Test what you have learned from the Operational Guidelines modules and First Aid & Medical topics.",
    moduleDescription: "Test your knowledge of this module.",
    mixed: "All Modules Quiz",
    mixedDescription: "A combined quiz covering operational guidance and medical topics.",
    questions: "questions",
    start: "Start Quiz",
    back: "Choose another quiz",
    question: "Question",
    of: "of",
    submit: "Check Answer",
    next: "Next Question",
    finish: "See Results",
    correct: "Correct!",
    incorrect: "Not quite",
    score: "Your score",
    resultTitle: "Quiz complete",
    resultMessage: "Review the topics and try again to improve your score.",
    retry: "Try Again",
    choose: "Choose a quiz",
    safety: "Learning reminder",
    safetyText: "This quiz is for educational review only. In real incidents, follow authorized procedures and instructions from qualified personnel."
  },
  si: {
    badge: "දැනුම පරීක්ෂාව",
    title: "පුහුණු ප්‍රශ්නාවලිය",
    description: "මෙහෙයුම් මාර්ගෝපදේශ මොඩියුල සහ පළමු ප්‍රතිකාර හා වෛද්‍ය මාතෘකා පිළිබඳ ඔබ ඉගෙනගත් දේ පරීක්ෂා කරන්න.",
    moduleDescription: "මෙම මොඩියුලය පිළිබඳ ඔබේ දැනුම පරීක්ෂා කරන්න.",
    mixed: "සියලුම මොඩියුල ප්‍රශ්නාවලිය",
    mixedDescription: "මෙහෙයුම් සහ වෛද්‍ය මොඩියුල හතම ආවරණය කරන ප්‍රශ්නාවලියකි.",
    questions: "ප්‍රශ්න",
    start: "ප්‍රශ්නාවලිය ආරම්භ කරන්න",
    back: "වෙනත් ප්‍රශ්නාවලියක් තෝරන්න",
    question: "ප්‍රශ්නය",
    of: "න්",
    submit: "පිළිතුර පරීක්ෂා කරන්න",
    next: "ඊළඟ ප්‍රශ්නය",
    finish: "ප්‍රතිඵල බලන්න",
    correct: "නිවැරදියි!",
    incorrect: "එය නිවැරදි පිළිතුර නොවේ",
    score: "ඔබේ ලකුණු",
    resultTitle: "ප්‍රශ්නාවලිය අවසන්",
    resultMessage: "මාතෘකා නැවත අධ්‍යයනය කර ලකුණු වැඩි කරගැනීමට නැවත උත්සාහ කරන්න.",
    retry: "නැවත උත්සාහ කරන්න",
    choose: "ප්‍රශ්නාවලියක් තෝරන්න",
    safety: "අධ්‍යාපනික මතක් කිරීම",
    safetyText: "මෙම ප්‍රශ්නාවලිය අධ්‍යාපනික සමාලෝචනය සඳහා පමණි. සැබෑ සිදුවීම්වලදී බලයලත් ක්‍රියාපටිපාටි සහ සුදුසුකම් ලත් නිලධාරීන්ගේ උපදෙස් අනුගමනය කරන්න."
  }
};

const quizModules = [
  {
    id: "module-1",
    title: { en: "Module 1: First Responder Programme", si: "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 1:"))
  },
  {
    id: "module-2",
    title: { en: "Module 2: The Rescue Environment", si: "මොඩියුලය 2: මුදාගැනීමේ පරිසරය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 2:"))
  },
  {
    id: "module-3",
    title: { en: "Module 3: Scene Management", si: "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 3:"))
  },
  {
    id: "module-4",
    title: { en: "Module 4: Search Module", si: "මොඩියුලය 4: සෙවීමේ මොඩියුලය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 4:"))
  },
  {
    id: "module-5",
    title: { en: "Module 5: Rescue Module", si: "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 5:"))
  },
  {
    id: "module-6",
    title: { en: "Module 6: First Aid & Medical", si: "මොඩියුලය 6: පළමු ප්‍රතිකාර සහ වෛද්‍ය ප්‍රතිචාර" },
    questions: quizQuestionSets.medical
  },
  {
    id: "module-7",
    title: { en: "Module 7: Consolidation Exercise", si: "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 7:"))
  }
];

export default function Quiz() {
  const { locale } = useLocale();
  const text = quizLabels[locale] || quizLabels.en;
  const language = locale === "si" ? "si" : "en";
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const questions = useMemo(() => {
    if (selectedQuiz === "mixed") return quizModules.flatMap((module) => module.questions);
    return quizModules.find((module) => module.id === selectedQuiz)?.questions || [];
  }, [selectedQuiz]);

  const question = questions[questionIndex];

  function startQuiz(quizId) {
    setSelectedQuiz(quizId);
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsComplete(false);
  }

  function chooseAnotherQuiz() {
    setSelectedQuiz(null);
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsComplete(false);
  }

  function checkAnswer() {
    if (selectedOption === null || isAnswered) return;
    if (selectedOption === question.answerIndex) setScore((currentScore) => currentScore + 1);
    setIsAnswered(true);
  }

  function continueQuiz() {
    if (questionIndex === questions.length - 1) {
      setIsComplete(true);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  }

  const progress = questions.length ? ((questionIndex + (isAnswered ? 1 : 0)) / questions.length) * 100 : 0;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="quiz-container">
          <section className="quiz-hero">
            <span className="quiz-badge"><BookOpenCheck size={15} /> {text.badge}</span>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
          </section>

          {!selectedQuiz ? (
            <section className="quiz-selection">
              <h2>{text.choose}</h2>
              <div className="quiz-choice-grid">
                {quizModules.map((module) => (
                  <article className="quiz-choice-card" key={module.id}>
                    <div className="quiz-choice-icon"><CircleHelp size={24} /></div>
                    <h3>{module.title[language]}</h3>
                    <p>{text.moduleDescription}</p>
                    <span className="quiz-count">{module.questions.length} {text.questions}</span>
                    <button type="button" className="quiz-primary-button" onClick={() => startQuiz(module.id)}>
                      {text.start} <ArrowRight size={17} />
                    </button>
                  </article>
                ))}
                <article className="quiz-choice-card quiz-choice-mixed">
                  <div className="quiz-choice-icon"><CircleHelp size={24} /></div>
                  <h3>{text.mixed}</h3>
                  <p>{text.mixedDescription}</p>
                  <span className="quiz-count">{quizModules.reduce((count, module) => count + module.questions.length, 0)} {text.questions}</span>
                  <button type="button" className="quiz-primary-button" onClick={() => startQuiz("mixed")}>
                    {text.start} <ArrowRight size={17} />
                  </button>
                </article>
              </div>
            </section>
          ) : isComplete ? (
            <section className="quiz-result">
              <div className="quiz-result-icon"><CheckCircle2 size={30} /></div>
              <h2>{text.resultTitle}</h2>
              <p>{text.resultMessage}</p>
              <div className="quiz-score">{score}<span> / {questions.length}</span></div>
              <div className="quiz-score-caption">{text.score} · {Math.round((score / questions.length) * 100)}%</div>
              <div className="quiz-result-actions">
                <button type="button" className="quiz-secondary-button" onClick={chooseAnotherQuiz}>
                  <ArrowLeft size={17} /> {text.back}
                </button>
                <button type="button" className="quiz-primary-button" onClick={() => startQuiz(selectedQuiz)}>
                  <RotateCcw size={17} /> {text.retry}
                </button>
              </div>
            </section>
          ) : question ? (
            <section className="quiz-question-card">
              <div className="quiz-question-toolbar">
                <button type="button" className="quiz-back-button" onClick={chooseAnotherQuiz}>
                  <ArrowLeft size={16} /> {text.back}
                </button>
                <span>{text.question} {questionIndex + 1} {text.of} {questions.length}</span>
              </div>
              <div className="quiz-progress-track" aria-label={`${Math.round(progress)}%`}>
                <span style={{ width: `${progress}%` }} />
              </div>
              <span className="quiz-topic">{question.topic[language]}</span>
              <h2>{question.question[language]}</h2>
              <div className="quiz-options" role="group" aria-label={question.question[language]}>
                {question.options.map((option, index) => {
                  const isCorrectOption = isAnswered && index === question.answerIndex;
                  const isWrongSelection = isAnswered && index === selectedOption && index !== question.answerIndex;
                  return (
                    <button
                      type="button"
                      className={`quiz-option${selectedOption === index ? " selected" : ""}${isCorrectOption ? " correct" : ""}${isWrongSelection ? " incorrect" : ""}`}
                      key={option.en}
                      onClick={() => !isAnswered && setSelectedOption(index)}
                      disabled={isAnswered}
                      aria-pressed={selectedOption === index}
                    >
                      <span className="quiz-option-letter">{String.fromCharCode(65 + index)}</span>
                      <span>{option[language]}</span>
                      {isCorrectOption && <CheckCircle2 size={19} />}
                      {isWrongSelection && <XCircle size={19} />}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className={`quiz-feedback${selectedOption === question.answerIndex ? " is-correct" : " is-incorrect"}`} aria-live="polite">
                  {selectedOption === question.answerIndex ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  <div>
                    <strong>{selectedOption === question.answerIndex ? text.correct : text.incorrect}</strong>
                    <p>{question.explanation[language]}</p>
                  </div>
                </div>
              )}

              <div className="quiz-question-actions">
                {!isAnswered ? (
                  <button type="button" className="quiz-primary-button" onClick={checkAnswer} disabled={selectedOption === null}>
                    {text.submit} <CheckCircle2 size={17} />
                  </button>
                ) : (
                  <button type="button" className="quiz-primary-button" onClick={continueQuiz}>
                    {questionIndex === questions.length - 1 ? text.finish : text.next} <ArrowRight size={17} />
                  </button>
                )}
              </div>
            </section>
          ) : null}

          <aside className="quiz-safety-note">
            <ShieldAlert size={20} />
            <div>
              <h2>{text.safety}</h2>
              <p>{text.safetyText}</p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
