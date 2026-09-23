import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, Eye, Loader2 } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "./AfterRescue.css";

export default function AfterRescue() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    missionId: "",
    teamName: "",
    rescueLocation: "",
    rescueDate: "",
    teamLeader: "",
    peopleRescued: "",
    rescueOutcome: "",
    rescuedPersonDetails: "",
    medicalAssistance: "",
    handoverDestination: "",
    handoverDetails: "",
    equipmentUsed: "",
    challengesFaced: "",
    whatWentWell: "",
    lessonsLearned: "",
    recommendations: "",
    attachmentRefs: "",
    finalRemarks: "",
    reportStatus: "Submitted",
    reportedBy: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Firebase Firestore වලට ඩේටා සේව් කිරීම
      await addDoc(collection(db, "rescueReports"), {
        ...formData,
        createdAt: new Date()
      });

      alert("After Rescue Report submitted and saved to Firebase successfully!");
      
      // සේව් වූ පසු ඇමින් පුවරුවට හෝ රිපෝර්ට් ලැයිස්තුවට යොමු කිරීම (අවශ්‍ය නම් පමණක් වෙනස් කරගන්න)
      navigate("/admin/rescue"); 

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      missionId: "",
      teamName: "",
      rescueLocation: "",
      rescueDate: "",
      teamLeader: "",
      peopleRescued: "",
      rescueOutcome: "",
      rescuedPersonDetails: "",
      medicalAssistance: "",
      handoverDestination: "",
      handoverDetails: "",
      equipmentUsed: "",
      challengesFaced: "",
      whatWentWell: "",
      lessonsLearned: "",
      recommendations: "",
      attachmentRefs: "",
      finalRemarks: "",
      reportStatus: "Draft",
      reportedBy: ""
    });
  };

  return (
    <div className="app-layout">
      <div className="main-content">
        <div className="ar-form-container">
          <div className="ar-header">
            <div>
              <h1 className="ar-title">After Rescue Report</h1>
              <p className="ar-subtitle">DMC | USAR Emergency Response</p>
            </div>
            <span className="ar-badge-draft">{formData.reportStatus}</span>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Rescue Mission Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Rescue Mission Details</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>Mission ID</label>
                  <input type="text" name="missionId" value={formData.missionId} onChange={handleChange} placeholder="Enter Mission ID" required />
                </div>
                <div className="ar-field">
                  <label>Rescue Team Name / ID</label>
                  <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name or ID" required />
                </div>
                <div className="ar-field">
                  <label>Rescue Location</label>
                  <input type="text" name="rescueLocation" value={formData.rescueLocation} onChange={handleChange} placeholder="Rescue Location" required />
                </div>
                <div className="ar-field">
                  <label>Rescue Date</label>
                  <input type="date" name="rescueDate" value={formData.rescueDate} onChange={handleChange} required />
                </div>
                <div className="ar-field ar-full">
                  <label>Team Leader</label>
                  <input type="text" name="teamLeader" value={formData.teamLeader} onChange={handleChange} placeholder="Team Leader Name" />
                </div>
              </div>
            </fieldset>

            {/* Rescued Person Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Rescued Person Details</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>Number of People Rescued</label>
                  <input type="number" name="peopleRescued" value={formData.peopleRescued} onChange={handleChange} placeholder="0" />
                </div>
                <div className="ar-field">
                  <label>Rescue Outcome</label>
                  <select name="rescueOutcome" value={formData.rescueOutcome} onChange={handleChange}>
                    <option value="">Select outcome</option>
                    <option value="Successful">Successful</option>
                    <option value="Partial">Partial</option>
                    <option value="Critical">Critical & Stable</option>
                  </select>
                </div>
                <div className="ar-field ar-full">
                  <label>Rescued Person Details</label>
                  <textarea name="rescuedPersonDetails" value={formData.rescuedPersonDetails} onChange={handleChange} rows="3" placeholder="Provide rescued person details..."></textarea>
                </div>
              </div>
            </fieldset>

            {/* Medical & Handover Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Medical & Handover Details</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>Medical Assistance Provided</label>
                  <textarea name="medicalAssistance" value={formData.medicalAssistance} onChange={handleChange} rows="2" placeholder="Details of medical aid..."></textarea>
                </div>
                <div className="ar-field">
                  <label>Handover Destination</label>
                  <input type="text" name="handoverDestination" value={formData.handoverDestination} onChange={handleChange} placeholder="Hospital / Destination" />
                </div>
                <div className="ar-field">
                  <label>Handover Details</label>
                  <input type="text" name="handoverDetails" value={formData.handoverDetails} onChange={handleChange} placeholder="Handover personnel/time details" />
                </div>
              </div>
            </fieldset>

            {/* Resources & Operation Summary */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Resources & Operation Summary</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>Equipment and Resources Used</label>
                  <textarea name="equipmentUsed" value={formData.equipmentUsed} onChange={handleChange} rows="2" placeholder="List equipment..."></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>Challenges Faced During Rescue</label>
                  <textarea name="challengesFaced" value={formData.challengesFaced} onChange={handleChange} rows="2" placeholder="Mention challenges..."></textarea>
                </div>
              </div>
            </fieldset>

            {/* Lessons Learned */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Lessons Learned</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>What Went Well?</label>
                  <textarea name="whatWentWell" value={formData.whatWentWell} onChange={handleChange} rows="2" placeholder="Positive aspects..."></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>Lessons Learned</label>
                  <textarea name="lessonsLearned" value={formData.lessonsLearned} onChange={handleChange} rows="2" placeholder="Key takeaways..."></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>Recommendations for Future Missions</label>
                  <textarea name="recommendations" value={formData.recommendations} onChange={handleChange} rows="2" placeholder="Recommendations..."></textarea>
                </div>
              </div>
            </fieldset>

            {/* Attachments & Submission */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">Attachments & Submission</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>Attachment References</label>
                  <input type="text" name="attachmentRefs" value={formData.attachmentRefs} onChange={handleChange} placeholder="File names / links" />
                </div>
                <div className="ar-field">
                  <label>Report Status</label>
                  <select name="reportStatus" value={formData.reportStatus} onChange={handleChange}>
                    <option value="Draft">Draft</option>
                    <option value="Submitted">Submitted</option>
                    <option value="Approved">Approved</option>
                  </select>
                </div>
                <div className="ar-field ar-full">
                  <label>Final Remarks</label>
                  <textarea name="finalRemarks" value={formData.finalRemarks} onChange={handleChange} rows="2" placeholder="Final remarks..."></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>Reported By</label>
                  <input type="text" name="reportedBy" value={formData.reportedBy} onChange={handleChange} placeholder="Officer Name / ID" />
                </div>
              </div>
            </fieldset>

            {/* Action Buttons */}
            <div className="ar-actions">
              <button type="button" onClick={handleClear} className="ar-btn-secondary">
                Clear Form
              </button>
              <button type="button" className="ar-btn-outline">
                <Eye size={16} /> Preview Report
              </button>
              <button type="submit" className="ar-btn-primary" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />} 
                {loading ? " Submitting..." : " Submit Report"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}