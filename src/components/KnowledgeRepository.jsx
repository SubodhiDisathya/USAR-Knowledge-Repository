import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { collection, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db, storage, serverTimestamp } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Trash2, Edit2, Plus } from "lucide-react";
import "./KnowledgeRepository.css";

export default function KnowledgeRepository() {
  const { currentUser, userProfile } = useAuth();
  const { locale } = useLocale();
  const t = translations[locale];

  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", tags: "", category: "", file: null });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const q = userProfile?.role === "admin"
      ? query(collection(db, "knowledge"), orderBy("createdAt", "desc"))
      : query(
          collection(db, "knowledge"),
          where("userId", "==", currentUser.uid),
          orderBy("createdAt", "desc")
        );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    });

    return () => unsubscribe();
  }, [currentUser, userProfile]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.description) {
      alert("Please fill in title and description");
      return;
    }

    setLoading(true);
    try {
      let fileUrl = null;
      if (form.file) {
        const fileRef = ref(storage, `files/${currentUser.uid}/${form.file.name}`);
        await uploadBytes(fileRef, form.file);
        fileUrl = await getDownloadURL(fileRef);
      }

      const docData = {
        title: form.title,
        description: form.description,
        tags: form.tags.split(",").map((t) => t.trim()),
        category: form.category,
        fileUrl,
        userId: currentUser.uid,
        createdAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, "knowledge", editingId), docData);
        setEditingId(null);
      } else {
        await addDoc(collection(db, "knowledge"), docData);
      }

      setForm({ title: "", description: "", tags: "", category: "", file: null });
    } catch (error) {
      console.error("Error saving knowledge:", error);
      alert("Error saving knowledge item");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteDoc(doc(db, "knowledge", id));
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  }

  return (
    <div className="knowledge-repository">
      <h2>{t.usarKnowledge}</h2>

      <form onSubmit={handleSubmit} className="knowledge-form">
        <div className="form-group">
          <label>{t.title}</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder={t.title}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>{t.description}</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder={t.description}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>{t.tags}</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="tag1, tag2, tag3"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>{t.category}</label>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} disabled={loading}>
            <option value="">Select Category</option>
            <option value="firstAid">First Aid</option>
            <option value="usarOperations">USAR Operations</option>
            <option value="incidentManagement">Incident Management</option>
            <option value="safetyRisk">Safety & Risk</option>
          </select>
        </div>

        <div className="form-group">
          <label>{t.attachFile}</label>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })}
            disabled={loading}
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          <Plus size={18} />
          {editingId ? t.save : t.create}
        </button>
      </form>

      <div className="knowledge-list">
        {items.length === 0 ? (
          <p className="no-items">{t.noItems}</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="knowledge-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tags">
                {item.tags?.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {item.fileUrl && (
                <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="file-link">
                  📎 Attachment
                </a>
              )}
              <div className="card-actions">
                {(userProfile?.role === "admin" || item.userId === currentUser.uid) && (
                  <>
                    <button
                      onClick={() => {
                        setEditingId(item.id);
                        setForm({
                          title: item.title,
                          description: item.description,
                          tags: item.tags?.join(", ") || "",
                          category: item.category,
                          file: null
                        });
                      }}
                      className="edit-btn"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="delete-btn">
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
