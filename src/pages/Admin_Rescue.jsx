import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, FileText, Loader2 } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "./Admin_Rescue.css";

export default function AdminRescue() {
  const navigate = useNavigate();
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

  if (loading) {
    return (
      <div className="app-layout">
        <div className="main-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", color: "#38bdf8" }}>
          <Loader2 className="animate-spin" size={32} /> &nbsp; Loading Reports...
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <div className="main-content">
        <div className="ar-admin-wrapper">
          
          {!selectedMission ? (
            <>
              <div className="ar-admin-header">
                <div>
                  <button onClick={() => navigate("/admin")} className="ar-back-link">
                    <ArrowLeft size={16} /> Back to Admin Dashboard
                  </button>
                  <h1 className="ar-admin-title">Submitted Rescue Reports</h1>
                  <p className="ar-admin-subtitle">Select any mission below to view its complete filled form details.</p>
                </div>
                <span className="ar-count-badge">{missions.length} Missions Found</span>
              </div>

              {missions.length === 0 ? (
                <p style={{ textAlign: "center", color: "#94a3b8", padding: "40px" }}>No rescue reports submitted yet.</p>
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
                        <span>View Full Report</span>
                        <FileText size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="ar-detail-view-container">
              <div className="ar-detail-top-bar">
                <button 
                  onClick={() => setSelectedMission(null)} 
                  className="ar-back-link"
                >
                  <ArrowLeft size={16} /> Back to Missions List
                </button>
                <span className="ar-status-badge">{selectedMission.rescueOutcome}</span>
              </div>

              <div className="ar-detail-header-box">
                <h2>Mission Report Details: {selectedMission.missionId}</h2>
                <p>Complete record submitted by {selectedMission.reportedBy || "Officer"}</p>
              </div>

              <div className="ar-detail-grid">
                <div className="ar-detail-item">
                  <label>Mission ID / Reference</label>
                  <p>{selectedMission.missionId}</p>
                </div>
                <div className="ar-detail-item">
                  <label>Rescue Team Name</label>
                  <p>{selectedMission.teamName}</p>
                </div>
                <div className="ar-detail-item">
                  <label>Rescue Location</label>
                  <p>{selectedMission.rescueLocation}</p>
                </div>
                <div className="ar-detail-item">
                  <label>Rescue Date</label>
                  <p>{selectedMission.rescueDate}</p>
                </div>
                <div className="ar-detail-item">
                  <label>Team Leader</label>
                  <p>{selectedMission.teamLeader}</p>
                </div>
                <div className="ar-detail-item">
                  <label>Number of People Rescued</label>
                  <p style={{ color: "#38bdf8", fontWeight: "700" }}>{selectedMission.peopleRescued} Persons</p>
                </div>
                <div className="ar-detail-item ar-full-width">
                  <label>Resources & Equipment Used</label>
                  <p>{selectedMission.resourcesUsed || "None specified"}</p>
                </div>
                <div className="ar-detail-item ar-full-width">
                  <label>Mission Notes / Observations</label>
                  <p>{selectedMission.missionNotes || "No notes provided"}</p>
                </div>
              </div>

              <div className="ar-detail-actions">
                <button onClick={() => setSelectedMission(null)} className="ar-close-btn">
                  Close & Return to List
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}