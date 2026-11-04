import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertTriangle, Ambulance, ArrowLeft, ArrowRight, Bandage, CheckCircle, ExternalLink, Heart, Search, ShieldAlert, Stethoscope, UserX } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import "./FirstAidMedical.css";

const medicalDetails = {
  "basic-medical-rescue": {
    title: "6.1 Basic Medical Rescue",
    sinhalaTitle: "6.1 මූලික වෛද්‍ය ගලවා ගැනීම",
    icon: <Stethoscope size={28} />,
    description: "Learn the basic actions for providing safe and appropriate assistance during an emergency.",
    sinhalaDescription: "හදිසි අවස්ථාවකදී ආරක්ෂිතව සහ සුදුසු ලෙස සහාය ලබාදීමේ මූලික පියවර ඉගෙන ගන්න.",
    resourceKey: "basicMedicalRescuePDF",
    resourceUrl: "https://drive.google.com/file/d/1EfBmHdSqimkeX0C1w-YojDjJd16GDSZn/view?usp=sharing",
    items: [
      ["🛡️", "Safety First", "ආරක්ෂාව ප්‍රථමයෙන්", "Ensure personal safety before providing assistance.", "සහාය ලබා දීමට පෙර ඔබේ පෞද්ගලික ආරක්ෂාව තහවුරු කරගන්න."],
      ["🔍", "Assess the Situation", "තත්ත්වය තක්සේරු කරන්න", "Assess the situation and identify immediate risks.", "තත්ත්වය තක්සේරු කර ක්ෂණික අවදානම් හඳුනාගන්න."],
      ["👤", "Identify the Patient", "රෝගියා හඳුනාගන්න", "Identify the patient and their immediate needs.", "රෝගියා හඳුනාගෙන ඔහුට හෝ ඇයට වහාම අවශ්‍ය සහාය තීරණය කරන්න."],
      ["📞", "Get Help", "උදව් ලබාගන්න", "Call for additional help when it is needed.", "අවශ්‍ය වූ විට අමතර සහාය කැඳවන්න."],
      ["🩺", "Provide Basic Care", "මූලික සත්කාර ලබාදෙන්න", "Provide appropriate basic assistance without causing further harm.", "තවදුරටත් හානියක් සිදු නොවන පරිදි සුදුසු මූලික සහාය ලබා දෙන්න."]
    ]
  },
  "scene-assessment": {
    title: "6.2 Scene Assessment",
    sinhalaTitle: "6.2 සිද්ධි ස්ථාන ඇගයීම",
    icon: <Search size={28} />,
    description: "Check the scene systematically and make safety the first priority before approaching a patient.",
    sinhalaDescription: "රෝගියා වෙත ළඟාවීමට පෙර සිද්ධි ස්ථානය ක්‍රමානුකූලව පරීක්ෂා කර ආරක්ෂාවට ප්‍රමුඛත්වය දෙන්න.",
    resourceKey: "sceneAssessmentPDF",
    resourceUrl: "https://drive.google.com/file/d/1Itm299GxgoXpUvwi-9AY40IZTwqc-1xC/view?usp=sharing",
    warning: ["Never become another victim while trying to help someone.", "කෙනෙකුට උදව් කිරීමට උත්සාහ කරන අතරතුර තවත් විපතට පත් පුද්ගලයෙකු නොවන්න."],
    items: [
      ["👤", "Your Safety", "ඔබේ ආරක්ෂාව", "Check your own safety before taking action.", "ක්‍රියා කිරීමට පෙර ඔබේම ආරක්ෂාව පරීක්ෂා කරන්න."],
      ["👥", "Team Safety", "කණ්ඩායමේ ආරක්ෂාව", "Keep the rescue team protected and coordinated.", "ගලවාගැනීමේ කණ්ඩායම ආරක්ෂිතව සහ සම්බන්ධීකරණයෙන් තබාගන්න."],
      ["🧑", "Patient Safety", "රෝගියාගේ ආරක්ෂාව", "Protect the patient from further danger.", "රෝගියා තවදුරටත් අනතුරට ලක්වීමෙන් ආරක්ෂා කරන්න."],
      ["⚠️", "Identify Hazards", "අවදානම් හඳුනාගන්න", "Identify hazards and check environmental conditions.", "අවදානම් හඳුනාගෙන පරිසර තත්ත්ව පරීක්ෂා කරන්න."],
      ["🧤", "Use Protective Equipment", "ආරක්ෂක උපකරණ භාවිතා කරන්න", "Use appropriate protective equipment and ensure the area is safe.", "සුදුසු ආරක්ෂක උපකරණ භාවිත කර ප්‍රදේශය ආරක්ෂිත බව තහවුරු කරන්න."]
    ]
  },
  "patient-assessment": {
    title: "6.3 Patient Assessment",
    sinhalaTitle: "6.3 රෝගී තත්ත්ව ඇගයීම",
    icon: <Heart size={28} />,
    description: "Use calm communication and the AVPU method to make an initial assessment of the patient.",
    sinhalaDescription: "සන්සුන් සන්නිවේදනය සහ AVPU ක්‍රමය භාවිතයෙන් රෝගියාගේ මූලික තත්ත්ව ඇගයීම සිදු කරන්න.",
    resourceKey: "patientAssessmentPDF",
    resourceUrl: "https://drive.google.com/file/d/1lWdK_EvzlZgSjaKp_yqSNoSRdVFX0M9B/view?usp=sharing",
    items: [
      ["👁️", "Check for Hazards", "උපද්‍රව පරීක්ෂා කරන්න", "Check for hazards before approaching the patient.", "රෝගියා වෙත ළඟාවීමට පෙර අවදානම් පරීක්ෂා කරන්න."],
      ["🗣️", "Communicate with the Patient", "රෝගියා සමඟ සන්නිවේදනය කරන්න", "Speak calmly and observe the patient's response.", "සන්සුන්ව කතා කර රෝගියාගේ ප්‍රතිචාරය නිරීක්ෂණය කරන්න."],
      ["📞", "Call for Assistance", "සහාය ඉල්ලා සිටින්න", "Call for assistance when necessary.", "අවශ්‍ය වූ විට සහාය කැඳවන්න."],
      ["🟢", "A - Alert", "A - අවදියෙන්", "The patient is alert and aware.", "රෝගියා අවදියෙන් සිටින අතර අවට තත්ත්වය පිළිබඳ දැනුවත්ය."],
      ["🔊", "V - Responds to Voice", "V - හඬට ප්‍රතිචාර දක්වයි", "The patient responds when spoken to.", "කතා කළ විට රෝගියා ප්‍රතිචාර දක්වයි."],
      ["⚡", "P - Responds to Pain", "P - වේදනාවට ප්‍රතිචාර දක්වයි", "The patient responds to a pain stimulus.", "වේදනා උත්තේජනයකට රෝගියා ප්‍රතිචාර දක්වයි."],
      ["⚫", "U - Unresponsive", "U - ප්‍රතිචාර නොදක්වයි", "The patient does not respond.", "රෝගියා කිසිදු ප්‍රතිචාරයක් නොදක්වයි."]
    ]
  },
  "patient-treatment": {
    title: "6.4 Patient Treatment",
    sinhalaTitle: "6.4 රෝගී ප්‍රතිකාර",
    icon: <Bandage size={28} />,
    description: "Recognize common injury warning signs and provide simplified basic responses while awaiting qualified help.",
    sinhalaDescription: "සුදුසුකම් ලත් සහාය ලැබෙන තෙක් සාමාන්‍ය තුවාලවල අනතුරු සංඥා හඳුනාගෙන සරල මූලික ප්‍රතිචාර ලබාදෙන්න.",
    resourceKey: "patientTreatmentPDF",
    resourceUrl: "https://drive.google.com/file/d/1PvGu9HT-sk1sBcKLDhO63yFM07uYd2Vh/view?usp=sharing",
    items: [
      ["🩸", "Bleeding", "රුධිර වහනය", "Warning signs: persistent heavy bleeding or signs of shock. Basic response: apply direct pressure and use appropriate bleeding-control methods.", "අනතුරු ලකුණු: අධික රුධිර වහනය දිගටම පැවතීම හෝ කම්පන තත්ත්වයක ලක්ෂණ. මූලික ප්‍රතිචාරය: තුවාලයට සෘජු පීඩනය යොදා සුදුසු රුධිර වහනය පාලන ක්‍රම භාවිත කරන්න."],
      ["🦴", "Fractures", "අස්ථි බිඳීම්", "Warning signs: deformity, swelling, or inability to move. Basic response: immobilize or support the injury and do not attempt to straighten it.", "අනතුරු ලකුණු: විකෘති වීම, ඉදිමීම හෝ චලනය කිරීමට නොහැකි වීම. මූලික ප්‍රතිචාරය: තුවාල වූ කොටස නොසෙල්වෙන ලෙස ආධාර කරන්න; එය සෘජු කිරීමට උත්සාහ නොකරන්න."],
      ["🔥", "Burns", "පිළිස්සීම්", "Warning signs: a large area, facial burns, or chemical exposure. Basic response: cool with clean running water and cover loosely. Do not apply creams.", "අනතුරු ලකුණු: විශාල ප්‍රදේශයක පිළිස්සීම්, මුහුණේ පිළිස්සීම් හෝ රසායනික ද්‍රව්‍යවලට නිරාවරණය වීම. මූලික ප්‍රතිචාරය: පිරිසිදු ගලායන ජලයෙන් සිසිල් කර ලිහිල්ව ආවරණය කරන්න. ක්‍රීම් වර්ග නොයොදන්න."],
      ["📌", "Impaled Objects", "ශරීරයට ඇතුළු වූ වස්තු", "Do not remove the object. Stabilize it and control surrounding bleeding.", "ඇතුළු වී ඇති වස්තුව ඉවත් නොකරන්න. එය නොසෙල්වෙන ලෙස තබා අවට ඇති රුධිර වහනය පාලනය කරන්න."],
      ["🦾", "Amputations", "අවයව වෙන්වීම්", "Control severe bleeding and protect and preserve the amputated part appropriately.", "දරුණු රුධිර වහනය පාලනය කර වෙන්වූ අවයවය සුදුසු ලෙස ආරක්ෂා කර තබන්න."]
    ]
  },
  "patient-handling": {
    title: "6.5 Patient Handling",
    sinhalaTitle: "6.5 රෝගීන් හැසිරවීම",
    icon: <Ambulance size={28} />,
    description: "Use careful, coordinated movement practices that protect the patient's condition during rescue operations.",
    sinhalaDescription: "ගලවා ගැනීමේ මෙහෙයුම් අතරතුර රෝගියාගේ තත්ත්වය ආරක්ෂා කරන, සැලකිලිමත් සහ සම්බන්ධීකරණය කළ චලන ක්‍රම භාවිතා කරන්න.",
    resourceKey: "patientHandlingPDF",
    resourceUrl: "https://drive.google.com/file/d/1Tvak74xauHgEHQjnGUbQmYcnVfo8oD32/view?usp=sharing",
    items: [
      ["🔍", "Assess Before Moving", "චලනය කිරීමට පෙර තක්සේරු කරන්න", "Assess the patient and the environment before moving.", "රෝගියා චලනය කිරීමට පෙර ඔහුගේ හෝ ඇයගේ තත්ත්වය සහ අවට පරිසරය තක්සේරු කරන්න."],
      ["👐", "Use Appropriate Techniques", "සුදුසු ක්‍රම භාවිතා කරන්න", "Use appropriate lifting and moving techniques.", "එසවීමේ සහ චලනය කිරීමේ සුදුසු ක්‍රම භාවිත කරන්න."],
      ["👥", "Coordinate with the Rescue Team", "ගලවා ගැනීමේ කණ්ඩායම සමඟ සම්බන්ධීකරණය කරන්න", "Coordinate each movement with the rescue team.", "සෑම චලනයක්ම ගලවාගැනීමේ කණ්ඩායම සමඟ සම්බන්ධීකරණය කරන්න."],
      ["🛡️", "Protect the Patient's Condition", "රෝගියාගේ තත්ත්වය ආරක්ෂා කරන්න", "Protect the patient's condition during movement.", "චලනය කරන අතරතුර රෝගියාගේ තත්ත්වය ආරක්ෂා කරන්න."],
      ["🛠️", "Use Appropriate Equipment", "සුදුසු උපකරණ භාවිතා කරන්න", "Use appropriate equipment when available.", "ලබාගත හැකි විට සුදුසු උපකරණ භාවිත කරන්න."],
      ["⏸️", "Avoid Unnecessary Movement", "අනවශ්‍ය චලනයෙන් වළකින්න", "Avoid unnecessary movement of the patient.", "රෝගියා අනවශ්‍ය ලෙස චලනය කිරීමෙන් වළකින්න."]
    ]
  },
  "respectful-handling-deceased": {
    title: "6.6 Respectful Handling of Deceased Persons",
    sinhalaTitle: "6.6 මියගිය පුද්ගලයන්ට ගෞරවනීය සැලකීම",
    icon: <UserX size={28} />,
    description: "Follow compassionate, safe, and respectful guidance when handling deceased persons.",
    sinhalaDescription: "මියගිය පුද්ගලයන් සමඟ කටයුතු කිරීමේදී කරුණාවන්ත, ආරක්ෂිත සහ ගෞරවනීය මාර්ගෝපදේශ අනුගමනය කරන්න.",
    resourceKey: "deceasedHandlingPDF",
    resourceUrl: "https://drive.google.com/file/d/1vhzshtTmy6gPY6B36Yo7u8WISph1Xnnv/view?usp=sharing",
    items: [
      ["🕊️", "Handle with Dignity and Respect", "ගෞරවයෙන් සහ අභිමානයෙන් හසුරුවන්න", "Handle deceased persons with dignity and respect.", "මියගිය පුද්ගලයන්ගේ ගෞරවය සහ අභිමානය රැකෙන අයුරින් කටයුතු කරන්න."],
      ["🧤", "Use Appropriate PPE", "සුදුසු ආරක්ෂක උපකරණ භාවිතා කරන්න", "Use appropriate personal protective equipment.", "සුදුසු පුද්ගලික ආරක්ෂක උපකරණ භාවිත කරන්න."],
      ["📋", "Maintain Proper Documentation", "නිසි ලේඛනගත කිරීම පවත්වාගන්න", "Maintain proper documentation.", "අදාළ තොරතුරු නිසි ලෙස ලේඛනගත කරන්න."],
      ["📍", "Record the Location Accurately", "ස්ථානය නිවැරදිව සටහන් කරන්න", "Record the location accurately.", "ස්ථානය නිවැරදිව සටහන් කරන්න."],
      ["🤲", "Handle Respectfully and Carefully", "ගෞරවයෙන් සහ සැලකිල්ලෙන් හසුරුවන්න", "Handle respectfully and carefully.", "ගෞරවයෙන් සහ සැලකිල්ලෙන් කටයුතු කරන්න."],
      ["🌐", "Consider Cultural Sensitivity", "සංස්කෘතික සංවේදීතාව සලකා බලන්න", "Consider cultural sensitivity and local practices.", "සංස්කෘතික සංවේදීතාව සහ ප්‍රදේශයේ සම්ප්‍රදායන් සැලකිල්ලට ගන්න."]
    ]
  }
};

const labels = {
  en: {
    badge: "MODULE 6: MEDICAL RESCUE",
    title: "First Aid & Medical",
    description: "Access essential medical rescue knowledge for emergency situations and disaster response.",
    overview: "TOPIC OVERVIEW",
    back: "Back to First Aid & Medical",
    learn: "Learn More",
    guidelines: "Simplified Educational Guidance",
    resource: "PDF / Presentation",
    resourceSubtitle: "Access the complete guide and detailed field reference documents for this topic.",
    viewDoc: "View Document",
    unavailable: "Resource not available yet",
    safety: "Safety Notice",
    safetyText: "This content is simplified educational guidance. During actual emergencies, follow authorized medical protocols and instructions from qualified emergency or medical personnel."
  },
  si: {
    badge: "මොඩියුලය 6: වෛද්‍ය ගලවා ගැනීම",
    title: "පළමු ප්‍රතිකාර සහ වෛද්‍ය",
    description: "හදිසි අවස්ථා සහ ආපදා ප්‍රතිචාර සඳහා අත්‍යවශ්‍ය වෛද්‍ය ගලවා ගැනීමේ දැනුම ලබා ගන්න.",
    overview: "මාතෘකා දළ විශ්ලේෂණය",
    back: "පළමු ප්‍රතිකාර සහ වෛද්‍ය වෙත ආපසු",
    learn: "තවත් කියවන්න",
    guidelines: "සරල අධ්‍යාපනික මාර්ගෝපදේශ",
    resource: "PDF / ඉදිරිපත් කිරීම",
    resourceSubtitle: "මෙම මාතෘකාව සඳහා සම්පූර්ණ මාර්ගෝපදේශය සහ සවිස්තරාත්මක ක්ෂේත්‍ර යොමු ලේඛන වෙත පිවිසෙන්න.",
    viewDoc: "ලේඛනය බලන්න",
    unavailable: "සම්පත තවමත් නොමැත",
    safety: "ආරක්ෂක දැනුම්දීම",
    safetyText: "මෙම අන්තර්ගතය සරල අධ්‍යාපනික මාර්ගෝපදේශයකි. සැබෑ හදිසි අවස්ථාවලදී බලයලත් වෛද්‍ය ක්‍රියා පටිපාටි සහ සුදුසුකම් ලත් හදිසි හෝ වෛද්‍ය නිලධාරීන්ගේ උපදෙස් අනුගමනය කරන්න."
  }
};

function ResourcePanel({ detail, text }) {
  return (
    <section className="medical-resource-panel">
      <div className="medical-resource-copy">
        <span className="medical-resource-label">{text.resource}</span>
        <h2>{text.resourceSubtitle}</h2>
      </div>
      {detail.resourceUrl ? (
        <a className="view-doc-btn" href={detail.resourceUrl} target="_blank" rel="noopener noreferrer">
          {text.viewDoc} <ExternalLink size={16} />
        </a>
      ) : (
        <span className="resource-unavailable">{text.unavailable}</span>
      )}
    </section>
  );
}

export default function FirstAidMedical() {
  const { topicSlug } = useParams();
  const navigate = useNavigate();
  const { locale } = useLocale();
  const text = labels[locale] || labels.en;
  const detail = topicSlug ? medicalDetails[topicSlug] : null;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="medical-container">
          {detail ? (
            <>
              <div className="detail-top-bar">
                <button className="back-btn" onClick={() => navigate("/knowledge/medical")}>
                  <ArrowLeft size={18} /> {text.back}
                </button>
              </div>
              <section className="medical-hero detail-hero">
                <div className="medical-badge">{text.badge}</div>
                <div className="detail-title-flex">
                  <span className="detail-icon-box">{detail.icon}</span>
                  <h1>{locale === "si" ? detail.sinhalaTitle : detail.title}</h1>
                </div>
                <p>{locale === "si" ? detail.sinhalaDescription : detail.description}</p>
              </section>
              <section className="detail-content-section">
                <h2 className="medical-section-heading"><CheckCircle size={20} /> {text.guidelines}</h2>
                <div className="steps-grid">
                  {detail.items.map(([icon, title, sinhalaTitle, description, sinhalaDescription]) => (
                    <article className="step-card" key={title}>
                      <div className="step-emoji-box">{icon}</div>
                      <div className="step-info">
                        <h3>{locale === "si" ? sinhalaTitle : title}</h3>
                        <p>{locale === "si" ? sinhalaDescription : description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              {detail.warning && (
                <section className="medical-warning">
                  <AlertTriangle size={22} />
                  <p>{locale === "si" ? detail.warning[1] : detail.warning[0]}</p>
                </section>
              )}
              <ResourcePanel detail={detail} text={text} />
              <section className="medical-safety-note">
                <ShieldAlert size={22} />
                <div>
                  <h2>{text.safety}</h2>
                  <p>{text.safetyText}</p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="medical-hero">
                <div className="medical-badge">{text.badge}</div>
                <h1>{text.title}</h1>
                <p>{text.description}</p>
              </section>
              <div className="medical-grid">
                {Object.entries(medicalDetails).map(([slug, item]) => (
                  <button className="medical-card" key={slug} onClick={() => navigate(`/knowledge/medical/${slug}`)}>
                    <div className="card-top">
                      <div className="medical-icon-box">{item.icon}</div>
                      <ArrowRight className="card-arrow" size={20} />
                    </div>
                    <h2>{locale === "si" ? item.sinhalaTitle : item.title}</h2>
                    <p className="card-desc">{locale === "si" ? item.sinhalaDescription : item.description}</p>
                    <span className="learn-more">{text.learn} <ArrowRight size={15} /></span>
                  </button>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}