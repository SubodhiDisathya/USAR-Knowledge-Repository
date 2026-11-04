import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, Eye, Loader2 } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import PageBackButton from "../components/PageBackButton";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import "./AfterRescue.css";

export default function AfterRescue() {
  const navigate = useNavigate();
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;
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

      alert(t.reportSubmitted);
      
      // සේව් වූ පසු ඇමින් පුවරුවට හෝ රිපෝර්ට් ලැයිස්තුවට යොමු කිරීම (අවශ්‍ය නම් පමණක් වෙනස් කරගන්න)
      navigate("/admin/rescue-reports");

    } catch (error) {
      console.error("Error adding document: ", error);
      alert(t.reportSubmitFailed);
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
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <div className="ar-form-container">
          <PageBackButton />
          <div className="ar-header">
            <div>
              <h1 className="ar-title">{t.afterRescueReport}</h1>
              <p className="ar-subtitle">{t.dmcEmergencyResponse}</p>
            </div>
            <span className="ar-badge-draft">{locale === "si" ? (formData.reportStatus === "Submitted" ? "ඉදිරිපත් කර ඇත" : "කෙටුම්පත") : formData.reportStatus}</span>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Rescue Mission Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{t.rescueMissionDetails}</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>{t.missionIdReference}</label>
                  <input type="text" name="missionId" value={formData.missionId} onChange={handleChange} placeholder={t.enterMissionId} required />
                </div>
                <div className="ar-field">
                  <label>{t.rescueTeamNameId}</label>
                  <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder={t.teamNameOrId} required />
                </div>
                <div className="ar-field">
                  <label>{t.rescueLocation}</label>
                  <input type="text" name="rescueLocation" value={formData.rescueLocation} onChange={handleChange} placeholder={t.rescueLocation} required />
                </div>
                <div className="ar-field">
                  <label>{t.rescueDate}</label>
                  <input type="date" name="rescueDate" value={formData.rescueDate} onChange={handleChange} required />
                </div>
                <div className="ar-field ar-full">
                  <label>{t.teamLeader}</label>
                  <input type="text" name="teamLeader" value={formData.teamLeader} onChange={handleChange} placeholder={t.teamLeader} />
                </div>
              </div>
            </fieldset>

            {/* Rescued Person Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{locale === "si" ? "ගලවාගත් පුද්ගලයාගේ විස්තර" : "Rescued Person Details"}</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>{t.peopleRescued}</label>
                  <input type="number" name="peopleRescued" value={formData.peopleRescued} onChange={handleChange} placeholder="0" />
                </div>
                <div className="ar-field">
                  <label>{locale === "si" ? "ගලවාගැනීමේ ප්‍රතිඵලය" : "Rescue Outcome"}</label>
                  <select name="rescueOutcome" value={formData.rescueOutcome} onChange={handleChange}>
                    <option value="">{locale === "si" ? "ප්‍රතිඵලය තෝරන්න" : "Select outcome"}</option>
                    <option value="Successful">{locale === "si" ? "සාර්ථකයි" : "Successful"}</option>
                    <option value="Partial">{locale === "si" ? "අර්ධ වශයෙන් සාර්ථකයි" : "Partial"}</option>
                    <option value="Critical">{locale === "si" ? "අසාධ්‍ය නමුත් ස්ථාවරයි" : "Critical & Stable"}</option>
                  </select>
                </div>
                <div className="ar-field ar-full">
                  <label>{locale === "si" ? "ගලවාගත් පුද්ගලයාගේ විස්තර" : "Rescued Person Details"}</label>
                  <textarea name="rescuedPersonDetails" value={formData.rescuedPersonDetails} onChange={handleChange} rows="3" placeholder={locale === "si" ? "ගලවාගත් පුද්ගලයා පිළිබඳ විස්තර ඇතුළත් කරන්න..." : "Provide rescued person details..."}></textarea>
                </div>
              </div>
            </fieldset>

            {/* Medical & Handover Details */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{t.medicalHandoverDetails}</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>{t.medicalAssistanceProvided}</label>
                  <textarea name="medicalAssistance" value={formData.medicalAssistance} onChange={handleChange} rows="2" placeholder={t.medicalAidDetails}></textarea>
                </div>
                <div className="ar-field">
                  <label>{t.handoverDestination}</label>
                  <input type="text" name="handoverDestination" value={formData.handoverDestination} onChange={handleChange} placeholder={t.hospitalDestination} />
                </div>
                <div className="ar-field">
                  <label>{t.handoverDetails}</label>
                  <input type="text" name="handoverDetails" value={formData.handoverDetails} onChange={handleChange} placeholder={t.handoverPersonnelTime} />
                </div>
              </div>
            </fieldset>

            {/* Resources & Operation Summary */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{t.resourcesOperationSummary}</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>{t.equipmentResourcesUsed}</label>
                  <textarea name="equipmentUsed" value={formData.equipmentUsed} onChange={handleChange} rows="2" placeholder={t.listEquipment}></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>{t.challengesFaced}</label>
                  <textarea name="challengesFaced" value={formData.challengesFaced} onChange={handleChange} rows="2" placeholder={t.mentionChallenges}></textarea>
                </div>
              </div>
            </fieldset>

            {/* Lessons Learned */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{t.lessonsLearned}</legend>
              <div className="ar-grid-2">
                <div className="ar-field ar-full">
                  <label>{t.whatWentWell}</label>
                  <textarea name="whatWentWell" value={formData.whatWentWell} onChange={handleChange} rows="2" placeholder={t.positiveAspects}></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>{t.lessonsLearned}</label>
                  <textarea name="lessonsLearned" value={formData.lessonsLearned} onChange={handleChange} rows="2" placeholder={locale === "si" ? "ප්‍රධාන පාඩම්..." : "Key takeaways..."}></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>{t.recommendationsFuture}</label>
                  <textarea name="recommendations" value={formData.recommendations} onChange={handleChange} rows="2" placeholder={t.recommendationsPlaceholder}></textarea>
                </div>
              </div>
            </fieldset>

            {/* Attachments & Submission */}
            <fieldset className="ar-fieldset">
              <legend className="ar-legend">{t.attachmentsSubmission}</legend>
              <div className="ar-grid-2">
                <div className="ar-field">
                  <label>{t.attachmentReferences}</label>
                  <input type="text" name="attachmentRefs" value={formData.attachmentRefs} onChange={handleChange} placeholder={t.fileNamesLinks} />
                </div>
                <div className="ar-field">
                  <label>{t.reportStatus}</label>
                  <select name="reportStatus" value={formData.reportStatus} onChange={handleChange}>
                    <option value="Draft">{locale === "si" ? "කෙටුම්පත" : "Draft"}</option>
                    <option value="Submitted">{locale === "si" ? "ඉදිරිපත් කර ඇත" : "Submitted"}</option>
                    <option value="Approved">{locale === "si" ? "අනුමත කර ඇත" : "Approved"}</option>
                  </select>
                </div>
                <div className="ar-field ar-full">
                  <label>{t.finalRemarks}</label>
                  <textarea name="finalRemarks" value={formData.finalRemarks} onChange={handleChange} rows="2" placeholder={locale === "si" ? "අවසාන සටහන්..." : "Final remarks..."}></textarea>
                </div>
                <div className="ar-field ar-full">
                  <label>{t.reportedBy}</label>
                  <input type="text" name="reportedBy" value={formData.reportedBy} onChange={handleChange} placeholder={t.officerNameId} />
                </div>
              </div>
            </fieldset>

            {/* Action Buttons */}
            <div className="ar-actions">
              <button type="button" onClick={handleClear} className="ar-btn-secondary">
                {t.clearForm}
              </button>
              <button type="button" className="ar-btn-outline">
                <Eye size={16} /> {t.previewReport}
              </button>
              <button type="submit" className="ar-btn-primary" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />} 
                {loading ? ` ${t.submitting}` : ` ${t.submitReport}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}