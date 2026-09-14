import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import { ArrowRight } from "lucide-react";
import "./KnowledgeSection.css";

const sectionContent = {
  operational: {
    kicker: "OPERATIONAL PROTOCOLS",
    title: "INSARAG Operational Guidelines & SOPs",
    sinhalaTitle: "මෙහෙයුම් මාර්ගෝපදේශ සහ ප්‍රමිතිගත ක්‍රියා පටිපාටි",
    description: "Access step-by-step procedures and important operational knowledge for Urban Search and Rescue operations.",
    sinhalaDescription: "නාගරික සෙවුම් සහ ගලවා ගැනීමේ මෙහෙයුම් සඳහා පියවරෙන් පියවර ක්‍රියා පටිපාටි සහ වැදගත් මෙහෙයුම් දැනුම ලබා ගන්න.",
    cards: [
      { slug: "first-response", title: "First Response", sinhalaSubtitle: "පළමු ප්‍රතිචාරය", desc: "Learn the basic actions and responsibilities involved during the initial response to an emergency or disaster.", sinhalaDesc: "හදිසි අවස්ථාවකට හෝ ආපදාවකට මුල් අවස්ථාවේදී ප්‍රතිචාර දැක්වීමේදී කළ යුතු මූලික ක්‍රියාමාර්ග සහ වගකීම් ඉගෙන ගන්න.", icon: "🚨" },
      { slug: "disaster-environment", title: "Disaster Environment", sinhalaSubtitle: "ආපදා පරිසරය", desc: "Understand different disaster environments and the risks that responders may face.", sinhalaDesc: "විවිධ ආපදා පරිසරයන් සහ ප්‍රතිචාර දක්වන්නන්ට මුහුණ දීමට සිදුවන අවදානම් තේරුම් ගන්න.", icon: "🌍" },
      { slug: "incident-site-management", title: "Incident Site Management", sinhalaSubtitle: "සිද්ධි ස්ථාන කළමනාකරණය", desc: "Learn how to safely manage and organize activities at a disaster or emergency site.", sinhalaDesc: "ආපදා හෝ හදිසි අවස්ථා ස්ථානයක කටයුතු ආරක්ෂිතව කළමනාකරණය කර සංවිධානය කරන්නේ කෙසේදැයි ඉගෙන ගන්න.", icon: "⚠️" },
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
      { slug: "insarag-guidelines", title: "INSARAG Guidelines", sinhalaSubtitle: "ජාත්‍යන්තර මාර්ගෝපදේශ", desc: "International Search and Rescue Advisory Group standards and frameworks.", sinhalaDesc: "ජාත්‍යන්තර සෙවුම් සහ ගලවා ගැනීමේ උපදේශක කණ්ඩායමේ ප්‍රමිතීන් සහ රාමු.", icon: "🌐" },
      { slug: "training-resources", title: "Training Resources", sinhalaSubtitle: "පුහුණු සම්පත්", desc: "Reference manuals and guides for ongoing USAR personnel training.", sinhalaDesc: "USAR කාර්ය මණ්ඩල පුහුණු කිරීම සඳහා වන විමර්ශන අත්පොත් සහ මාර්ගෝපදේශ.", icon: "📚" }
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
  const content = sectionContent[section] || sectionContent.operational;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="knowledge-hub-container">
          
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
            {content.cards.map((card) => (
              <Link
                to={`/knowledge/${card.slug}`}
                className="knowledge-card-item"
                key={card.slug}
              >
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
              </Link>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}