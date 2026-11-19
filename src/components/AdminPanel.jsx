import React, { useState, useEffect } from "react";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import {
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Shield, ShieldOff, Trash2 } from "lucide-react";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en || {};
  const [users, setUsers] = useState([]);
  const [deletingUid, setDeletingUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((item) => ({
        uid: item.id,
        ...item.data(),
      }));
      setUsers(data);
    });

    return () => unsubscribe();
  }, []);

  async function toggleAdmin(uid, currentRole) {
    const newRole = currentRole === "admin" ? "user" : "admin";
    try {
      await updateDoc(doc(db, "users", uid), { role: newRole });
    } catch (error) {
      console.error("Error updating role:", error);
    }
  }

  async function handleDeleteUser(uid, userLabel) {
    const confirmMessage =
      t.confirmDeleteUser ||
      `Are you sure you want to delete ${userLabel}? This action cannot be undone.`;

    if (!window.confirm(confirmMessage)) return;

    setDeletingUid(uid);
    try {
      await deleteDoc(doc(db, "users", uid));
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setDeletingUid(null);
    }
  }

  return (
    <div className="admin-panel">
      <h2>{t.adminPanel || "Admin Panel"}</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>{t.name || "Name"}</th>
            <th>{t.email || "Email"}</th>
            <th>{t.role || "Role"}</th>
            <th>{t.action || "Action"}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const isDeleting = deletingUid === user.uid;
            const userLabel = user.displayName || user.email || user.uid;

            return (
              <tr key={user.uid}>
                <td>{user.displayName || t.notAvailable || "N/A"}</td>
                <td>{user.email || t.notAvailable || "N/A"}</td>
                <td>
                  <span className={`role-badge ${user.role || "user"}`}>
                    {user.role || "user"}
                  </span>
                </td>
                <td className="action-buttons">
                  <button
                    onClick={() => toggleAdmin(user.uid, user.role)}
                    className="role-toggle-btn"
                    disabled={isDeleting}
                  >
                    {user.role === "admin" ? (
                      <>
                        <ShieldOff size={16} /> {t.revokeAdmin || "Revoke Admin"}
                      </>
                    ) : (
                      <>
                        <Shield size={16} /> {t.makeAdmin || "Make Admin"}
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDeleteUser(user.uid, userLabel)}
                    className="delete-user-btn"
                    disabled={isDeleting}
                    title={t.delete || "Delete"}
                  >
                    <Trash2 size={16} />{" "}
                    {isDeleting
                      ? t.deleting || "Deleting..."
                      : t.delete || "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}