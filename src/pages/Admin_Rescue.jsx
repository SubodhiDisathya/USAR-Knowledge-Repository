import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, MapPin, FileText, Loader2, Download } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
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
              </div>

              <div className="ar-detail-actions">
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