import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import AdminPanel from "../components/AdminPanel";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import "./Dashboard.css";

// Importing local images from assets folder
import sopsImg from "../assets/SOPs.jpeg";
import medicineImg from "../assets/medicine.jpeg";
import sriLankaFloodImg from "../assets/Sri Lanka Flood 2025.jpeg";
import contactListImg from "../assets/Contactlist.jpeg";
import othersImg from "../assets/Others'.jpeg";

import { 
  ShieldAlert, 
  Stethoscope, 
  Globe, 
  Users, 
  PhoneCall, 
  ArrowRight,
  Radio,
  Layers,
  FileText,
  Building,
  Globe2
} from "lucide-react";

export default function Dashboard() {
  const { userProfile } = useAuth();
  const { locale } = useLocale();
  const t = translations[locale] || translations["en"];
  const navigate = useNavigate();

  const stats = [
    { label: t.knowledgeItems || "Knowledge Items", value: "126", icon: <FileText className="w-5 h-5 text-orange-400" /> },
    { label: t.categoriesCount || "Categories", value: "5", icon: <Layers className="w-5 h-5 text-blue-400" /> },
    { label: t.fieldExperiences || "Field Stories", value: "34", icon: <Users className="w-5 h-5 text-purple-400" /> },
    { label: t.organizations || "Organizations", value: "12", icon: <Building className="w-5 h-5 text-emerald-400" /> },
    { label: t.languages || "Languages", value: "2", icon: <Globe2 className="w-5 h-5 text-rose-400" /> }
  ];

  const categoryCards = [
    {
      title: t.operationalGuidelines,
      subtitle: "SOPs & PROCEDURES",
      description: "Access procedures, operational guidelines, search operations, rescue operations, and disaster response information.",
      descriptionSi: "ක්‍රියා පටිපාටි, මෙහෙයුම් මාර්ගෝපදේශ, සෙවුම් සහ ගලවා ගැනීමේ මෙහෙයුම් පිළිබඳ තොරතුරු වෙත ප්‍රවේශ වන්න.",
      icon: <ShieldAlert className="w-6 h-6 text-orange-400" />,
      path: "/operational-guidelines",
      badgeColor: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
      bgImage: sopsImg
    },
    {
      title: t.firstAidMedical,
      subtitle: "MEDICAL RESCUE",
      description: "Access essential medical rescue knowledge, patient assessment, treatment, handling, and emergency medical procedures.",
      descriptionSi: "වෛද්‍ය ගලවා ගැනීම, රෝගී ඇගයීම, ප්‍රතිකාර සහ හදිසි වෛද්‍ය ක්‍රියාමාර්ග පිළිබඳ දැනුම ලබා ගන්න.",
      icon: <Stethoscope className="w-6 h-6 text-blue-400" />,
      path: "/first-aid-medical",
      badgeColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      bgImage: medicineImg
    },
    {
      title: t.experiencesStories,
      subtitle: "LESSONS & CASES",
      description: "Explore real-world rescue experiences, operational challenges, success stories, and critical lessons learned.",
      descriptionSi: "සැබෑ ගලවා ගැනීමේ අත්දැකීම්, මෙහෙයුම් අභියෝග සහ වැදගත් පාඩම් ගවේෂණය කරන්න.",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      path: "/experiences",
      badgeColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
      bgImage: sriLankaFloodImg
    },
    {
      title: t.emergencyContacts,
      subtitle: "DIRECT CONTACTS",
      description: "Quickly access 593+ verified emergency response personnel, rescue units, and agency communication details.",
      descriptionSi: "තහවුරු කළ හදිසි ප්‍රතිචාර කාර්ය මණ්ඩලය, ගලවා ගැනීමේ ඒකක සහ ආයතනික සම්බන්ධතා වෙත ඉක්මනින් ප්‍රවේශ වන්න.",
      icon: <PhoneCall className="w-6 h-6 text-rose-400" />,
      path: "/emergency-contacts",
      badgeColor: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
      bgImage: contactListImg
    },
    {
      title: t.others,
      subtitle: "RESOURCES",
      description: "Access general INSARAG information, international coordination, training resources, and additional knowledge.",
      descriptionSi: "INSARAG තොරතුරු, ජාත්‍යන්තර සම්බන්ධීකරණය සහ පුහුණු සම්පත් වෙත ප්‍රවේශ වන්න.",
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      path: "/others",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      bgImage: othersImg
    }
  ];

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="dashboard-main">
          
          {/* Hero Banner Section */}
          <div className="dashboard-banner">
            <div>
              <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-mono px-2.5 py-0.5 rounded tracking-wide uppercase">
                Sri Lanka USAR
              </span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-mono px-2.5 py-0.5 rounded tracking-wide uppercase ml-2">
                Emergency Response
              </span>
            </div>
            <h2>
              {t.appTitle || "USAR Knowledge Repository"}
            </h2>
            <p className="dashboard-description">
              {locale === "si" ? "නාගරික සෙවීම් සහ ගලවා ගැනීමේ මෙහෙයුම් සඳහා හදිසි ප්‍රතිචාර දැනුම, මෙහෙයුම් මාර්ගෝපදේශ සහ ගලවා ගැනීමේ සම්පත් වෙත ප්‍රවේශ වන්න." : "Access important emergency response knowledge, operational guidelines, medical information, and rescue resources for Urban Search and Rescue operations."}
            </p>
          </div>

          {/* Quick Statistics Grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card-header">
                  <span className="stat-value">{stat.value}</span>
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Core Knowledge Category Cards Grid */}
          <section className="categories-section">
            <h3>{t.categories || "Knowledge Categories"}</h3>
            <div className="categories-grid">
              {categoryCards.map((cat, index) => (
                <div key={index} onClick={() => navigate(cat.path)} className="category-card">
                  
                  {/* Background Image with Overlay */}
                  <div className="category-bg-container">
                    <img 
                      src={cat.bgImage} 
                      alt={cat.title} 
                      className="category-image"
                    />
                    <div className="category-image-overlay"></div>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-top-row">
                      <span className={`category-subtitle ${cat.badgeColor}`}>
                        {cat.subtitle}
                      </span>
                      <div className="card-icon-wrapper">
                        {cat.icon}
                      </div>
                    </div>

                    <h4>
                      {cat.title}
                    </h4>
                    
                    <p>
                      {locale === "si" ? cat.descriptionSi : cat.description}
                    </p>
                  </div>

                  <div className="category-explore">
                    {t.explore || "Explore"} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Admin Section if authorized */}
          {userProfile?.role === "admin" && (
            <section className="admin-section">
              <AdminPanel />
            </section>
          )}
        </main>

        {/* Bottom Footer Status (Updated with class name for proper styling) */}
        <div className="dashboard-footer">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>{t.systemOnline || "System Online"} • {t.secureEnvironment || "Secure USAR Environment"}</span>
          </div>
          <div>{t.versionText || "v2.4.0-production"}</div>
        </div>
      </div>
    </div>
  );
}