import React, { useEffect, useMemo, useState } from "react";
import { collection, doc, onSnapshot, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { ArrowLeft, ClipboardCheck, Plus, Save, Pencil, X } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import { db } from "../firebase/firebaseConfig";
import { assignableQuizModules } from "../data/quizModules";
import "./AdminQuizAssignments.css";

const labels = {
  en: {
    title: "Quiz Assignments",
    description: "Assign training quizzes and review each learner's completion and score.",
    assign: "Create assignment",
    quiz: "Quiz module",
    chooseQuiz: "Choose a quiz module",
    learners: "Assign to users",
    dueDate: "Due date (optional)",
    selectAll: "Select all users",
    clear: "Clear selection",
    submit: "Assign quiz",
    assigned: "Current assignments",
    learner: "Learner",
    status: "Status",
    due: "Due date",
    score: "Score",
    created: "Assigned",
    pending: "Assigned",
    inProgress: "In progress",
    completed: "Completed",
    noUsers: "No regular user accounts are available.",
    noAssignments: "No quiz assignments yet.",
    loading: "Loading assignments and users...",
    saveError: "Could not create the quiz assignment. Please try again.",
    loadError: "Could not load quiz assignment data. Refresh the page or contact an administrator.",
    required: "Choose a quiz and at least one user.",
    success: "Quiz assigned successfully.",
    back: "Admin dashboard",
    questions: "questions",
    manageQuizzes: "Create and manage quizzes",
    customQuizDescription: "Build quizzes for Test Your Knowledge. Add questions, answer options, select the correct answer, and provide explanations.",
    createQuiz: "Create quiz",
    editQuiz: "Edit quiz",
    quizTitle: "Quiz title",
    quizTitleSi: "Quiz title (Sinhala, optional)",
    question: "Question",
    questionSi: "Question (Sinhala, optional)",
    option: "Option",
    optionSi: "Option (Sinhala, optional)",
    correctAnswer: "Correct answer",
    explanation: "Answer explanation",
    explanationSi: "Answer explanation (Sinhala, optional)",
    addQuestion: "Add question",
    removeQuestion: "Remove question",
    saveQuiz: "Save quiz",
    cancelEdit: "Cancel",
    noCustomQuizzes: "No custom quizzes yet.",
    quizRequired: "Enter a quiz title, at least one question, and four answer options for each question.",
    quizSaved: "Quiz saved and available in Training Quiz.",
    quizSaveError: "Could not save this quiz. Please try again.",
    customQuizLoadError: "Could not load custom quizzes. Refresh the page or contact an administrator.",
    chooseCorrect: "Choose the correct option",
    topic: "Topic"
  },
  si: {
    title: "ප්‍රශ්නාවලි පැවරුම්",
    description: "පුහුණු ප්‍රශ්නාවලි පවරා, එක් එක් පරිශීලකයාගේ සම්පූර්ණ කිරීම සහ ලකුණු පරීක්ෂා කරන්න.",
    assign: "පැවරුමක් සාදන්න",
    quiz: "ප්‍රශ්නාවලි මොඩියුලය",
    chooseQuiz: "ප්‍රශ්නාවලි මොඩියුලයක් තෝරන්න",
    learners: "පරිශීලකයන් තෝරන්න",
    dueDate: "අවසන් දිනය (අනිවාර්ය නොවේ)",
    selectAll: "සියලුම පරිශීලකයන් තෝරන්න",
    clear: "තේරීම ඉවත් කරන්න",
    submit: "ප්‍රශ්නාවලිය පවරන්න",
    assigned: "දැනට පවරා ඇති ප්‍රශ්නාවලි",
    learner: "පරිශීලකයා",
    status: "තත්ත්වය",
    due: "අවසන් දිනය",
    score: "ලකුණු",
    created: "පැවරූ දිනය",
    pending: "පවරා ඇත",
    inProgress: "කරමින් පවතී",
    completed: "සම්පූර්ණයි",
    noUsers: "සාමාන්‍ය පරිශීලක ගිණුම් නොමැත.",
    noAssignments: "තවම ප්‍රශ්නාවලි පවරා නැත.",
    loading: "පරිශීලකයන් සහ පැවරුම් පූරණය වෙමින්...",
    saveError: "ප්‍රශ්නාවලිය පැවරීමට නොහැකි විය. නැවත උත්සාහ කරන්න.",
    loadError: "පැවරුම් දත්ත පූරණය කළ නොහැකි විය. පිටුව නැවත පූරණය කරන්න හෝ පරිපාලකයෙකු අමතන්න.",
    required: "ප්‍රශ්නාවලියක් සහ අවම වශයෙන් එක් පරිශීලකයෙකු තෝරන්න.",
    success: "ප්‍රශ්නාවලිය සාර්ථකව පවරන ලදී.",
    back: "පරිපාලක පුවරුව",
    questions: "ප්‍රශ්න",
    manageQuizzes: "ප්‍රශ්නාවලි සාදන්න සහ කළමනාකරණය කරන්න",
    customQuizDescription: "ඔබේ දැනුම පරීක්ෂා කරන්න කොටස සඳහා ප්‍රශ්නාවලි සාදන්න. ප්‍රශ්න සහ පිළිතුරු එක් කර නිවැරදි පිළිතුර තෝරන්න.",
    createQuiz: "ප්‍රශ්නාවලියක් සාදන්න",
    editQuiz: "ප්‍රශ්නාවලිය සංස්කරණය කරන්න",
    quizTitle: "ප්‍රශ්නාවලියේ නම",
    quizTitleSi: "ප්‍රශ්නාවලියේ නම (සිංහල, අනිවාර්ය නොවේ)",
    question: "ප්‍රශ්නය",
    questionSi: "ප්‍රශ්නය (සිංහල, අනිවාර්ය නොවේ)",
    option: "පිළිතුරු විකල්පය",
    optionSi: "පිළිතුරු විකල්පය (සිංහල, අනිවාර්ය නොවේ)",
    correctAnswer: "නිවැරදි පිළිතුර",
    explanation: "පිළිතුරු පැහැදිලි කිරීම",
    explanationSi: "පිළිතුරු පැහැදිලි කිරීම (සිංහල, අනිවාර්ය නොවේ)",
    addQuestion: "ප්‍රශ්නයක් එක් කරන්න",
    removeQuestion: "ප්‍රශ්නය ඉවත් කරන්න",
    saveQuiz: "ප්‍රශ්නාවලිය සුරකින්න",
    cancelEdit: "අවලංගු කරන්න",
    noCustomQuizzes: "තවම අභිරුචි ප්‍රශ්නාවලි නොමැත.",
    quizRequired: "ප්‍රශ්නාවලියේ නමක්, අවම වශයෙන් එක් ප්‍රශ්නයක් සහ එක් එක් ප්‍රශ්නයට පිළිතුරු විකල්ප හතරක් ඇතුළත් කරන්න.",
    quizSaved: "ප්‍රශ්නාවලිය සුරැකී පුහුණු ප්‍රශ්නාවලියට එක් කරන ලදී.",
    quizSaveError: "ප්‍රශ්නාවලිය සුරැකීමට නොහැකි විය. නැවත උත්සාහ කරන්න.",
    customQuizLoadError: "අභිරුචි ප්‍රශ්නාවලි පූරණය කළ නොහැකි විය. පිටුව නැවත පූරණය කරන්න හෝ පරිපාලකයෙකු අමතන්න.",
    chooseCorrect: "නිවැරදි පිළිතුර තෝරන්න",
    topic: "මාතෘකාව"
  }
};

const createEmptyQuestion = () => ({
  topic: { en: "", si: "" },
  question: { en: "", si: "" },
  options: Array.from({ length: 4 }, () => ({ en: "", si: "" })),
  answerIndex: 0,
  explanation: { en: "", si: "" }
});

const createEmptyQuiz = () => ({
  title: { en: "", si: "" },
  questions: [createEmptyQuestion()]
});

function formatDate(value, locale) {
  if (!value) return "—";
  const date = value.toDate ? value.toDate() : new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString(locale === "si" ? "si-LK" : "en-US");
}

export default function AdminQuizAssignments() {
  const { currentUser } = useAuth();
  const { locale } = useLocale();
  const language = locale === "si" ? "si" : "en";
  const text = labels[language];
  const [users, setUsers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [customQuizzes, setCustomQuizzes] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [quizId, setQuizId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [quizEditor, setQuizEditor] = useState(null);
  const [editingQuizId, setEditingQuizId] = useState(null);
  const [quizSubmitting, setQuizSubmitting] = useState(false);
  const [quizError, setQuizError] = useState("");
  const [quizNotice, setQuizNotice] = useState("");
  const [customQuizError, setCustomQuizError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let usersLoaded = false;
    let assignmentsLoaded = false;
    const updateLoading = () => setLoading(!(usersLoaded && assignmentsLoaded));
    const unsubscribeUsers = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        setUsers(snapshot.docs
          .map((userDoc) => ({ uid: userDoc.id, ...userDoc.data() }))
          .filter((user) => user.role !== "admin")
          .sort((a, b) => (a.displayName || a.email || "").localeCompare(b.displayName || b.email || "")));
        usersLoaded = true;
        updateLoading();
      },
      (snapshotError) => {
        console.error("Error loading users for quiz assignments:", snapshotError);
        setError(text.loadError);
        usersLoaded = true;
        updateLoading();
      }
    );
    const unsubscribeAssignments = onSnapshot(
      collection(db, "quizAssignments"),
      (snapshot) => {
        setAssignments(snapshot.docs.map((assignmentDoc) => ({ id: assignmentDoc.id, ...assignmentDoc.data() })));
        assignmentsLoaded = true;
        updateLoading();
      },
      (snapshotError) => {
        console.error("Error loading quiz assignments:", snapshotError);
        setError(text.loadError);
        assignmentsLoaded = true;
        updateLoading();
      }
    );
    const unsubscribeCustomQuizzes = onSnapshot(
      collection(db, "customQuizzes"),
      (snapshot) => {
        setCustomQuizzes(snapshot.docs.map((quizDoc) => ({
          id: `custom-${quizDoc.id}`,
          documentId: quizDoc.id,
          ...quizDoc.data()
        })));
        setCustomQuizError("");
      },
      (snapshotError) => {
        console.error("Error loading custom quizzes:", snapshotError);
        setCustomQuizError(text.customQuizLoadError);
      }
    );
    return () => {
      unsubscribeUsers();
      unsubscribeAssignments();
      unsubscribeCustomQuizzes();
    };
  }, [text.loadError, text.customQuizLoadError]);

  const availableQuizzes = useMemo(
    () => [...assignableQuizModules, ...customQuizzes],
    [customQuizzes]
  );

  const sortedAssignments = useMemo(
    () => [...assignments].sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0)),
    [assignments]
  );

  function toggleUser(uid) {
    setSelectedUsers((current) => current.includes(uid)
      ? current.filter((selectedUid) => selectedUid !== uid)
      : [...current, uid]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    if (!quizId || selectedUsers.length === 0) {
      setError(text.required);
      return;
    }

    const module = availableQuizzes.find((item) => item.id === quizId);
    if (!module) {
      setError(text.required);
      return;
    }

    setSubmitting(true);
    try {
      const batch = writeBatch(db);
      selectedUsers.forEach((uid) => {
        const user = users.find((item) => item.uid === uid);
        if (!user) return;
        const assignmentRef = doc(collection(db, "quizAssignments"));
        batch.set(assignmentRef, {
          quizId,
          quizTitle: module.title.en,
          userId: uid,
          userName: user.displayName || user.email || uid,
          userEmail: user.email || "",
          createdBy: currentUser.uid,
          createdAt: serverTimestamp(),
          dueDate,
          status: "assigned"
        });
      });
      await batch.commit();
      setSelectedUsers([]);
      setQuizId("");
      setDueDate("");
      setNotice(text.success);
    } catch (saveError) {
      console.error("Error creating quiz assignments:", saveError);
      setError(text.saveError);
    } finally {
      setSubmitting(false);
    }
  }

  function updateQuizTitle(field, value) {
    setQuizEditor((current) => ({ ...current, title: { ...current.title, [field]: value } }));
  }

  function updateQuestion(questionIndex, field, value, language = null, optionIndex = null) {
    setQuizEditor((current) => ({
      ...current,
      questions: current.questions.map((question, index) => {
        if (index !== questionIndex) return question;
        if (field === "options") {
          return {
            ...question,
            options: question.options.map((option, currentOptionIndex) =>
              currentOptionIndex === optionIndex ? { ...option, [language]: value } : option
            )
          };
        }
        if (language) {
          return { ...question, [field]: { ...question[field], [language]: value } };
        }
        return { ...question, [field]: value };
      })
    }));
  }

  function startNewQuiz() {
    setEditingQuizId(null);
    setQuizEditor(createEmptyQuiz());
    setQuizError("");
    setQuizNotice("");
  }

  function startEditingQuiz(quiz) {
    setEditingQuizId(quiz.documentId);
    setQuizEditor({
      title: { en: quiz.title?.en || "", si: quiz.title?.si || "" },
      questions: (quiz.questions || []).map((question) => ({
        topic: { en: question.topic?.en || "", si: question.topic?.si || "" },
        question: { en: question.question?.en || "", si: question.question?.si || "" },
        options: Array.from({ length: 4 }, (_, index) => ({
          en: question.options?.[index]?.en || "",
          si: question.options?.[index]?.si || ""
        })),
        answerIndex: Number.isInteger(question.answerIndex) ? question.answerIndex : 0,
        explanation: { en: question.explanation?.en || "", si: question.explanation?.si || "" }
      }))
    });
    setQuizError("");
    setQuizNotice("");
  }

  function cancelQuizEdit() {
    setQuizEditor(null);
    setEditingQuizId(null);
    setQuizError("");
  }

  async function saveCustomQuiz(event) {
    event.preventDefault();
    setQuizError("");
    setQuizNotice("");

    const validQuestions = quizEditor?.questions?.length > 0
      && quizEditor.questions.every((question) =>
        question.question.en.trim()
        && question.options.length === 4
        && question.options.every((option) => option.en.trim())
      );
    if (!quizEditor?.title.en.trim() || !validQuestions) {
      setQuizError(text.quizRequired);
      return;
    }

    setQuizSubmitting(true);
    try {
      const quizRef = editingQuizId
        ? doc(db, "customQuizzes", editingQuizId)
        : doc(collection(db, "customQuizzes"));
      const normalizedQuiz = {
        title: {
          en: quizEditor.title.en.trim(),
          si: quizEditor.title.si.trim() || quizEditor.title.en.trim()
        },
        questions: quizEditor.questions.map((question) => ({
          topic: {
            en: question.topic.en.trim() || quizEditor.title.en.trim(),
            si: question.topic.si.trim() || question.topic.en.trim() || quizEditor.title.si.trim() || quizEditor.title.en.trim()
          },
          question: {
            en: question.question.en.trim(),
            si: question.question.si.trim() || question.question.en.trim()
          },
          options: question.options.map((option) => ({
            en: option.en.trim(),
            si: option.si.trim() || option.en.trim()
          })),
          answerIndex: question.answerIndex,
          explanation: {
            en: question.explanation.en.trim(),
            si: question.explanation.si.trim() || question.explanation.en.trim()
          }
        })),
        updatedAt: serverTimestamp(),
        ...(editingQuizId ? {} : { createdBy: currentUser.uid, createdAt: serverTimestamp() })
      };
      await setDoc(quizRef, normalizedQuiz, { merge: true });
      setQuizNotice(text.quizSaved);
      setQuizEditor(null);
      setEditingQuizId(null);
    } catch (saveError) {
      console.error("Error saving custom quiz:", saveError);
      setQuizError(text.quizSaveError);
    } finally {
      setQuizSubmitting(false);
    }
  }

  const statusText = (status) => status === "completed"
    ? text.completed
    : status === "in_progress"
      ? text.inProgress
      : text.pending;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="quiz-admin-container">
          <Link className="quiz-admin-back" to="/admin"><ArrowLeft size={17} /> {text.back}</Link>
          <header className="quiz-admin-header">
            <span className="quiz-admin-icon"><ClipboardCheck size={24} /></span>
            <div>
              <h1>{text.title}</h1>
              <p>{text.description}</p>
            </div>
          </header>

          <section className="quiz-admin-panel">
            <div className="quiz-admin-section-heading">
              <div>
                <h2>{text.manageQuizzes}</h2>
                <p>{text.customQuizDescription}</p>
              </div>
              {!quizEditor && (
                <button type="button" className="quiz-admin-add" onClick={startNewQuiz}>
                  <Plus size={17} /> {text.createQuiz}
                </button>
              )}
            </div>

            {customQuizError && <p className="quiz-admin-message error" role="alert">{customQuizError}</p>}
            {quizNotice && <p className="quiz-admin-message success" role="status">{quizNotice}</p>}

            {quizEditor ? (
              <form className="quiz-author-form" onSubmit={saveCustomQuiz}>
                <h3>{editingQuizId ? text.editQuiz : text.createQuiz}</h3>
                <div className="quiz-author-grid">
                  <label className="quiz-admin-field">
                    <span>{text.quizTitle} (English) *</span>
                    <input value={quizEditor.title.en} onChange={(event) => updateQuizTitle("en", event.target.value)} required disabled={quizSubmitting} />
                  </label>
                  <label className="quiz-admin-field">
                    <span>{text.quizTitleSi}</span>
                    <input value={quizEditor.title.si} onChange={(event) => updateQuizTitle("si", event.target.value)} disabled={quizSubmitting} />
                  </label>
                </div>

                {quizEditor.questions.map((question, questionIndex) => (
                  <fieldset className="quiz-author-question" key={questionIndex}>
                    <legend>{text.question} {questionIndex + 1}</legend>
                    <label className="quiz-admin-field">
                      <span>{text.topic}</span>
                      <input value={question.topic.en} onChange={(event) => updateQuestion(questionIndex, "topic", event.target.value, "en")} disabled={quizSubmitting} />
                    </label>
                    <div className="quiz-author-grid">
                      <label className="quiz-admin-field">
                        <span>{text.question} (English) *</span>
                        <textarea value={question.question.en} onChange={(event) => updateQuestion(questionIndex, "question", event.target.value, "en")} required rows={2} disabled={quizSubmitting} />
                      </label>
                      <label className="quiz-admin-field">
                        <span>{text.questionSi}</span>
                        <textarea value={question.question.si} onChange={(event) => updateQuestion(questionIndex, "question", event.target.value, "si")} rows={2} disabled={quizSubmitting} />
                      </label>
                    </div>

                    <p className="quiz-author-correct-label">{text.chooseCorrect} ({text.correctAnswer})</p>
                    <div className="quiz-author-options">
                      {question.options.map((option, optionIndex) => (
                        <div className="quiz-author-option" key={optionIndex}>
                          <label className="quiz-author-radio">
                            <input
                              type="radio"
                              name={`correct-${questionIndex}`}
                              checked={question.answerIndex === optionIndex}
                              onChange={() => updateQuestion(questionIndex, "answerIndex", optionIndex)}
                              disabled={quizSubmitting}
                            />
                            <span>{String.fromCharCode(65 + optionIndex)}</span>
                          </label>
                          <label className="quiz-admin-field">
                            <span>{text.option} {optionIndex + 1} (English) *</span>
                            <input value={option.en} onChange={(event) => updateQuestion(questionIndex, "options", event.target.value, "en", optionIndex)} required disabled={quizSubmitting} />
                          </label>
                          <label className="quiz-admin-field">
                            <span>{text.optionSi} {optionIndex + 1}</span>
                            <input value={option.si} onChange={(event) => updateQuestion(questionIndex, "options", event.target.value, "si", optionIndex)} disabled={quizSubmitting} />
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="quiz-author-grid">
                      <label className="quiz-admin-field">
                        <span>{text.explanation}</span>
                        <textarea value={question.explanation.en} onChange={(event) => updateQuestion(questionIndex, "explanation", event.target.value, "en")} rows={2} disabled={quizSubmitting} />
                      </label>
                      <label className="quiz-admin-field">
                        <span>{text.explanationSi}</span>
                        <textarea value={question.explanation.si} onChange={(event) => updateQuestion(questionIndex, "explanation", event.target.value, "si")} rows={2} disabled={quizSubmitting} />
                      </label>
                    </div>
                    <button
                      type="button"
                      className="quiz-admin-text-button danger"
                      onClick={() => setQuizEditor((current) => ({ ...current, questions: current.questions.filter((_, index) => index !== questionIndex) }))}
                      disabled={quizSubmitting}
                    >
                      <X size={15} /> {text.removeQuestion}
                    </button>
                  </fieldset>
                ))}

                <div className="quiz-author-actions">
                  <button type="button" className="quiz-admin-add" onClick={() => setQuizEditor((current) => ({ ...current, questions: [...current.questions, createEmptyQuestion()] }))} disabled={quizSubmitting}>
                    <Plus size={17} /> {text.addQuestion}
                  </button>
                  <button type="button" className="quiz-admin-cancel" onClick={cancelQuizEdit} disabled={quizSubmitting}>
                    {text.cancelEdit}
                  </button>
                  <button type="submit" className="quiz-admin-submit" disabled={quizSubmitting}>
                    <Save size={16} /> {quizSubmitting ? text.loading : text.saveQuiz}
                  </button>
                </div>
                {quizError && <p className="quiz-admin-message error" role="alert">{quizError}</p>}
              </form>
            ) : customQuizError ? null : customQuizzes.length === 0 ? (
              <p className="quiz-admin-empty">{text.noCustomQuizzes}</p>
            ) : (
              <div className="quiz-custom-list">
                {customQuizzes.map((quiz) => (
                  <article className="quiz-custom-item" key={quiz.id}>
                    <div>
                      <h3>{quiz.title?.[language] || quiz.title?.en}</h3>
                      <span>{quiz.questions?.length || 0} {text.questions}</span>
                    </div>
                    <button type="button" className="quiz-admin-edit" onClick={() => startEditingQuiz(quiz)}>
                      <Pencil size={15} /> {text.editQuiz}
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="quiz-admin-panel">
            <h2>{text.assign}</h2>
            <form onSubmit={handleSubmit} className="quiz-assignment-form">
              <label className="quiz-admin-field">
                <span>{text.quiz}</span>
                <select value={quizId} onChange={(event) => setQuizId(event.target.value)} disabled={submitting}>
                  <option value="">{text.chooseQuiz}</option>
                  {availableQuizzes.map((module) => (
                    <option value={module.id} key={module.id}>
                      {module.title?.[language] || module.title?.en} ({module.questions.length} {text.questions})
                    </option>
                  ))}
                </select>
              </label>

              <label className="quiz-admin-field">
                <span>{text.dueDate}</span>
                <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} disabled={submitting} />
              </label>

              <div className="quiz-admin-users-heading">
                <h3>{text.learners}</h3>
                <div>
                  <button type="button" onClick={() => setSelectedUsers(users.map((user) => user.uid))} disabled={users.length === 0 || submitting}>
                    {text.selectAll}
                  </button>
                  <button type="button" onClick={() => setSelectedUsers([])} disabled={selectedUsers.length === 0 || submitting}>
                    {text.clear}
                  </button>
                </div>
              </div>

              {loading ? (
                <p className="quiz-admin-empty">{text.loading}</p>
              ) : users.length === 0 ? (
                <p className="quiz-admin-empty">{text.noUsers}</p>
              ) : (
                <div className="quiz-admin-user-list">
                  {users.map((user) => (
                    <label className="quiz-admin-user" key={user.uid}>
                      <input type="checkbox" checked={selectedUsers.includes(user.uid)} onChange={() => toggleUser(user.uid)} disabled={submitting} />
                      <span>
                        <strong>{user.displayName || user.email || user.uid}</strong>
                        {user.displayName && user.email && <small>{user.email}</small>}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {error && <p className="quiz-admin-message error" role="alert">{error}</p>}
              {notice && <p className="quiz-admin-message success" role="status">{notice}</p>}
              <button type="submit" className="quiz-admin-submit" disabled={submitting || loading || users.length === 0}>
                {submitting ? text.loading : text.submit}
              </button>
            </form>
          </section>

          <section className="quiz-admin-panel">
            <h2>{text.assigned}</h2>
            {sortedAssignments.length === 0 ? (
              <p className="quiz-admin-empty">{text.noAssignments}</p>
            ) : (
              <div className="quiz-admin-table-wrap">
                <table className="quiz-admin-table">
                  <thead>
                    <tr>
                      <th>{text.quiz}</th>
                      <th>{text.learner}</th>
                      <th>{text.status}</th>
                      <th>{text.due}</th>
                      <th>{text.score}</th>
                      <th>{text.created}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedAssignments.map((assignment) => {
                      const module = availableQuizzes.find((item) => item.id === assignment.quizId);
                      return (
                        <tr key={assignment.id}>
                          <td>{module?.title?.[language] || module?.title?.en || assignment.quizTitle}</td>
                          <td>{assignment.userName || assignment.userEmail || assignment.userId}</td>
                          <td><span className={`quiz-admin-status ${assignment.status || "assigned"}`}>{statusText(assignment.status)}</span></td>
                          <td>{formatDate(assignment.dueDate, language)}</td>
                          <td>
                            {assignment.status === "completed"
                              ? `${assignment.score ?? 0}/${assignment.totalQuestions ?? module?.questions.length ?? "—"}${Number.isFinite(assignment.percentage) ? ` (${assignment.percentage}%)` : ""}`
                              : "—"}
                          </td>
                          <td>{formatDate(assignment.createdAt, language)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
