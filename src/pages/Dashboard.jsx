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
import pastImg from "../assets/stories.jpg";
import sopImg from "../assets/sop.jpg";
import othersImg from "../assets/others.jpg";

import { 
  ShieldAlert, 
  Stethoscope, 
  Globe, 
  Users, 
  ArrowRight,
  Radio,
  BookOpen,
  CircleHelp
} from "lucide-react";

export default function Dashboard() {
  const { userProfile } = useAuth();
  const { locale } = useLocale();
  const t = translations[locale] || translations["en"];
  const navigate = useNavigate();

  const categoryCards = [
    {
      title: "",
      titleSi: "",
      subtitle: "OPERATIONS GUIDELINES & MODULES",
      subtitleSi: "මෙහෙයුම් මාර්ගෝපදේශ සහ මොඩියුල",
      description: "operational guidelines, search operations, rescue operations, and disaster response information.",
      descriptionSi: "ක්‍රියා පටිපාටි, මෙහෙයුම් මාර්ගෝපදේශ, සෙවුම් සහ ගලවා ගැනීමේ මෙහෙයුම් පිළිබඳ තොරතුරු වෙත ප්‍රවේශ වන්න.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-300" />,
      path: "/operational-guidelines",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: sopsImg
    },
    {
     
      titleSi: t.firstAidMedical,
      hideTitle: true,
      subtitle: "FIRST AID & MEDICAL",
      subtitleSi: "වෛද්‍ය ගලවාගැනීම්",
      description: "Essential medical rescue knowledge, patient assessment, treatment, handling, and emergency medical procedures.",
      descriptionSi: "වෛද්‍ය ගලවා ගැනීම, රෝගී ඇගයීම, ප්‍රතිකාර සහ හදිසි වෛද්‍ය ක්‍රියාමාර්ග පිළිබඳ දැනුම ලබා ගන්න.",
      icon: <Stethoscope className="w-6 h-6 text-blue-300" />,
      path: "/first-aid-medical",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: medicineImg
    },
    {
     
      titleSi: t.experiencesStories,
      hideTitle: true,
      subtitle: "LESSONS & CASES",
      subtitleSi: "අත්දැකීම් සහ සිද්ධි",
      description: "Explore real-world rescue experiences, operational challenges, success stories, and critical lessons learned.",
      descriptionSi: "සැබෑ ගලවා ගැනීමේ අත්දැකීම්, මෙහෙයුම් අභියෝග සහ වැදගත් පාඩම් ගවේෂණය කරන්න.",
      icon: <Users className="w-6 h-6 text-blue-300" />,
      path: "/experiences",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: pastImg
    },
    {
      
      titleSi: "",
      subtitle: "STANDARD OPERATING PROCEDUREs",
      subtitleSi: "සම්මත මෙහෙයුම් ක්‍රියාපටිපාටි (SOPs)",
      description: "Explore national disaster SOPs, hazard-specific response actions, DMC responsibilities, and stakeholder coordination across Before, During, and After disaster stages.",
      descriptionSi: "ජාතික ආපදා කළමනාකරණ SOPs, විවිධ ආපදා වර්ගවලට අදාළ ප්‍රතිචාර ක්‍රියාමාර්ග, ආපදාවකට පෙර, අතරතුර සහ පසුව ආපදා කළමනාකරණ මධ්‍යස්ථානයේ (DMC) වගකීම් සහ අදාළ පාර්ශ්වකරුවන් අතර සම්බන්ධීකරණ කටයුතු පිළිබඳව අධ්‍යයනය කරන්න.",
      icon: <BookOpen className="w-6 h-6 text-blue-300" />,
      path: "/sops",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: sopImg
    },
    {
     
      titleSi: t.others,
      hideTitle: true,
      subtitle: "OTHER RESOURCES",
      subtitleSi: " වෙනත් සම්පත්",
      description: "Access general INSARAG information, international coordination, training resources, and additional knowledge.",
      descriptionSi: "INSARAG තොරතුරු, ජාත්‍යන්තර සම්බන්ධීකරණය සහ පුහුණු සම්පත් වෙත ප්‍රවේශ වන්න.",
      icon: <Globe className="w-6 h-6 text-blue-300" />,
      path: "/others",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: othersImg
    },
    {
      title: "",
      titleSi: "",
      subtitle: "TEST YOUR KNOWLEDGE",
      subtitleSi: "ඔබේ දැනුම පරීක්ෂා කරන්න",
      description: "Training Quiz - Practice with questions from the operational modules and First Aid & Medical topics.",
      descriptionSi: "පුහුණු ප්‍රශ්නාවලිය - මෙහෙයුම් මොඩියුල සහ පළමු ප්‍රතිකාර හා වෛද්‍ය මාතෘකා ඇසුරින් ප්‍රශ්නවලට පිළිතුරු දෙන්න.",
      icon: <CircleHelp className="w-6 h-6 text-blue-300" />,
      path: "/quiz",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      bgImage: sopImg
    }
  ];

  return (
    <div className="app-layout dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="dashboard-main">
          
          {/* Hero Banner Section */}
          <div className="dashboard-banner">
            <div className="dashboard-banner-labels">
              <span className="dashboard-banner-badge">
                {locale === "si" ? "ශ්‍රී ලංකා USAR සහ හදිසි ප්‍රතිචාරය" : "Sri Lanka USAR & Emergency Response"}
              </span>
              
            </div>
            <h2>
              {locale === "si" ? "USAR දැනුම් එකතුව" : "USAR Knowledge Repository"}
            </h2>
            <p className="dashboard-description">
              {locale === "si"
                ? "නාගරික සෙවීම් සහ මුදා ගැනීමේ මෙහෙයුම් සඳහා හදිසි ප්‍රතිචාර දැනුම, මෙහෙයුම් මාර්ගෝපදේශ සහ මුදවා ගැනීමේ සම්පත් පිළිබඳ තොරතුරු ලබා ගන්න."
                : "Learn about emergency-response knowledge, operational guidelines, and rescue resources for urban search and rescue operations."}
            </p>
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
                        {locale === "si" ? cat.subtitleSi : cat.subtitle}
                      </span>
                      <div className="card-icon-wrapper">
                        {cat.icon}
                      </div>
                    </div>

                    {!cat.hideTitle && (
                      <h4>
                        {locale === "si" ? cat.titleSi : cat.title}
                      </h4>
                    )}
                    
                    <p>
                      {locale === "si" ? cat.descriptionSi : cat.description}
                    </p>
                  </div>

                  <div className="category-explore">
                    <ArrowRight className="w-4 h-4" />
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

        {/* Bottom Footer Status */}
        <div className="dashboard-footer">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>{t.systemOnline || "System Online"} | {t.secureEnvironment || "Secure USAR Environment"}</span>
          </div>
          <div>{t.versionText || "v2.4.0-production"}</div>
        </div>
      </div>
    </div>
  );
}