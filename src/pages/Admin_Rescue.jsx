import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, MapPin, FileText, Loader2, Download, Send, Check, Trash2 } from "lucide-react";
import { collection, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "./Admin_Rescue.css";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import PageBackButton from "../components/PageBackButton";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";

export default function AdminRescue() {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;
  const [selectedMission, setSelectedMission] = useState(null);
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState("");

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rescueReports"));
        const missionList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMissions(missionList);
      } catch (error) {
        console.error("Error fetching reports: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  // Function to trigger Browser's Print dialog which allows saving as PDF
  const handlePrintPDF = () => {
    window.print();
  };

  const handlePublishExperience = async () => {
    if (!selectedMission || !selectedMission.lessonsLearned?.trim()) {
      setPublishError(t.publishRequiresLessons);
      return;
    }

    setPublishing(true);
    setPublishError("");
    try {
      const reportRef = doc(db, "rescueReports", selectedMission.id);
      const experienceRef = doc(db, "operationalExperiences", selectedMission.id);
      const batch = writeBatch(db);

      batch.set(experienceRef, {
        missionId: selectedMission.missionId || "",
        title: selectedMission.missionId
          ? `${t.missionReportDetails}: ${selectedMission.missionId}`
          : t.operationalExperience,
        responder: selectedMission.teamLeader || selectedMission.reportedBy || selectedMission.teamName || t.rescueTeamName,
        organization: selectedMission.teamName || t.rescueTeamName,
        year: selectedMission.rescueDate?.slice(0, 4) || "",
        snippet: selectedMission.lessonsLearned.trim(),
        type: selectedMission.rescueOutcome || t.rescueReport,
        location: selectedMission.rescueLocation || "",
        rescueDate: selectedMission.rescueDate || "",
        missionNotes: selectedMission.missionNotes || "",
        whatWentWell: selectedMission.whatWentWell || "",
        lessonsLearned: selectedMission.lessonsLearned.trim(),
        recommendations: selectedMission.recommendations || "",
        publishedAt: serverTimestamp()
      });
      batch.update(reportRef, {
        publishedToExperiences: true,
        experiencePublishedAt: serverTimestamp()
      });
      await batch.commit();

      const updatedMission = { ...selectedMission, publishedToExperiences: true };
      setSelectedMission(updatedMission);
      setMissions((currentMissions) =>
        currentMissions.map((mission) => mission.id === updatedMission.id ? updatedMission : mission)
      );
    } catch (error) {
      console.error("Error publishing rescue report as an operational experience:", error);
      setPublishError(t.publishExperienceFailed);
    } finally {
      setPublishing(false);
    }
  };

  const handleRemoveExperience = async () => {
    if (!selectedMission) return;

    setPublishing(true);
    setPublishError("");
    try {
      const reportRef = doc(db, "rescueReports", selectedMission.id);
      const experienceRef = doc(db, "operationalExperiences", selectedMission.id);
      const batch = writeBatch(db);

      batch.delete(experienceRef);
      batch.update(reportRef, {
        publishedToExperiences: false
      });
      await batch.commit();

      const updatedMission = { ...selectedMission, publishedToExperiences: false };
      setSelectedMission(updatedMission);
      setMissions((currentMissions) =>
        currentMissions.map((mission) => mission.id === updatedMission.id ? updatedMission : mission)
      );
    } catch (error) {
      console.error("Error removing operational experience from the site:", error);
      setPublishError(t.removeExperienceFailed);
    } finally {
      setPublishing(false);
    }
  };

  if (loading) {
    return (
      <div className="app-layout">
        <Sidebar />
        <div className="main-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", color: "#38bdf8" }}>
          <TopHeader />
          <Loader2 className="animate-spin" size={32} /> &nbsp; {t.loadingReports}
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <div className="ar-admin-wrapper">
          {!selectedMission && <PageBackButton fallback="/admin" label={t.backAdminDashboard} />}
          
          {!selectedMission ? (
            <>
              <div className="ar-admin-header">
                <div>
                  <h1 className="ar-admin-title">{t.submittedRescueReports}</h1>
                  <p className="ar-admin-subtitle">{t.selectMission}</p>
                </div>
                <span className="ar-count-badge">{missions.length} {t.missionsFound}</span>
              </div>

              {missions.length === 0 ? (
                <p style={{ textAlign: "center", color: "#94a3b8", padding: "40px" }}>{t.noReports}</p>
              ) : (
                <div className="ar-missions-grid">
                  {missions.map((mission) => (
                    <div 
                      key={mission.id} 
                      className="ar-mission-card"
                      onClick={() => setSelectedMission(mission)}
                    >
                      <div className="ar-card-top">
                        <span className="ar-mission-tag">{mission.missionId || "MSN-XXX"}</span>
                        <span className="ar-status-badge">{mission.rescueOutcome || "Submitted"}</span>
                      </div>
                      
                      <h3 className="ar-card-team">{mission.teamName || "Unnamed Team"}</h3>
                      
                      <div className="ar-card-info-row">
                        <MapPin size={15} />
                        <span>{mission.rescueLocation || "No location specified"}</span>
                      </div>
                      
                      <div className="ar-card-info-row">
                        <Calendar size={15} />
                        <span>{mission.rescueDate || "N/A"}</span>
                      </div>

                      <div className="ar-card-footer">
                        <span>{t.viewFullReport}</span>
                        <FileText size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="ar-detail-view-container">
              <div className="ar-detail-top-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button 
                  onClick={() => setSelectedMission(null)} 
                  className="ar-back-link"
                >
                  <ArrowLeft size={16} /> {t.backMissionsList}
                </button>
                
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <button 
                    onClick={handlePrintPDF}
                    style={{
                      background: "#38bdf8",
                      color: "#0f172a",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px"
                    }}
                  >
                    <Download size={16} /> {t.downloadPdf}
                  </button>
                  <span className="ar-status-badge">{selectedMission.rescueOutcome}</span>
                </div>
              </div>

              <div className="ar-detail-header-box">
                <h2>{t.missionReportDetails}: {selectedMission.missionId}</h2>
                <p>{t.completeRecordBy} {selectedMission.reportedBy || (locale === "si" ? "නිලධාරී" : "Officer")}</p>
              </div>

              <div className="ar-detail-grid">
                <div className="ar-detail-item">
                  <label>{t.missionIdReference}</label>
                  <p>{selectedMission.missionId}</p>
                </div>
                <div className="ar-detail-item">
                  <label>{t.rescueTeamName}</label>
                  <p>{selectedMission.teamName}</p>
                </div>
                <div className="ar-detail-item">
                  <label>{t.rescueLocation}</label>
                  <p>{selectedMission.rescueLocation}</p>
                </div>
                <div className="ar-detail-item">
                  <label>{t.rescueDate}</label>
                  <p>{selectedMission.rescueDate}</p>
                </div>
                <div className="ar-detail-item">
                  <label>{t.teamLeader}</label>
                  <p>{selectedMission.teamLeader}</p>
                </div>
                <div className="ar-detail-item">
                  <label>{t.peopleRescued}</label>
                  <p style={{ color: "#38bdf8", fontWeight: "700" }}>{selectedMission.peopleRescued} {locale === "si" ? "දෙනෙකු" : "Persons"}</p>
                </div>
                <div className="ar-detail-item ar-full-width">
                  <label>{t.resourcesEquipmentUsed}</label>
                  <p>{selectedMission.resourcesUsed || t.noneSpecified}</p>
                </div>
                <div className="ar-detail-item ar-full-width">
                  <label>{t.missionNotes}</label>
                  <p>{selectedMission.missionNotes || t.noNotes}</p>
                </div>
                {selectedMission.whatWentWell && (
                  <div className="ar-detail-item ar-full-width">
                    <label>{t.whatWentWell}</label>
                    <p>{selectedMission.whatWentWell}</p>
                  </div>
                )}
                {selectedMission.lessonsLearned && (
                  <div className="ar-detail-item ar-full-width">
                    <label>{t.lessonsLearned}</label>
                    <p>{selectedMission.lessonsLearned}</p>
                  </div>
                )}
                {selectedMission.recommendations && (
                  <div className="ar-detail-item ar-full-width">
                    <label>{t.recommendationsFuture}</label>
                    <p>{selectedMission.recommendations}</p>
                  </div>
                )}
              </div>

              <div className="ar-detail-actions">
                {publishError && <p className="ar-publish-error" role="alert">{publishError}</p>}
                {selectedMission.publishedToExperiences ? (
                  <>
                    <span className="ar-published-status"><Check size={16} /> {t.publishedToExperiences}</span>
                    <button
                      onClick={handleRemoveExperience}
                      className="ar-remove-publish-btn"
                      disabled={publishing}
                    >
                      {publishing ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
                      {publishing ? t.removingExperience : t.removeFromSite}
                    </button>
                  </>
                ) : (
                  <>
                    {!selectedMission.lessonsLearned?.trim() && (
                      <p className="ar-publish-hint">{t.publishRequiresLessons}</p>
                    )}
                    <button
                      onClick={handlePublishExperience}
                      className="ar-publish-btn"
                      disabled={publishing || !selectedMission.lessonsLearned?.trim()}
                    >
                      {publishing ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                      {publishing ? t.publishingExperience : t.publishToExperiences}
                    </button>
                  </>
                )}
                <button onClick={() => setSelectedMission(null)} className="ar-close-btn">
                  {t.closeReturnList}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}