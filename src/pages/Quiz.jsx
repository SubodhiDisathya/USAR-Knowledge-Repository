import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, CircleHelp, RotateCcw, ShieldAlert, XCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import { useAuth } from "../context/AuthContext";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase/firebaseConfig";
import quizModules from "../data/quizModules";
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
    safetyText: "This quiz is for educational review only. In real incidents, follow authorized procedures and instructions from qualified personnel.",
    assigned: "Quizzes assigned to you",
    due: "Due",
    status: "Status",
    scoreLabel: "Score",
    assignedStatus: "Assigned",
    inProgressStatus: "In progress",
    completedStatus: "Completed",
    assignmentError: "Could not update your quiz assignment. Your quiz can still continue; please contact an administrator if this persists.",
    assignmentLoadError: "Could not load your assigned quizzes. Please refresh the page or contact an administrator.",
    customQuizLoadError: "Could not load additional training quizzes. Please refresh the page.",
    startAssigned: "Start assigned quiz",
    retryAssigned: "Retake quiz"
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
    safetyText: "මෙම ප්‍රශ්නාවලිය අධ්‍යාපනික සමාලෝචනය සඳහා පමණි. සැබෑ සිදුවීම්වලදී බලයලත් ක්‍රියාපටිපාටි සහ සුදුසුකම් ලත් නිලධාරීන්ගේ උපදෙස් අනුගමනය කරන්න.",
    assigned: "ඔබට පවරා ඇති ප්‍රශ්නාවලි",
    due: "අවසන් දිනය",
    status: "තත්ත්වය",
    scoreLabel: "ලකුණු",
    assignedStatus: "පවරා ඇත",
    inProgressStatus: "කරමින් පවතී",
    completedStatus: "සම්පූර්ණයි",
    assignmentError: "ප්‍රශ්නාවලි පැවරුම යාවත්කාලීන කළ නොහැකි විය. ඔබට ප්‍රශ්නාවලිය දිගටම කරගෙන යා හැක. මෙය දිගටම සිදුවුවහොත් පරිපාලකයෙකු අමතන්න.",
    assignmentLoadError: "ඔබට පවරා ඇති ප්‍රශ්නාවලි පූරණය කළ නොහැකි විය. පිටුව නැවත පූරණය කරන්න හෝ පරිපාලකයෙකු අමතන්න.",
    customQuizLoadError: "අමතර පුහුණු ප්‍රශ්නාවලි පූරණය කළ නොහැකි විය. පිටුව නැවත පූරණය කරන්න.",
    startAssigned: "පවරා ඇති ප්‍රශ්නාවලිය අරඹන්න",
    retryAssigned: "නැවත කරන්න"
  }
};

export default function Quiz() {
  const { currentUser } = useAuth();
  const { locale } = useLocale();
  const text = quizLabels[locale] || quizLabels.en;
  const language = locale === "si" ? "si" : "en";
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [assignmentError, setAssignmentError] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [customQuizModules, setCustomQuizModules] = useState([]);
  const [customQuizError, setCustomQuizError] = useState("");

  useEffect(() => {
    if (!currentUser) return undefined;
    const assignmentsQuery = query(collection(db, "quizAssignments"), where("userId", "==", currentUser.uid));
    const unsubscribe = onSnapshot(
      assignmentsQuery,
      (snapshot) => {
        setAssignments(snapshot.docs.map((assignmentDoc) => ({ id: assignmentDoc.id, ...assignmentDoc.data() })));
        setAssignmentError("");
      },
      (error) => {
        console.error("Error loading quiz assignments:", error);
        setAssignmentError(text.assignmentLoadError);
      }
    );
    return () => unsubscribe();
  }, [currentUser, text.assignmentError, text.assignmentLoadError]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "customQuizzes"),
      (snapshot) => {
        setCustomQuizModules(snapshot.docs.map((quizDoc) => {
          const data = quizDoc.data();
          const title = {
            en: data.title?.en || "",
            si: data.title?.si || data.title?.en || ""
          };
          return {
            id: `custom-${quizDoc.id}`,
            title,
            questions: (data.questions || []).map((item) => ({
              topic: { en: item.topic?.en || title.en, si: item.topic?.si || item.topic?.en || title.si },
              question: { en: item.question?.en || "", si: item.question?.si || item.question?.en || "" },
              options: (item.options || []).map((option) => ({
                en: option.en || "",
                si: option.si || option.en || ""
              })),
              answerIndex: item.answerIndex,
              explanation: {
                en: item.explanation?.en || "",
                si: item.explanation?.si || item.explanation?.en || ""
              }
            }))
          };
        }));
        setCustomQuizError("");
      },
      (error) => {
        console.error("Error loading custom training quizzes:", error);
        setCustomQuizError(text.customQuizLoadError);
      }
    );
    return () => unsubscribe();
  }, [text.customQuizLoadError]);

  const availableQuizModules = useMemo(
    () => [...quizModules, ...customQuizModules],
    [customQuizModules]
  );

  const questions = useMemo(() => {
    if (selectedQuiz === "mixed") return quizModules.flatMap((module) => module.questions);
    return availableQuizModules.find((module) => module.id === selectedQuiz)?.questions || [];
  }, [availableQuizModules, selectedQuiz]);

  const question = questions[questionIndex];

  async function startQuiz(quizId, assignment = null) {
    setSelectedQuiz(quizId);
    setSelectedAssignment(assignment);
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsComplete(false);
    setAssignmentError("");
    if (assignment && assignment.status !== "completed") {
      try {
        await updateDoc(doc(db, "quizAssignments", assignment.id), {
          status: "in_progress",
          startedAt: serverTimestamp()
        });
      } catch (error) {
        console.error("Error marking quiz assignment in progress:", error);
        setAssignmentError(text.assignmentError);
      }
    }
  }

  function chooseAnotherQuiz() {
    setSelectedQuiz(null);
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsComplete(false);
    setSelectedAssignment(null);
    setAssignmentError("");
  }

  function checkAnswer() {
    if (selectedOption === null || isAnswered) return;
    if (selectedOption === question.answerIndex) setScore((currentScore) => currentScore + 1);
    setIsAnswered(true);
  }

  async function continueQuiz() {
    if (questionIndex === questions.length - 1) {
      if (selectedAssignment) {
        try {
          await updateDoc(doc(db, "quizAssignments", selectedAssignment.id), {
            status: "completed",
            score,
            totalQuestions: questions.length,
            percentage: Math.round((score / questions.length) * 100),
            completedAt: serverTimestamp()
          });
        } catch (error) {
          console.error("Error saving quiz assignment result:", error);
          setAssignmentError(text.assignmentError);
        }
      }
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
              {assignments.length > 0 && (
                <div className="quiz-assigned-section">
                  <h2>{text.assigned}</h2>
                  {assignments.map((assignment) => {
                    const module = assignment.quizId === "mixed"
                      ? { title: { en: "All Modules Quiz", si: "සියලුම මොඩියුල ප්‍රශ්නාවලිය" } }
                      : availableQuizModules.find((item) => item.id === assignment.quizId);
                    if (!module) return null;
                    const statusLabel = assignment.status === "completed"
                      ? text.completedStatus
                      : assignment.status === "in_progress"
                        ? text.inProgressStatus
                        : text.assignedStatus;
                    return (
                      <article className="quiz-assigned-card" key={assignment.id}>
                        <div>
                          <h3>{module.title[language]}</h3>
                          <p>
                            {text.status}: <span className={`quiz-assignment-status ${assignment.status || "assigned"}`}>{statusLabel}</span>
                            {assignment.dueDate && <> · {text.due}: {new Date(`${assignment.dueDate}T00:00:00`).toLocaleDateString(language === "si" ? "si-LK" : "en-US")}</>}
                            {assignment.status === "completed" && Number.isFinite(assignment.score) && (
                              <> · {text.scoreLabel}: {assignment.score}/{assignment.totalQuestions}</>
                            )}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="quiz-primary-button"
                          onClick={() => startQuiz(assignment.quizId, assignment)}
                        >
                          {assignment.status === "completed" ? text.retryAssigned : text.startAssigned} <ArrowRight size={17} />
                        </button>
                      </article>
                    );
                  })}
                </div>
              )}
              {assignmentError && <p className="quiz-assignment-error" role="alert">{assignmentError}</p>}
              {customQuizError && <p className="quiz-assignment-error" role="alert">{customQuizError}</p>}
              <h2>{text.choose}</h2>
              <div className="quiz-choice-grid">
                {availableQuizModules.map((module) => (
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
              {assignmentError && <p className="quiz-assignment-error" role="alert">{assignmentError}</p>}
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
              {assignmentError && <p className="quiz-assignment-error" role="alert">{assignmentError}</p>}
              <div className="quiz-question-toolbar">
                <button type="button" className="quiz-back-button" onClick={chooseAnotherQuiz}>
                  <ArrowLeft size={16} /> {text.back}
                </button>
                <span>{text.question} {questionIndex + 1} {text.of} {questions.length}</span>
              </div>
              <div className="quiz-progress-track" aria-label={`${Math.round(progress)}%`}>
                <span style={{ width: `${progress}%` }} />
              </div>
              <span className="quiz-topic">{question.topic[language] || question.topic.en}</span>
              <h2>{question.question[language] || question.question.en}</h2>
              <div className="quiz-options" role="group" aria-label={question.question[language] || question.question.en}>
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
                      <span>{option[language] || option.en}</span>
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
                    <p>{question.explanation[language] || question.explanation.en}</p>
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
