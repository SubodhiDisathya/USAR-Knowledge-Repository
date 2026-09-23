import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import { ArrowRight, PhoneCall, ShieldAlert, Cpu, FileText, CheckCircle2, ExternalLink } from "lucide-react";
import "./KnowledgeSection.css";

const sectionContent = {
  operational: {
    kicker: "OPERATIONAL PROTOCOLS",
    title: "INSARAG Operational Guidelines & Modules",
    sinhalaTitle: "මෙහෙයුම් මාර්ගෝපදේශ සහ ප්‍රමිතිගත ක්‍රියා පටිපාටි",
    description: "Access step-by-step procedures and important operational knowledge for Urban Search and Rescue operations.",
    sinhalaDescription: "නාගරික සෙවුම් සහ ගලවා ගැනීමේ මෙහෙයුම් සඳහා පියවරෙන් පියවර ක්‍රියා පටිපාටි සහ වැදගත් මෙහෙයුම් දැනුම ලබා ගන්න.",
    cards: [
      { slug: "first-response", title: "First Response", sinhalaSubtitle: "පළමු ප්‍රතිචාරය", desc: "Learn the basic actions and responsibilities involved during the initial response to an emergency or disaster.", sinhalaDesc: "හදිසි අවස්ථාවකට හෝ ආපදාවකට මුල් අවස්ථාවේදී ප්‍රතිචාර දැක්වීමේදී කළ යුතු මූලික ක්‍රියාමාර්ග සහ වගකීම් ඉගෙන ගන්න.", icon: "🚨" },
      { slug: "disaster-environment", title: "Disaster Environment", sinhalaSubtitle: "ආපදා පරිසරය", desc: "Understand different disaster environments and the risks that responders may face.", sinhalaDesc: "විවිධ ආපදා පරිසරයන් සහ ප්‍රතිචාර දක්වන්නන්ට මුහුණ දීමට සිදුවන අවදානම් තේරුම් ගන්න.", icon: "🌍" },
      { 
        slug: "incident-site-management", 
        title: "Incident Site Management", 
        sinhalaSubtitle: "සිද්ධි ස්ථාන කළමනාකරණය", 
        desc: "Learn how to safely manage and organize activities at a disaster or emergency site.", 
        sinhalaDesc: "ආපදා හෝ හදිසි අවස්ථා ස්ථානයක කටයුතු ආරක්ෂිතව කළමනාකරණය කර සංවිධානය කරන්නේ කෙසේදැයි ඉගෙන ගන්න.", 
        icon: "⚠️" 
      },
      { slug: "search-operations", title: "Search Operations", sinhalaSubtitle: "සෙවුම් මෙහෙයුම්", desc: "Learn important procedures and techniques used to search for victims during USAR.", sinhalaDesc: "USAR මෙහෙයුම් වලදී විපතට පත්වූවන් සෙවීම සඳහා භාවිතා කරන වැදගත් ක්‍රියා පටිපාටි සහ තාක්ෂණයන් ඉගෙන ගන්න.", icon: "🔍" },
      { slug: "rescue-operations", title: "Rescue Operations", sinhalaSubtitle: "ගලවා ගැනීමේ මෙහෙයුම්", desc: "Learn safe and organized procedures for conducting rescue operations.", sinhalaDesc: "ගලවා ගැනීමේ මෙහෙයුම් සිදු කිරීම සඳහා ආරක්ෂිත සහ සංවිධානාත්මක ක්‍රියා පටිපාටි ඉගෙන ගන්න.", icon: "🦺" }
    ]
  },
  medical: {
    kicker: "MEDICAL RESCUE",
    title: "First Aid & Medical",
    sinhalaTitle: "ප්‍රථමාධාර සහ වෛද්‍ය ප්‍රතිකාර",
    description: "Access essential medical rescue knowledge, patient assessment, treatment, handling, and emergency medical procedures.",
    sinhalaDescription: "අත්‍යවශ්‍ය වෛද්‍ය ගලවා ගැනීමේ දැනුම, රෝගී ඇගයීම, ප්‍රතිකාර, රෝගීන් හැසිරවීම සහ හදිසි වෛද්‍ය ක්‍රියා පටිපාටි වෙත පිවිසෙන්න.",
    cards: [
      { slug: "basic-medical-rescue", title: "Basic Medical Rescue", sinhalaSubtitle: "මූලික වෛද්‍ය ගලවා ගැනීම", desc: "Learn the basic principles of providing medical assistance during an emergency.", sinhalaDesc: "හදිසි අවස්ථාවකදී වෛද්‍ය ආධාර සැපයීමේ මූලික ප්‍රතිපත්ති ඉගෙන ගන්න.", icon: "🩺" },
      { slug: "scene-assessment", title: "Scene Assessment", sinhalaSubtitle: "සිද්ධි ස්ථාන ඇගයීම", desc: "Before helping a patient, carefully assess the surrounding environment.", sinhalaDesc: "රෝගියෙකුට උදව් කිරීමට පෙර අවට පරිසරය හොඳින් තක්සේරු කරන්න.", icon: "📋" },
      { slug: "patient-assessment", title: "Patient Assessment", sinhalaSubtitle: "රෝගී තත්ත්ව ඇගයීම", desc: "Learn how to assess a patient's condition and level of responsiveness.", sinhalaDesc: "රෝගියෙකුගේ තත්ත්වය සහ ප්‍රතිචාර දැක්වීමේ මට්ටම තක්සේරු කරන්නේ කෙසේදැයි ඉගෙන ගන්න.", icon: "❤️" },
      { slug: "patient-treatment", title: "Patient Treatment", sinhalaSubtitle: "රෝගී ප්‍රතිකාර", desc: "Access basic information about common injuries and emergency treatment priorities.", sinhalaDesc: "පොදු තුවාල සහ හදිසි ප්‍රතිකාර ප්‍රමුඛතා පිළිබඳ මූලික තොරතුරු ලබා ගන්න.", icon: "🩹" },
      { slug: "patient-handling", title: "Patient Handling", sinhalaSubtitle: "රෝගීන් හැසිරවීම", desc: "Learn important principles for safely moving and handling patients during rescue operations.", sinhalaDesc: "ගලවා ගැනීමේ මෙහෙයුම් වලදී රෝගීන් ආරක්ෂිතව ගෙන යාම සහ හැසිරවීම සඳහා වැදගත් ප්‍රතිපත්ති ඉගෙන ගන්න.", icon: "🚑" },
      { slug: "respectful-handling-deceased", title: "Respectful Handling of Deceased", sinhalaSubtitle: "මියගිය අය සඳහා ගෞරවනීය සැලකීම", desc: "Guidelines for the safe, respectful, and appropriate handling of deceased persons.", sinhalaDesc: "මියගිය පුද්ගලයින් ආරක්ෂිතව, ගෞරවනීය ලෙස සහ සුදුසු පරිදි හැසිරවීම සඳහා වන මාර්ගෝපදේශ.", icon: "🕊️" }
    ]
  },
  others: {
    kicker: "RESOURCES",
    title: "Other Knowledge Resources",
    sinhalaTitle: "වෙනත් දැනුම් සම්පත්",
    description: "Access general INSARAG information, international coordination, training resources, and additional knowledge.",
    sinhalaDescription: "සාමාන්‍ය INSARAG තොරතුරු, ජාත්‍යන්තර සම්බන්ධීකරණය, පුහුණු සම්පත් සහ අමතර දැනුම ලබා ගන්න.",
    cards: [
      { 
        slug: "mass-casualty-incident", 
        title: "Mass Casualty Incident (MCI) Preparedness and Response Plan of CNTH Ragama", 
        sinhalaSubtitle: "කොළඹ උතුරු ශික්ෂණ රෝහලේ (රගම) මහා අනතුරු සහ හදිසි තත්ව (MCI) සූදානම් වීමේ සහ ප්‍රතිචාර දැක්වීමේ සැලැස්ම", 
        desc: "Mass Casualty Incident (MCI) Preparedness and Response Plan of CNTH Ragama.", 
        sinhalaDesc: "කොළඹ උතුරු ශික්ෂණ රෝහලේ (රගම) මහා අනතුරු සහ හදිසි තත්ව (MCI) සූදානම් වීමේ සහ ප්‍රතිචාර දැක්වීමේ සැලැස්ම.", 
        icon: "🚨"
      },
      { 
        slug: "emt-basic-certificate", 
        title: "1990 Suwa Seriya EMT-Basic Training", 
        sinhalaSubtitle: "1990 සුව සැරිය EMT-මූලික පුහුණුව", 
        desc: "Certificate course structure, modules, and operational guidelines.", 
        sinhalaDesc: "1990 සුව සැරිය ගිලන්රථ සේවය සහ සෞඛ්‍ය අමාත්‍යාංශය මඟින් පවත්වනු ලබන හදිසි වෛද්‍ය කාර්මික ශිල්පීන් සඳහා වන මූලික සහතික පත්‍ර පාඨමාලාව.", 
        icon: "🚑" 
      }
    ]
  },
  experiences: {
    kicker: "LESSONS & CASES",
    title: "Past Experiences & Stories",
    sinhalaTitle: "පසුගිය අත්දැකීම් සහ කථා",
    description: "Explore real-world rescue experiences, operational challenges, success stories, and critical lessons learned.",
    sinhalaDescription: "සැබෑ ලෝකයේ ගලවා ගැනීමේ අත්දැකීම්, මෙහෙයුම් අභියෝග, සාර්ථක කථා සහ ඉගෙනගත් වැදගත් පාඩම් ගවේෂණය කරන්න.",
    cards: [
      { slug: "flood-rescue-2025", title: "Flood Rescue Operations 2025", sinhalaSubtitle: "ගංවතුර ගැලවාගැනීම් 2025", desc: "Case study and field insights from recent major flood response missions.", sinhalaDesc: "පසුගිය ප්‍රධාන ගංවතුර ප්‍රතිචාර මෙහෙයුම් වලින් ලබාගත් ක්ෂේත්‍ර නිරීක්ෂණ.", icon: "🌊" },
      { slug: "operational-challenges", title: "Operational Challenges", sinhalaSubtitle: "මෙහෙයුම් අභියෝග", desc: "Key lessons learned from complex urban rescue scenarios.", sinhalaDesc: "සංකීර්ණ නාගරික ගලවා ගැනීමේ අවස්ථාවන්ගෙන් ඉගෙනගත් ප්‍රධාන පාඩම්.", icon: "⚡" }
    ]
  },
  contacts: {
    kicker: "DIRECT CONTACTS",
    title: "Emergency Contact Directory",
    sinhalaTitle: "හදිසි ඇමතුම් නාමාවලිය",
    description: "Quickly access verified emergency response personnel, rescue units, and agency communication details.",
    sinhalaDescription: "තහවුරු කරන ලද හදිසි ප්‍රතිචාර පිරිස්, ගලවා ගැනීමේ ඒකක සහ ආයතනික සන්නිවේදන විස්තර වෙත ඉක්මනින් පිවිසෙන්න.",
    cards: [
      { slug: "disaster-management-center", title: "Disaster Management Center", sinhalaSubtitle: "ආපදා කළමනාකරණ මධ්‍යස්ථානය", desc: "Direct coordination lines and control room numbers.", sinhalaDesc: "සෘජු සම්බන්ධීකරණ මාර්ග සහ පාලන මැදිරි දුරකථන අංක.", icon: "📞" },
      { slug: "usar-unit-commanders", title: "USAR Unit Commanders", sinhalaSubtitle: "USAR ඒකක ආඥාපතිවරුන්", desc: "Primary contact list for team leaders and response squads.", sinhalaDesc: "කණ්ඩායම් නායකයින් සහ ප්‍රතිචාර කණ්ඩායම් සඳහා ප්‍රධාන සම්බන්ධතා ලැයිස්තුව.", icon: "👥" }
    ]
  }
};

export default function KnowledgeSection({ section }) {
  const { locale } = useLocale();
  const content = sectionContent[section];

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="knowledge-hub-container">
          
          {section === "sops" ? (
            <div className="sop-overview-container" style={{ color: "#f8fafc" }}>
              <div className="knowledge-hub-hero">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  STANDARD OPERATING PROCEDURES
                </div>
                <h1 className="hero-title">
                  {locale === "si" ? "SOP 0067: 117 ඇමතුම් මැදිරි ක්‍රියාපටිපාටිය" : "SOP 0067: 117 Call Center Documentation"}
                </h1>
                <p className="hero-description" style={{ margin: 0 }}>
                  {locale === "si" 
                    ? "ආපදා කළමනාකරණ මධ්‍යස්ථානයේ (DMC) 117 ඇමතුම් මැදිරියේ දෛනික සහ හදිසි මෙහෙයුම් සඳහා වන තාක්ෂණික නොවන තොරතුරු අනුපිළිවෙළ සහ තාක්ෂණික බිඳවැටීම් කළමනාකරණ මාර්ගෝපදේශ." 
                    : "Comprehensive operational guidelines for the Disaster Management Centre (DMC) 117 Call Center, covering non-technical information protocols and technical failure management."}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                
                <div style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", color: "#f97316", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <FileText size={20} /> {locale === "si" ? "1. 117 ඇමතුම් මැදිරි සම්මත ක්‍රියාපටිපාටිය - අන්තර්ගතය" : "1. 117 Call Center Standard Operating Procedure - Content"}
                  </h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                    {locale === "si" ? "මෙම ලේඛනය මඟින් 117 ඇමතුම් මැදිරියේ සියලුම දෛනික සහ හදිසි මෙහෙයුම් කටයුතු ප්‍රමිතිගත කර ඇත. මෙම ක්‍රියාපටිපාටිය ප්‍රධාන කොටස් 02 කින් සමන්විත වේ:" : "This document standardizes all daily and emergency operations of the 117 Call Center, divided into 2 main parts:"}
                  </p>
                  <ul style={{ paddingLeft: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                    <li>{locale === "si" ? "තාක්ෂණික නොවන සම්මත ක්‍රියාපටිපාටිය (සාමාන්‍ය තොරතුරු සහ ආපදා සහය)" : "Non-Technical Standard Operating Procedure (General info & Disaster support)"}</li>
                    <li>{locale === "si" ? "තාක්ෂණික සම්මත ක්‍රියාපටිපාටිය (විදුලි බිඳවැටීම් සහ ජාල පද්ධති බිඳවැටීම්)" : "Technical Standard Operating Procedure (Power failures & Network system failures)"}</li>
                  </ul>
                </div>

                <div style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", color: "#60a5fa", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <ShieldAlert size={20} /> {locale === "si" ? "2. තාක්ෂණික නොවන සම්මත ක්‍රියාපටිපාටිය (Non-Technical SOP)" : "2. Non-Technical Standard Operating Procedure"}
                  </h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                    {locale === "si" ? "මහජනතාවගෙන් ලැබෙන ආපදා තොරතුරු සඳහා ප්‍රතිචාර දැක්වීම අදියර 02 කට බෙදා ඇත:" : "Public disaster information response is divided into 2 levels:"}
                  </p>
                  <ul style={{ paddingLeft: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li><strong>{locale === "si" ? "අදියර 01 (Level 01) - සාමාන්‍ය තොරතුරු:" : "Level 01 - General Info:"}</strong> {locale === "si" ? "කාලගුණ අනාවැකි, පූර්ව අනතුරු ඇඟවීම් සහ දුරකථන අංක වැනි ක්ෂණිකව ලබාදිය හැකි නිශ්චිත දත්ත ලබා දීම." : "Providing weather forecasts, early warnings, and specific contact details."}</li>
                    <li><strong>{locale === "si" ? "අදියර 02 (Level 02) - හදිසි මෙහෙයුම් සහ සහය:" : "Level 02 - Emergency & Relief:"}</strong> {locale === "si" ? "හදිසි තොරතුරු හදිසි මෙහෙයුම් මැදිරියේ (EOC) රාජකාරීභාර නිලධාරියා වෙත ලබා දීම සහ අධ්‍යක්ෂ (මෙහෙයුම්) හා අධ්‍යක්ෂ ජෙනරාල් දැනුවත් කිරීම තහවුරු කිරීම. සියලුම ක්‍රියාදාමයන් දෛනික තත්ත්ව වාර්තා පොතේ (Daily Occurrence Book - DOB) අනිවාර්යයෙන් ලේඛනගත කළ යුතුය." : "Forwarding urgent matters to EOC Duty Officer, notifying Director Operations and Director General, and logging in the Daily Occurrence Book (DOB)."}</li>
                  </ul>
                </div>

                <div style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", color: "#34d399", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <Cpu size={20} /> {locale === "si" ? "3. තාක්ෂණික කටයුතු යථා තත්වයට පත් කිරීම (Technical SOP & Failure Management)" : "3. Technical Restoration & Failure Management"}
                  </h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                    {locale === "si" ? "විදුලිබලය විසන්ධි වීම සහ ජාල පද්ධති අක්‍රිය වීම වැනි අවස්ථාවන් සඳහා ගත යුතු ක්‍රියාමාර්ග:" : "Actions to take during power cuts and system failures:"}
                  </p>
                  <ul style={{ paddingLeft: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>{locale === "si" ? "පළමු මිනිත්තු 10 ඇතුළත: ස්විච් බෝඩ් පරීක්ෂාව, ප්‍රධාන විදුලි ජනක යන්ත්‍රය (Generator) පරීක්ෂා කිරීම සහ සහකාර අධ්‍යක්ෂ (සන්නිවේදන) දැනුවත් කිරීම." : "Within the first 10 minutes: Switchboard inspection, generator check, and notifying Assistant Director (Communication)."}</li>
                    <li>{locale === "si" ? "මිනිත්තු 20 සිට 30 දක්වා: දුරකථන ජාලය CDMA වෙත හෝ E-Mobitel වෙත මාරු කිරීම, සහ ලංකා ටෙලිකොම් ආයතනය වෙත දැනුම් දීම." : "Within 20-30 minutes: Diverting calls to CDMA or E-Mobitel networks, and requesting telecom restoration."}</li>
                    <li>{locale === "si" ? "ජංගම දුරකථන 10 ක් නිරන්තරයෙන් ආරෝපණය කර මැදිරිය තුළ තබා ගත යුතු අතර, එහි ක්‍රියාකාරීත්වය දෛනිකව තහවුරු කළ යුතුය." : "10 mobile phones must be kept charged inside the center with daily operational checks."}</li>
                  </ul>
                </div>

                <div style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", color: "#facc15", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={20} /> {locale === "si" ? "4. පද්ධති ප්‍රවාහ සටහන් සාරාංශය (Flow Charts Summary)" : "4. Flow Charts Summary"}
                  </h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                    {locale === "si" ? "• තොරතුරු වාර්තාකරණ ප්‍රවාහය: මහජනතාව ➔ 117 ඇමතුම් මැදිරිය (Level 01 සාමාන්‍ය තොරතුරු / Level 02 හදිසි සහය සඳහා EOC ➔ D-EOC ➔ DG-DMC)." : "• Information Reporting Flow: General Public ➔ 117 Call Center (Level 01 General / Level 02 Assistance via EOC ➔ D-EOC ➔ DG-DMC)."}
                  </p>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                    {locale === "si" ? "• ඇමතුම් මැදිරි අසමත් වීමේ ප්‍රවාහය: ගැටළුව හඳුනා ගැනීම (Power/System Fault) ➔ Duty Officer / AD COM දැනුවත් කිරීම ➔ මිනිත්තු 10-30 ඇතුළත Call Forwarding සහ CDMA/Mobile වෙත යොමු කිරීම." : "• Call Center Failure Flow: Problem Identification (Power/System Fault) ➔ Notify Duty Officer / AD COM ➔ Call Forwarding to CDMA/Mobile within 10-30 minutes."}
                  </p>
                </div>

                <div style={{ 
                  background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(17, 24, 39, 0.9))", 
                  border: "1px solid rgba(249, 115, 22, 0.3)", 
                  borderRadius: "16px", 
                  padding: "30px", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "16px",
                  textAlign: "center",
                  marginTop: "10px"
                }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    {locale === "si" ? "සම්පූර්ණ නිල ලේඛනය (Official Document)" : "Full Official Document"}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "14px", maxWidth: "600px", margin: 0, lineHeight: "1.5" }}>
                    {locale === "si" 
                      ? "මෙම SOP 0067 ලේඛනයේ අඩංගු සියලුම පිටු, සටහන් සහ අතිරේක විස්තර Google Drive හරහා සම්පූර්ණයෙන් නරඹන්න." 
                      : "View all pages, notes, and supplementary details of the SOP 0067 document via Google Drive."}
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1WiZY9dpmUso8kzwOOZiv45kyHQLharTe/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      color: "#ffffff",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "15px",
                      boxShadow: "0 6px 20px rgba(249, 115, 22, 0.4)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease"
                    }}
                  >
                    <FileText size={20} />
                    <span>{locale === "si" ? "නිල ලේඛනය බලන්න (View Official Document)" : "View Official Document"}</span>
                    <ExternalLink size={18} />
                  </a>
                </div>

              </div>
            </div>
          ) : content ? (
            <>
              <div className="knowledge-hub-hero">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  {content.kicker}
                </div>
                <h1 className="hero-title">
                  {locale === "si" ? content.sinhalaTitle : content.title}
                </h1>
                <p className="hero-description">
                  {locale === "si" ? content.sinhalaDescription : content.description}
                </p>
              </div>

              <div className="knowledge-cards-grid">
                {content.cards.map((card) => {
                  const cardContent = (
                    <>
                      <div className="card-header-row">
                        <div className="card-icon-wrapper">
                          <span className="emoji-icon">{card.icon}</span>
                        </div>
                        <span className="card-action-indicator">
                          <ArrowRight size={16} />
                        </span>
                      </div>

                      <div className="card-body-content">
                        <h3 className="card-item-title">
                          {locale === "si" ? card.sinhalaSubtitle : card.title}
                        </h3>
                        <p className="card-item-desc">
                          {locale === "si" ? (card.sinhalaDesc || card.desc) : card.desc}
                        </p>
                      </div>

                      <div className="card-footer-link">
                        <span>{locale === "si" ? "විස්තර වෙත පිවිසෙන්න" : "Explore Resource"}</span>
                        <ArrowRight size={14} style={{ marginLeft: "6px" }} />
                      </div>
                    </>
                  );

                  return (
                    <Link
                      to={`/knowledge/${card.slug}`}
                      className="knowledge-card-item"
                      key={card.slug}
                    >
                      {cardContent}
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}

        </main>
      </div>
    </div>
  );
}