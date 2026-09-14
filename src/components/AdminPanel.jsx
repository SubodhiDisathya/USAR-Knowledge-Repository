import React, { useState, useEffect } from "react";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Shield, ShieldOff } from "lucide-react";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
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

  return (
    <div className="admin-panel">
      <h2>{t.adminPanel}</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>{t.name}</th>
            <th>{t.email}</th>
            <th>{t.role}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.displayName || "N/A"}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role-badge ${user.role}`}>{user.role}</span>
              </td>
              <td>
                <button
                  onClick={() => toggleAdmin(user.uid, user.role)}
                  className="role-toggle-btn"
                >
                  {user.role === "admin" ? (
                    <>
                      <ShieldOff size={16} /> {t.revokeAdmin}
                    </>
                  ) : (
                    <>
                      <Shield size={16} /> {t.makeAdmin}
                    </>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
