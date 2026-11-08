import React, { useEffect, useMemo, useState } from "react";
import { collection, doc, onSnapshot, serverTimestamp, writeBatch } from "firebase/firestore";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
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
    questions: "questions"
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
    questions: "ප්‍රශ්න"
  }
};

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
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [quizId, setQuizId] = useState("");
  const [dueDate, setDueDate] = useState("");
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
    return () => {
      unsubscribeUsers();
      unsubscribeAssignments();
    };
  }, [text.loadError]);

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

    const module = assignableQuizModules.find((item) => item.id === quizId);
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
            <h2>{text.assign}</h2>
            <form onSubmit={handleSubmit} className="quiz-assignment-form">
              <label className="quiz-admin-field">
                <span>{text.quiz}</span>
                <select value={quizId} onChange={(event) => setQuizId(event.target.value)} disabled={submitting}>
                  <option value="">{text.chooseQuiz}</option>
                  {assignableQuizModules.map((module) => (
                    <option value={module.id} key={module.id}>
                      {module.title[language]} ({module.questions.length} {text.questions})
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
                      const module = assignableQuizModules.find((item) => item.id === assignment.quizId);
                      return (
                        <tr key={assignment.id}>
                          <td>{module?.title[language] || assignment.quizTitle}</td>
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
