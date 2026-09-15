import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Briefcase, MapPin, AlertTriangle, CheckCircle, Lightbulb, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import "./ViewExperience.css";

import ranjanImg from "../assets/ranjan.png";
import sunimalImg from "../assets/sunimal.jpeg";
import pipelineImg from "../assets/Pipline.png";
import newspaperImg from "../assets/Newspaper.jpeg";

export default function ViewExperience() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useLocale(); // "en" හෝ "si" ලබා ගනී

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // භාෂාවට අදාළ වචන මාලාව (Translations)
  const t = {
    en: {
      back: "Back to Experiences",
      notFound: "Officer record not found",
      goBack: "Go Back",
      roleUnit: "Role / Unit",
      location: "Location",
      expertise: "Expertise",
      slideshowTitle: "Incident Visuals & Media Slideshow",
      theStory: "The Story",
      challenges: "Challenges Faced",
      actions: "Actions Taken",
      lessons: "Key Lessons Learned",
      recommendations: "Recommendations for Future Operations",
      summary: "Operational Summary",
      summarySoon: "(Detailed story records for this officer will be updated soon.)"
    },
    si: {
      back: "ආපසු අත්දැකීම් වෙත",
      notFound: "නිලධාරියාගේ වාර්තාව හමු නොවීය",
      goBack: "පසුපසට යන්න",
      roleUnit: "තනතුර / ඒකකය",
      location: "ස්ථානය",
      expertise: "විශේෂඥතාව",
      slideshowTitle: "සිදුවීම් දර්ශන සහ මාධ්‍ය වාර්තාකරණය",
      theStory: "සිදුවීමේ විස්තරය",
      challenges: "මුහුණ දීමට සිදු වූ අභියෝග",
      actions: "ගනු ලැබූ ක්‍රියාමාර්ග",
      lessons: "ඉගෙනගත් ප්‍රධාන පාඩම්",
      recommendations: "අනාගත මෙහෙයුම් සඳහා නිර්දේශ",
      summary: "මෙහෙයුම් සාරාංශය",
      summarySoon: "(මෙම නිලධාරියාගේ විස්තර ඉක්මනින් යාවත්කාලීන කෙරේ.)"
    }
  };

  // සිංහලෙන් දත්ත අවශ්‍ය නම් ඒවා වෙනම ලබා දීමට (අවශ්‍ය නම් පමණක් වෙනස් කරගත හැක)
  const realExperiences = [
    {
      id: 1,
      title: locale === "si" ? "භාර පුහුණු නිලධාරী" : "Training Officer In Charge",
      responder: "PAC Ranjan Kumara",
      organization: locale === "si" ? "ගිනි නිවීම් සහ ගැලවුම්කරණ පුහුණු ඇකඩමිය, වැල්ලවත්ත" : "Fire & Rescue Training Academy, Wellawatte",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" 
        ? "අභියෝගාත්මක නායකත්වය, විශේෂිත පුහුණු සම්බන්ධීකරණය සහ අවදානම් සහගත පරිසරයන්හි ගැලවුම්කරණ ක්‍රමවේද ලබා දෙන පළපුරුදු පුහුණු නිලධාරී." 
        : "Experienced Training Officer In Charge providing critical leadership, specialized training coordination, and rescue protocols in high-risk urban environments.",
      type: locale === "si" ? "පුහුණු සහ මෙහෙයුම්" : "Training & Operations",
      location: locale === "si" ? "ශ්‍රී ලංකාව" : "Sri Lanka",
      image: ranjanImg,
      storyImages: [
        { img: pipelineImg, caption: locale === "si" ? "පයිප්ප / ශේෂ ටැංකි ස්ථානයේ ගැලවුම්කරණ මෙහෙයුම" : "Rescue Operation at the Pipe / Balance Tank Site" },
        { img: newspaperImg, caption: locale === "si" ? "සිදුවීම පිළිබඳ පුවත්පත් මාධ්‍ය ආවරණය" : "Newspaper Media Coverage of the Incident" }
      ],
      storyDetails: {
        incidentTitle: locale === "si" ? "පයිප්පයක් තුළ සිරවූ පුද්ගලයන් දෙදෙනෙකු මුදාගැනීමේ මෙහෙයුම" : "Rescue of Two People Trapped Inside a Pipe",
        incidentYear: "2022",
        incidentType: locale === "si" ? "සීමිත අවකාශයක සිදුකළ ගැලවුම්කරණ මෙහෙයුමක්" : "Confined-Space Rescue / Trapped Person Rescue",
        storyText: locale === "si" 
          ? "සීමිත පයිප්පයක් වැනි අවකාශයක් තුළ පුද්ගලයන් දෙදෙනෙකු සිරවීමෙන් පසු මෙම ගැලවුම්කරණ මෙහෙයුම ක්‍රියාත්මක කරන ලදී. එම ප්‍රදේශය පටු සහ ළඟා වීමට අපහසු වූ බැවින් තත්ත්වය අභියෝගාත්මක විය. ගිනි නිවීම් සහ ගැලවුම්කරණ පිරිස පැමිණ තත්ත්වය හොඳින් පරීක්ෂා කර මෙහෙයුම ඇරඹීය. ආරක්‍ෂිත උපකරණ භාවිත කරමින් කණ්ඩායමේ සාමාජිකයෙක් ඇතුළු විය. මෙහෙයුමේදී සිරවී සිටි එක් අයෙක් කලබලකාරී සහ විරුද්ධ වන ස්වභාවයකින් පසුවිය. දුෂ්කරතා මැද වුවද, කණ්ඩායම ඉතා පරිස්සමින් එම පුද්ගලයන් දෙදෙනා ආරක්ෂිතව මුදා ගන්නා ලදී."
          : "A rescue operation was carried out after two people became trapped inside a confined pipe-like space. The situation was challenging because the space was narrow and difficult to access. Fire and rescue personnel arrived at the scene and carefully assessed the situation before beginning the rescue. A rescue team member entered the confined space using appropriate protective equipment and rescue procedures. During the operation, one of the trapped persons was reportedly in a confused and distressed condition and attempted to resist the rescuer. Despite the difficult conditions, the rescue team continued the operation carefully and successfully brought the trapped persons out of the confined space.",
        challenges: [
          locale === "si" ? "සීමිත සහ පටු වැඩ කරන අවකාශය" : "Restricted and confined working space",
          locale === "si" ? "සිරවී සිටින පුද්ගලයන් වෙත ළඟා වීමට ඇති අපහසුතාව" : "Difficult access to the trapped persons",
          locale === "si" ? "සිරවූ පුද්ගලයා කලබලකාරී හා සහයෝගයෙන් නොසිටීම" : "Trapped person was distressed and uncooperative",
          locale === "si" ? "ගැලවුම්කරුවාට චලනය වීමට ඇති සීමිත ඉඩකඩ" : "Limited movement for the rescuer",
          locale === "si" ? "පරිස්සමින් ගැලවුම්කරණය සම්බන්ධීකරණය කිරීමේ අවශ්‍යතාව" : "Need for careful rescue coordination"
        ],
        actions: [
          locale === "si" ? "තත්ත්වය තක්සේරු කිරීම: සීමිත අවකාශය සහ සිරවූවන්ගේ තත්ත්වය පරීක්ෂා කිරීම." : "Situation Assessment: The rescue team assessed the confined space and the condition of the trapped persons.",
          locale === "si" ? "අපද්‍රව්‍ය හඳුනාගැනීම: ඇතුළු වීමට පෙර පරිසරයේ ඇති විය හැකි අවදානම් සලකා බැලීම." : "Hazard Identification: Potential hazards associated with the restricted environment were considered before entry.",
          locale === "si" ? "පුද්ගලයන් මුදාගැනීමේ සූදානම: සුදුසු ගැලවුම්කරණ සහ ආරක්ෂක උපකරණ සූදානම් කිරීම." : "Rescue Preparation: Appropriate rescue equipment and protective equipment were prepared.",
          locale === "si" ? "සීමිත අවකාශයට ඇතුළු වීම: පුහුණු ගැලවුම්කරුවෙක් අදාළ ප්‍රදේශයට ඇතුළු වීම." : "Confined-Space Entry: A trained rescuer entered the restricted area to reach the trapped person.",
          locale === "si" ? "වින්දිතයන් මුදාගැනීම: සිරවූවන් ආරක්ෂිතව ඉවතට ගැනීම." : "Victim Rescue: The trapped persons were carefully assisted and brought out of the confined space.",
          locale === "si" ? "వైద్య පරීක්ෂාව: ආරක්ෂිතව මුදාගත් පසු සෞඛ්‍ය තත්ත්වය පරීක්ෂා කිරීම." : "Medical / Safety Check: The rescued persons were checked after being brought to safety.",
          locale === "si" ? "වාර්තාගත කිරීම: අනාගත යොමුව සඳහා මෙහෙයුම ලේඛනගත කිරීම." : "Final Reporting: The incident and rescue operation were documented for future reference."
        ],
        lessons: [
          locale === "si" ? "ආරක්ෂාව: සීමිත අවකාශයක මෙහෙයුම් සඳහා ඇතුළු වීමට පෙර හොඳින් පරීක්ෂා කිරීම සහ ආරක්ෂක උපකරණ අවශ්‍ය වේ." : "Safety: Confined-space rescue requires careful assessment and appropriate protective equipment before entering.",
          locale === "si" ? "කණ්ඩායම් ක්‍රියාකාරිත්වය: පටු පරිසරයන්හිදී සම්බන්ධීකරණය අත්‍යවශ්‍ය වේ." : "Teamwork: Clear coordination between the rescuer and supporting team is important in restricted environments.",
          locale === "si" ? "සූදානම: කලබලකාරී වින්දිතයන් සමඟ කටයුතු කිරීමට සූදානම් වීම." : "Rescuer Preparedness: Rescuers should be prepared to deal with distressed, confused, or uncooperative victims.",
          locale === "si" ? "ක්‍රමවේදය: නිසි තක්සේරුව මඟින් මෙහෙයුම් අවදානම් අඩු කරගත හැක." : "Planning: A proper assessment of the access route and rescue method can reduce risks during confined-space operations."
        ],
        recommendations: [
          locale === "si" ? "සීමිත අවකාශයන්හි ගැලවුම්කරණ පුහුණුව වැඩි කිරීම" : "Increase confined-space rescue training",
          locale === "si" ? "විශේෂිත උපකරණ නඩත්තු කිරීම" : "Maintain specialised confined-space rescue equipment",
          locale === "si" ? "සන්නිවේදන ක්‍රම දියුණු කිරීම" : "Improve communication between rescuers and support teams",
          locale === "si" ? "නිත්‍ය පුහුණු අභ්‍යාස පැවැත්වීම" : "Conduct regular practical rescue exercises",
          locale === "si" ? "කලබලකාරී වින්දිතයන් හැසිරවීමේ ක්‍රියා පටිපාටි ශක්තිමත් කිරීම" : "Strengthen procedures for handling distressed or uncooperative victims"
        ]
      }
    },
    {
      id: 2,
      title: locale === "si" ? "පුහුණු මෙහෙයුම් නිලධාරී" : "Training Operations & Training Officer",
      responder: "PK Pathmasiri",
      organization: locale === "si" ? "පුහුණු අංශය" : "Training Division",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "උසස් ගිනි නිවීමේ ක්‍රමවේද සහ හදිසි සූදානම් වීම් පිළිබඳ විශේෂඥ පුහුණු නිලධාරී." : "Specialized Training Officer focusing on advanced firefighting techniques, emergency preparedness, and response drills.",
      type: locale === "si" ? "ගිනි ආරක්ෂණය" : "Fire Safety",
      location: locale === "si" ? "කොළඹ" : "Colombo"
    },
    {
      id: 3,
      title: locale === "si" ? "සਹਾයක ප්‍රධාන ගිනි නිවීම් නිලධාරී" : "Fire Assistant Chief & Fire Officer",
      responder: "TLSS Nandasiri",
      organization: locale === "si" ? "ගිනි නිවීම් විධානය" : "Fire Command Unit",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "මහා පරිමාණ ව්‍යසන අවම කිරීමේ මෙහෙයුම් අධීක්ෂණය කරන සහායක ප්‍රධාන ගිනි නිවීම් නිලධාරී." : "Assistant Chief Fire Officer overseeing major disaster mitigation operations, tactical deployment, and team leadership.",
      type: locale === "si" ? "හදිසි විධානය" : "Emergency Command",
      location: locale === "si" ? "කොළඹ" : "Colombo"
    },
    {
      id: 4,
      title: locale === "si" ? "කොටස් මෙහෙයුම් කළමනාකරණය" : "Sectional Operations Management",
      responder: "WVDA Sunimal",
      organization: locale === "si" ? "මෙහෙයුම් අංශය" : "Operations Section",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "බිම් මට්ටමේ මෙහෙයුම් සහ උපකරණ සූදානම පාලනය කරන අංශ ප්‍රධානියා." : "Section Officer managing ground operations, equipment readiness, and rapid response deployment during crisis situations.",
      type: locale === "si" ? "නගර සෙවීම සහ ගැලවීම" : "Urban Search & Rescue",
      location: locale === "si" ? "කොළඹ" : "Colombo",
      image: sunimalImg
    },
    {
      id: 5,
      title: locale === "si" ? "ගිනි නිවීම් සහ ගැලවුම්කරණ පුහුණුව" : "Firefighting & Rescue Training",
      responder: "AADR Rukmal",
      organization: locale === "si" ? "ගිනි නිවීම් පුහුණු අංශය" : "Fire Training Wing",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "දක්ෂ මෙහෙයුම් සේවකයන් බිහි කිරීමට කැප වූ ජ්‍යෙෂ්ඨ පුහුණු උපදේශක." : "Senior Training Instructor in Fire Fighting, dedicated to shaping skilled operational responders and safety protocols.",
      type: locale === "si" ? "ගිනි නිවීම" : "Fire Fighting",
      location: locale === "si" ? "කොළඹ" : "Colombo"
    }
  ];

  const officer = realExperiences.find((item) => item.id === parseInt(id));

  if (!officer) {
    return (
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <TopHeader />
          <div style={{ padding: "40px", color: "#fff", textAlign: "center" }}>
            <h2>{t[locale].notFound}</h2>
            <button onClick={() => navigate(-1)} style={{ marginTop: "20px", padding: "10px 20px", background: "#f59e0b", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
              {t[locale].goBack}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handlePrevImage = () => {
    if (officer.storyImages && officer.storyImages.length > 0) {
      setCurrentImageIndex((prev) => (prev === 0 ? officer.storyImages.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (officer.storyImages && officer.storyImages.length > 0) {
      setCurrentImageIndex((prev) => (prev === officer.storyImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main style={{ flex: 1, overflowY: "auto", padding: "24px 32px 56px", background: "#0b0f19", color: "#fff" }}>
          
          <button 
            onClick={() => navigate(-1)} 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", border: "none", color: "#f59e0b", cursor: "pointer", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}
          >
            <ArrowLeft size={16} /> {t[locale].back}
          </button>

          <div style={{ background: "#111827", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
            
            {/* Officer Header Info */}
            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap", marginBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "24px" }}>
              {officer.image ? (
                <img src={officer.image} alt={officer.responder} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "2px solid #f59e0b" }} />
              ) : (
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.1)", display: "grid", placeItems: "center", color: "#f59e0b", fontSize: "32px", fontWeight: "bold" }}>
                  {officer.responder.charAt(0)}
                </div>
              )}
              
              <div>
                <span style={{ color: "#f59e0b", fontFamily: "monospace", fontSize: "12px", fontWeight: "700", background: "rgba(245, 158, 11, 0.1)", padding: "4px 8px", borderRadius: "4px" }}>
                  {officer.year}
                </span>
                <h1 style={{ fontSize: "26px", margin: "8px 0 4px", color: "#f8fafc" }}>{officer.responder}</h1>
                <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0" }}>{officer.title} - {officer.organization}</p>
              </div>
            </div>

            {/* Quick Details Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "28px", background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Briefcase size={18} style={{ color: "#60a5fa" }} />
                <div>
                  <span style={{ fontSize: "11px", color: "#64748b", display: "block" }}>{t[locale].roleUnit}</span>
                  <span style={{ fontSize: "13px", color: "#e2e8f0" }}>{officer.title}</span>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MapPin size={18} style={{ color: "#f87171" }} />
                <div>
                  <span style={{ fontSize: "11px", color: "#64748b", display: "block" }}>{t[locale].location}</span>
                  <span style={{ fontSize: "13px", color: "#e2e8f0" }}>{officer.location}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={18} style={{ color: "#34d399" }} />
                <div>
                  <span style={{ fontSize: "11px", color: "#64748b", display: "block" }}>{t[locale].expertise}</span>
                  <span style={{ fontSize: "13px", color: "#e2e8f0" }}>{officer.type}</span>
                </div>
              </div>
            </div>

            {/* Story Content Section */}
            {officer.storyDetails ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                {/* Incident Main Title */}
                <div style={{ background: "rgba(245, 158, 11, 0.05)", borderLeft: "4px solid #f59e0b", padding: "16px 20px", borderRadius: "0 8px 8px 0" }}>
                  <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {locale === "si" ? `වසර ${officer.storyDetails.incidentYear} • ${officer.storyDetails.incidentType}` : `Year ${officer.storyDetails.incidentYear} • ${officer.storyDetails.incidentType}`}
                  </span>
                  <h2 style={{ fontSize: "20px", color: "#f8fafc", margin: "6px 0 0" }}>{officer.storyDetails.incidentTitle}</h2>
                </div>

                {/* Slideshow Section */}
                {officer.storyImages && officer.storyImages.length > 0 && (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <h3 style={{ fontSize: "16px", color: "#f1f5f9", margin: 0 }}>📸 {t[locale].slideshowTitle}</h3>
                      <span style={{ fontSize: "13px", color: "#94a3b8", fontFamily: "monospace" }}>
                        {currentImageIndex + 1} / {officer.storyImages.length}
                      </span>
                    </div>

                    <div style={{ background: "#030712", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "12px", overflow: "hidden", padding: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.6)", position: "relative" }}>
                      
                      <div style={{ width: "100%", height: "360px", background: "#000", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                        <img 
                          src={officer.storyImages[currentImageIndex].img} 
                          alt={officer.storyImages[currentImageIndex].caption} 
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "4px" }} 
                        />

                        <button 
                          onClick={handlePrevImage}
                          style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.7)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", cursor: "pointer" }}
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <button 
                          onClick={handleNextImage}
                          style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.7)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", cursor: "pointer" }}
                        >
                          <ChevronRight size={22} />
                        </button>
                      </div>

                      <p style={{ fontSize: "14px", color: "#e2e8f0", textAlign: "center", margin: "14px 0 8px", fontWeight: "500" }}>
                        {officer.storyImages[currentImageIndex].caption}
                      </p>

                      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
                        {officer.storyImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            style={{ width: currentImageIndex === idx ? "24px" : "8px", height: "8px", borderRadius: "4px", background: currentImageIndex === idx ? "#f59e0b" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }}
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                )}

                {/* Story Narrative */}
                <div>
                  <h3 style={{ fontSize: "16px", color: "#f1f5f9", marginBottom: "8px" }}>📖 {t[locale].theStory}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#cbd5e1", background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
                    {officer.storyDetails.storyText}
                  </p>
                </div>

                {/* Challenges Faced */}
                <div>
                  <h3 style={{ fontSize: "16px", color: "#f87171", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <AlertTriangle size={18} /> {t[locale].challenges}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {officer.storyDetails.challenges.map((ch, idx) => (
                      <li key={idx}>{ch}</li>
                    ))}
                  </ul>
                </div>

                {/* Actions Taken */}
                <div>
                  <h3 style={{ fontSize: "16px", color: "#60a5fa", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={18} /> {t[locale].actions}
                  </h3>
                  <div style={{ display: "grid", gap: "8px" }}>
                    {officer.storyDetails.actions.map((act, idx) => (
                      <div key={idx} style={{ background: "rgba(255,255,255,0.02)", padding: "10px 14px", borderRadius: "6px", fontSize: "13px", border: "1px solid rgba(255,255,255,0.03)" }}>
                        {act}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Lessons Learned */}
                <div>
                  <h3 style={{ fontSize: "16px", color: "#34d399", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Lightbulb size={18} /> {t[locale].lessons}
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "10px" }}>
                    {officer.storyDetails.lessons.map((les, idx) => (
                      <div key={idx} style={{ background: "rgba(52, 211, 153, 0.05)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(52, 211, 153, 0.1)", fontSize: "13px", color: "#d1fae5" }}>
                        {les}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 style={{ fontSize: "16px", color: "#f59e0b", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Shield size={18} /> {t[locale].recommendations}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {officer.storyDetails.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: "16px", color: "#f1f5f9", marginBottom: "10px" }}>{t[locale].summary}</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#cbd5e1", background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
                  {officer.snippet} {t[locale].summarySoon}
                </p>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}