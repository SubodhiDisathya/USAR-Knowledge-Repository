import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import PageBackButton from "../components/PageBackButton";
import { ArrowLeft, ArrowRight, ShieldAlert, Cpu, FileText, ExternalLink } from "lucide-react";
import "./KnowledgeSection.css";

const trainingDocument = (fileId, titleEn, titleSi) => ({
  title: { en: titleEn, si: titleSi },
  url: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
  label: { en: "View Training Material", si: "පුහුණු ද්‍රව්‍ය බලන්න" }
});

const operationalModuleEnglishData = [
  {
    id: "module-1",
    number: 1,
    title: "Introduction to the First Responder Programme",
    icon: "🚨",
    sectors: [
      {
        id: "introduction-to-first-response",
        title: "Introduction to First Response",
        overview: "Introduction to Urban Search and Rescue (USAR), the role of first responders, and the importance of early response in saving lives after a disaster.",
        documents: [
          trainingDocument("1y_SIse7jrcVGKIMRAXQMJmaDcdU_xtAt", "FR-Presentation-1.1 – Introduction to First Response", "FR-Presentation-1.1 – ප්‍රථම ප්‍රතිචාරය පිළිබඳ හැඳින්වීම")
        ],
        details: [
          { heading: "Goals & Learning Outcomes", text: "Development of a shared understanding regarding the role of first responders and their importance in saving lives during the early phases of an event." },
          { heading: "Disaster Facts", text: "Natural disasters such as earthquakes can lead to a dramatic peak in deaths and injuries within the first 72 hours. A large proportion of surviving persons are rescued within the first 24 to 48 hours." },
          { heading: "Disaster Timeline", text: "The typical sequence ranges from self-rescue and help from bystanders to the arrival of first responders, followed by national and international assistance." },
          { heading: "Role of First Responders", text: "Rescue during the initial phase, assessing the extent of damage, requesting resources, and guiding the local community." }
        ]
      },
      {
        id: "national-disaster-response-capability",
        title: "National Disaster & Response Capability",
        overview: "Discussion of disasters that may affect the country, existing first-responder capabilities, response during the first 24 hours, and identified response gaps.",
        documents: [
          trainingDocument("1jS70Rjp3UqXAik4No7-dFzcA_BudrOyn", "FR-Presentation-1.2 – National Disaster & Response Capability", "FR-Presentation-1.2 – ජාතික ආපදා සහ ප්‍රතිචාර ධාරිතාව")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Participants develop a clear awareness of the rescue and response capacities available within their city, region, and country." },
          { heading: "Group Discussion" },
          { heading: "Question 1", text: "What types of disasters affect your country and what would the effects be?" },
          { heading: "Question 2", text: "What capacity does your country have to locally and nationally manage the first 24 hours of a major crisis?" },
          { heading: "Question 3", text: "Are there gaps in the current capacity and how could these be solved?" }
        ]
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "The Rescue Environment",
    icon: "🌍",
    sectors: [
      {
        id: "disaster-environment",
        title: "Disaster Environment",
        overview: "Introduction to the urban disaster environment, building and construction types, infrastructure, types of disasters, structural collapse patterns, and common hazards.",
        documents: [
          trainingDocument("1YqjOYPwstz5_FHjIWz2pcAOVK1tKBM3x", "FR-Presentation-2.1 – Disaster Environment", "FR-Presentation-2.1 – ආපදා පරිසරය")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Understand the consequences of disasters on the urban environment, identify main building types, and understand the basic types of collapse." },
          { heading: "Impact on the City", items: ["Deaths", "Injuries", "Infrastructure damage", "Disruption of public utility networks", "Economic loss"] },
          { heading: "Collapse Patterns", items: ["Lean-to", "Cantilever", "Pancake", "V-type", "A-frame / Tent"] }
        ]
      },
      {
        id: "overview-of-rescue-operations",
        title: "Overview of Rescue Operations",
        overview: "Introduction to the main stages of rescue operations: reconnaissance, search, and rescue, including how these activities are planned and carried out.",
        documents: [
          trainingDocument("1baQS_BV_BlT6fphN_vwyjfux7i39Rkyq", "FR-Presentation-2.2 – Overview of Rescue Operations", "FR-Presentation-2.2 – මුදාගැනීමේ මෙහෙයුම් පිළිබඳ දළ විශ්ලේෂණය")
        ],
        details: [
          { heading: "Aims", items: ["Save lives", "Reduce suffering", "Minimize damage", "Stabilize the situation", "Prepare the community for recovery"] },
          { heading: "Time Factor", text: "The survival rate can decrease significantly as time passes after a disaster." },
          {
            heading: "Sequence of Operations",
            steps: [
              { title: "Reconnaissance", text: "Assess the area and gather information." },
              { title: "Search", text: "Quickly locate victims and bring mobile people to safety." },
              { title: "Rescue", text: "Provide first aid and extricate victims from under debris." }
            ]
          }
        ]
      },
      {
        id: "reconnaissance-survey",
        title: "Reconnaissance & Survey",
        overview: "Collection and presentation of information about the affected area, including sectorisation, maps, photographs, observations, interviews, and situational awareness.",
        documents: [
          trainingDocument("16QX1BBGd81m6_Y99QxfymQAKZB3GuEz9", "FR-Presentation-2.3 – Reconnaissance & Survey", "FR-Presentation-2.3 – Reconnaissance සහ සමීක්ෂණය")
        ],
        details: [
          { heading: "Aims & Goals", text: "Gather information on victims, damage, and hazards, divide the region into sectors, and develop an action plan." },
          { heading: "Information Requirements", text: "Determine the number and condition of victims, infrastructure damage, and specific hazards." },
          { heading: "Sectorization", text: "Heavily affected areas are divided into sectors using geographical boundaries such as roads and rivers. Sectors can be identified using labels such as A, B, C, etc. to deploy resources effectively." }
        ]
      },
      {
        id: "reconnaissance-exercise",
        title: "Reconnaissance Exercise",
        overview: "Practical application of reconnaissance skills through area assessment, sectorisation, information gathering, mapping, photography, and reporting.",
        documents: [
          trainingDocument("1SgcMzZRbI7j8FTA0f99xNEcvjebuGFEe", "FR-Presentation-2.4 – Reconnaissance Exercise", "FR-Presentation-2.4 – Reconnaissance අභ්‍යාසය")
        ],
        details: [
          { heading: "Exercise Goals", text: "Practice information gathering in a realistic environment, combine notes and maps, and create an action plan based on the collected information." },
          { heading: "Procedure", items: ["Division into teams", "Assignment of areas", "Definition of safety rules", "Information gathering", "Mapping and documentation", "Debriefing", "Presentation of results"] }
        ]
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Scene Management",
    icon: "⚠️",
    sectors: [
      {
        id: "hazards-risk-scene-management",
        title: "Hazards, Risk & Scene Management",
        overview: "Identification of hazards and risks in the disaster environment and application of safety measures such as cordons, barriers, access control, safe areas, evacuation procedures, and site security.",
        documents: [
          trainingDocument("1tfgYOWgXQ5hjoNbVv_C5L7z3bPArSRnZ", "3.1a – Scene Management – Situational & Environmental Hazards", "3.1a – සිද්ධි ස්ථාන කළමනාකරණය – තත්ත්ව සහ පාරිසරික උපද්‍රව"),
          trainingDocument("1mKhN_4n9q7YSDzFUY129wQenjJy50cHx", "3.1b – Scene Management – Hazard Control & Site Management", "3.1b – සිද්ධි ස්ථාන කළමනාකරණය – උපද්‍රව පාලනය සහ ස්ථාන කළමනාකරණය")
        ],
        details: [
          { heading: "Main Hazard Categories", items: ["Damaged infrastructure", "Unstable structures", "Damaged utilities", "Fire, smoke, and gases", "Chemical hazards", "Environmental hazards such as weather and contaminated water"] },
          { heading: "Hazard Control", items: ["Personal protective equipment", "Access control", "Hazard marking", "Safety zones"] },
          { heading: "Distance Rule", text: "Any location closer to a damaged object than 1.5 times the structure's height is defined as a hazard zone." },
          { heading: "Lookouts", text: "Designate lookouts who can immediately signal an evacuation using short blasts from a whistle or horn." }
        ]
      }
    ]
  },
  {
    id: "module-4",
    number: 4,
    title: "Search Module",
    icon: "🔍",
    sectors: [
      {
        id: "surface-search",
        title: "Surface Search",
        overview: "Introduction to organised search operations, including hasty/initial searches and secondary/extensive searches to locate casualties in accessible areas and beneath debris.",
        documents: [
          trainingDocument("1F1B-WR5j8IHEj8F-0dlXZJRg85un8BEr", "FR-Presentation-4.1 – Surface Search", "FR-Presentation-4.1 – මතුපිට සෙවීම")
        ],
        details: [
          { heading: "Goals", text: "Employ structured search techniques to locate the most victims in the shortest time with minimal effort." },
          { heading: "Hasty Search", text: "Quickly and systematically move through an area with a team." },
          { heading: "Line and Hail / Circle and Hail", text: "Systematic search methods involving targeted calling and listening. Silence is essential during listening phases." },
          { heading: "Human Locations", text: "Victims may be found:", items: ["On the surface", "Lightly trapped", "In void spaces", "Basements", "Bathrooms", "Stairwells"] }
        ]
      },
      {
        id: "search-exercise",
        title: "Search Exercise",
        overview: "Practical application of primary/hasty and secondary/extensive search techniques, including searching for visible and sub-surface casualties.",
        documents: [
          trainingDocument("19iZEC4lGQwdgkS02lMBP4XZdOGvxYyYB", "FR-Presentation-4.2 – Search Exercise", "FR-Presentation-4.2 – Search අභ්‍යාසය")
        ],
        details: [
          { heading: "Exercise Goals", text: "Practice structured search techniques in a realistic environment." },
          { heading: "Activities", items: ["Primary / hasty search", "Secondary / extensive search", "Searching for visible casualties", "Searching for sub-surface casualties", "Calling and listening techniques", "Team coordination and reporting"] }
        ]
      }
    ]
  },
  {
    id: "module-5",
    number: 5,
    title: "Rescue Module",
    icon: "🦺",
    sectors: [
      {
        id: "practical-rescue-operations",
        title: "Practical Rescue Operations",
        overview: "Introduction to safe rescue operations, including the basic sequence of rescue activities, rescue equipment, surface rescue techniques, and safety considerations.",
        documents: [
          trainingDocument("1YPiE4sT5WsHm6sKS8nyJgdwllMREOYJ3", "FR-Presentation-5.1 – Practical Rescue Operations", "FR-Presentation-5.1 – ප්‍රායෝගික Rescue මෙහෙයුම්")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Understand the principles and practices of safe rescue operations and receive an overview of available tools and equipment." },
          { heading: "Basic Safety Rules", items: ["Look up and down before moving.", "Keep three points of contact.", "Listen for victims and hazards.", "Work in pairs or teams.", "Wear appropriate protective clothing.", "Follow instructions.", "Work quietly and methodically.", "Work according to a Plan of Action."] },
          { heading: "Introduction to Rescue Equipment", text: "Instructors introduce available rescue equipment and explain how to use each tool and its specific application." }
        ]
      },
      {
        id: "shoring-operations",
        title: "Shoring Operations",
        overview: "Techniques for reducing the risk of secondary collapse, including overhead hazard mitigation, safe-distance principles, and construction of a simple shore to support damaged structures.",
        documents: [
          trainingDocument("1ZcdKmMmgXiVo70_3BZ-Ov6I4xHlsSbet", "FR-Presentation-5.2 – Shoring Operations", "FR-Presentation-5.2 – Shoring මෙහෙයුම්")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Learn how to make overhead hazards safe and how to construct a simple shore." },
          {
            heading: "Preferred Options for Hazards",
            steps: [
              { title: "Avoid", text: "Put up barriers and warning signs." },
              { title: "Remove", text: "Pull debris down using ropes or appropriate machinery." },
              { title: "Secure", text: "Measure and assemble props or shores in a safe place and fit them under the load." }
            ]
          },
          { heading: "Key Guidelines", items: ["Consider secondary collapse potential.", "Follow the 1:1.5 rule for safe areas.", "Appoint lookouts.", "Maintain an evacuation plan."] }
        ]
      },
      {
        id: "lifting-moving-operations",
        title: "Lifting & Moving Operations",
        overview: "Safe methods for lifting and moving heavy debris during rescue operations. This includes assessing terrain, avoiding unnecessary movement, using gravity and terrain to assist movement, using levers, rollers, blocks and wedges, and safely supporting debris with cribbing.",
        documents: [
          trainingDocument("1YCSkMFWVaGB0YxW8oYUJEGpYEJY3rFhp", "FR-Presentation-5.3 – Lifting & Moving Operations", "FR-Presentation-5.3 – එසවීම සහ ගෙනයාමේ මෙහෙයුම්")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Learn how to safely lift and move heavy debris, understand terrain effects, and use safety precautions such as cribbing." },
          {
            heading: "Preferred Options",
            steps: [
              { title: "Avoid", text: "Avoid debris if it is unstable or movement is unnecessary." },
              { title: "Move", text: "Use gravity and terrain to assist movement where safe." },
              { title: "Lift", text: "Lift and support or secure debris using:" }
            ],
            items: ["Levers", "Blocks", "Wedges", "Rollers", "Crib systems"]
          }
        ]
      },
      {
        id: "cutting-breaking-operations",
        title: "Cutting & Breaking Operations",
        overview: "Safe methods for cutting or breaking debris found in collapsed structures. This includes assessing the wider impact on the debris pile, identifying weak points and hazards, securing the debris, and using appropriate tools and shoring techniques to safely complete cutting and breaking operations.",
        documents: [
          trainingDocument("1JCL7tyloDX3GQIwrqDbLk8sl3f5aFm3P", "FR-Presentation-5.4 – Cutting & Breaking Operations", "FR-Presentation-5.4 – කැපීම සහ බිඳ දැමීමේ මෙහෙයුම්")
        ],
        details: [
          { heading: "Learning Outcomes", text: "Learn how to safely cut or break through debris in a collapsed building and understand the wider impacts on the debris pile." },
          {
            heading: "Preferred Options",
            steps: [
              { title: "Avoid", text: "Avoid unstable debris where possible." },
              { title: "Move", text: "Move debris using gravity or terrain where safe." },
              { title: "Cut / Break", text: "Only cut or break when necessary by:" }
            ],
            items: ["Identifying weak points", "Identifying hazards", "Developing lines of weakness", "Securing the debris", "Using appropriate tools and shoring techniques"]
          }
        ]
      }
    ]
  },
  {
    id: "module-7",
    number: 7,
    title: "Consolidation Exercise",
    icon: "📋",
    sectors: [
      {
        id: "consolidation-exercise",
        title: "Consolidation Exercise",
        overview: "Practical exercise combining the knowledge and skills learned throughout the First Responder Programme, including scene assessment, search, rescue, patient assessment, treatment, packaging, and evacuation.",
        documents: [
          trainingDocument("1wOmwgqqSRj_1MubqQYw3I3GWnkmYfJ6p", "FR-Presentation-7.1 – Consolidation Exercise", "FR-Presentation-7.1 – සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය")
        ],
        details: [
          { heading: "Aim", text: "Provides an opportunity for participants to practice and develop skills and knowledge in a realistic environment." },
          { heading: "Exercise Brief Scenarios", text: "Simulates realistic learning scenarios requiring:", items: ["Scene assessment", "Search planning and techniques", "Rescue operations", "Patient assessment", "Patient treatment", "Patient packaging", "Evacuation"] },
          { heading: "Parameters", text: "Includes organisational structures, safety rules, and exercise constraints defined by trainers." }
        ]
      }
    ]
  }
];

const operationalModuleSinhala = {
  "module-1": {
    title: "ප්‍රථම ප්‍රතිචාරක වැඩසටහනට හැඳින්වීම",
    sectors: {
      "introduction-to-first-response": {
        title: "ප්‍රථම ප්‍රතිචාරය පිළිබඳ හැඳින්වීම",
        overview: "නාගරික සෙවීම් සහ මුදාගැනීම් (USAR), ප්‍රථම ප්‍රතිචාරකයන්ගේ කාර්යභාරය සහ ආපදාවකින් පසු ජීවිත බේරා ගැනීම සඳහා කඩිනම් ප්‍රතිචාරයේ වැදගත්කම පිළිබඳ හැඳින්වීම.",
        details: [
          { heading: "අරමුණු සහ ඉගෙනුම් ප්‍රතිඵල", text: "සිදුවීමක මුල් අදියරවලදී ජීවිත බේරා ගැනීම සඳහා ප්‍රථම ප්‍රතිචාරකයන්ගේ කාර්යභාරය සහ ඔවුන්ගේ වැදගත්කම පිළිබඳ පොදු අවබෝධයක් වර්ධනය කිරීම." },
          { heading: "ආපදා පිළිබඳ කරුණු", text: "භූමිකම්පා වැනි ස්වාභාවික ආපදා හේතුවෙන් පළමු පැය 72 තුළ මරණ සහ තුවාල සංඛ්‍යාව තියුනු ලෙස ඉහළ යා හැකිය. දිවි ගලවා ගන්නා පුද්ගලයන්ගෙන් විශාල ප්‍රමාණයක් පළමු පැය 24 සිට 48 දක්වා කාලය තුළ මුදාගනු ලැබේ." },
          { heading: "ආපදා කාලරේඛාව", text: "සාමාන්‍යයෙන් සිදුවීම් අනුපිළිවෙළ ආරම්භ වන්නේ ස්වයං-මුදාගැනීම සහ අවට සිටින පුද්ගලයන්ගේ සහායෙනි. ඉන්පසු ප්‍රථම ප්‍රතිචාරකයන් පැමිණෙන අතර, පසුව ජාතික සහ ජාත්‍යන්තර සහාය ලැබේ." },
          { heading: "ප්‍රථම ප්‍රතිචාරකයන්ගේ කාර්යභාරය", text: "මුල් අදියරේදී මුදාගැනීම සිදු කිරීම, හානියේ ප්‍රමාණය තක්සේරු කිරීම, අවශ්‍ය සම්පත් ඉල්ලා සිටීම සහ ප්‍රාදේශීය ප්‍රජාවට මඟපෙන්වීම." }
        ]
      },
      "national-disaster-response-capability": {
        title: "ජාතික ආපදා සහ ප්‍රතිචාර ධාරිතාව",
        overview: "රටට බලපෑ හැකි ආපදා, දැනට පවතින ප්‍රථම ප්‍රතිචාරක ධාරිතාවන්, පළමු පැය 24 තුළ ප්‍රතිචාර දැක්වීම සහ හඳුනාගත් ප්‍රතිචාර හිඩැස් පිළිබඳ සාකච්ඡාව.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "තම නගරය, කලාපය සහ රට තුළ පවතින මුදාගැනීමේ සහ ප්‍රතිචාර ධාරිතාවන් පිළිබඳ පැහැදිලි අවබෝධයක් සහ දැනුවත්භාවයක් සහභාගිවන්නන් තුළ වර්ධනය කිරීම." },
          { heading: "කණ්ඩායම් සාකච්ඡාව" },
          { heading: "ප්‍රශ්නය 1", text: "ඔබේ රටට බලපාන ආපදා වර්ග මොනවාද? ඒවායේ බලපෑම් මොනවා විය හැකිද?" },
          { heading: "ප්‍රශ්නය 2", text: "ප්‍රධාන අර්බුදයක පළමු පැය 24 තුළ ප්‍රාදේශීය සහ ජාතික මට්ටමින් කළමනාකරණය කිරීමට ඔබේ රටට ඇති ධාරිතාව කුමක්ද?" },
          { heading: "ප්‍රශ්නය 3", text: "වර්තමාන ධාරිතාවයේ හිඩැස් තිබේද? ඒවා විසඳිය හැක්කේ කෙසේද?" }
        ]
      }
    }
  },
  "module-2": {
    title: "මුදාගැනීමේ පරිසරය",
    sectors: {
      "disaster-environment": {
        title: "ආපදා පරිසරය",
        overview: "නාගරික ආපදා පරිසරය, ගොඩනැගිලි සහ ඉදිකිරීම් වර්ග, යටිතල පහසුකම්, ආපදා වර්ග, ව්‍යුහාත්මක කඩා වැටීම් රටා සහ පොදු උපද්‍රව පිළිබඳ හැඳින්වීම.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "නාගරික පරිසරයට ආපදාවලින් ඇතිවන ප්‍රතිවිපාක අවබෝධ කර ගැනීම, ප්‍රධාන ගොඩනැගිලි වර්ග හඳුනා ගැනීම සහ මූලික කඩා වැටීම් වර්ග තේරුම් ගැනීම." },
          { heading: "නගරයට ඇති බලපෑම", items: ["මරණ", "තුවාල", "යටිතල පහසුකම්වලට හානි", "පොදු උපයෝගිතා ජාලවලට බාධා", "ආර්ථික පාඩු"] },
          { heading: "කඩා වැටීම් රටා", items: ["එක් පැත්තකට ඇලවූ කඩා වැටීම (Lean-to)", "පිටතට නෙරා සිටින කොටසක් සහිත කඩා වැටීම (Cantilever)", "ස්ථර එක මත එක වැටීම (Pancake)", "V-හැඩැති කඩා වැටීම (V-type)", "A-රාමු / කූඩාරම් හැඩැති කඩා වැටීම (A-frame / Tent)"] }
        ]
      },
      "overview-of-rescue-operations": {
        title: "මුදාගැනීමේ මෙහෙයුම් පිළිබඳ දළ විශ්ලේෂණය",
        overview: "Reconnaissance (ප්‍රදේශ නිරීක්ෂණය), Search (සෙවීම) සහ Rescue (මුදාගැනීම) යන ප්‍රධාන අදියර සහ මෙම ක්‍රියාකාරකම් සැලසුම් කර ක්‍රියාත්මක කරන ආකාරය පිළිබඳ හැඳින්වීම.",
        details: [
          { heading: "අරමුණු", items: ["ජීවිත බේරා ගැනීම", "දුක් වේදනා අවම කිරීම", "හානි අවම කිරීම", "තත්ත්වය ස්ථාවර කිරීම", "ප්‍රජාව නැවත යථා තත්ත්වයට පත්වීමට සූදානම් කිරීම"] },
          { heading: "කාල සාධකය", text: "ආපදාවකින් පසු කාලය ගතවීමත් සමඟ දිවි ගලවා ගැනීමේ හැකියාව සැලකිය යුතු ලෙස අඩු විය හැකිය." },
          {
            heading: "මෙහෙයුම් අනුපිළිවෙළ",
            steps: [
              { title: "Reconnaissance (ප්‍රදේශ නිරීක්ෂණය)", text: "ප්‍රදේශය තක්සේරු කර තොරතුරු රැස් කිරීම." },
              { title: "Search (සෙවීම)", text: "විපතට පත්වූවන් ඉක්මනින් සොයාගෙන, තනිව ගමන් කළ හැකි පුද්ගලයන් ආරක්ෂිත ස්ථාන වෙත යොමු කිරීම." },
              { title: "Rescue (මුදාගැනීම)", text: "ප්‍රථමාධාර ලබා දී සුන්බුන් යට සිරවී සිටින පුද්ගලයන් මුදා ගැනීම." }
            ]
          }
        ]
      },
      "reconnaissance-survey": {
        title: "Reconnaissance සහ සමීක්ෂණය",
        overview: "බලපෑමට ලක් වූ ප්‍රදේශය පිළිබඳ තොරතුරු රැස් කිරීම සහ ඉදිරිපත් කිරීම. මෙයට කලාප වෙන් කිරීම, සිතියම්, ඡායාරූප, නිරීක්ෂණ, සම්මුඛ සාකච්ඡා සහ තත්ත්ව අවබෝධය ඇතුළත් වේ.",
        details: [
          { heading: "අරමුණු සහ ඉලක්ක", text: "විපතට පත්වූවන්, හානි සහ උපද්‍රව පිළිබඳ තොරතුරු රැස් කිරීම, ප්‍රදේශය කලාපවලට බෙදීම සහ ක්‍රියාකාරී සැලැස්මක් සකස් කිරීම." },
          { heading: "අවශ්‍ය තොරතුරු", text: "විපතට පත්වූවන්ගේ සංඛ්‍යාව සහ තත්ත්වය, යටිතල පහසුකම්වලට සිදුවූ හානි සහ විශේෂිත උපද්‍රව හඳුනා ගැනීම." },
          { heading: "කලාප වෙන් කිරීම (Sectorization)", text: "දැඩි ලෙස බලපෑමට ලක් වූ ප්‍රදේශ මාර්ග සහ ගංගා වැනි භූගෝලීය සීමා භාවිතයෙන් කලාපවලට බෙදනු ලැබේ. සම්පත් ඵලදායී ලෙස යෙදවීම සඳහා A, B, C වැනි අක්ෂරවලින් කලාප නම් කළ හැකිය." }
        ]
      },
      "reconnaissance-exercise": {
        title: "Reconnaissance අභ්‍යාසය",
        overview: "ප්‍රදේශ තක්සේරු කිරීම, කලාප වෙන් කිරීම, තොරතුරු රැස් කිරීම, සිතියම්ගත කිරීම, ඡායාරූප ගැනීම සහ වාර්තා කිරීම හරහා Reconnaissance කුසලතා ප්‍රායෝගිකව යෙදීම.",
        details: [
          { heading: "අභ්‍යාසයේ අරමුණු", text: "සැබෑ පරිසරයක තොරතුරු රැස් කිරීම පුහුණු කිරීම, සටහන් සහ සිතියම් ඒකාබද්ධ කිරීම සහ රැස් කළ තොරතුරු මත ක්‍රියාකාරී සැලැස්මක් සකස් කිරීම." },
          { heading: "ක්‍රියාපටිපාටිය", items: ["කණ්ඩායම්වලට බෙදීම", "ප්‍රදේශ පැවරීම", "ආරක්ෂක නීති නිර්වචනය කිරීම", "තොරතුරු රැස් කිරීම", "සිතියම්ගත කිරීම සහ ලේඛනගත කිරීම", "පසු-සාකච්ඡාව", "ප්‍රතිඵල ඉදිරිපත් කිරීම"] }
        ]
      }
    }
  },
  "module-3": {
    title: "සිද්ධි ස්ථාන කළමනාකරණය",
    sectors: {
      "hazards-risk-scene-management": {
        title: "උපද්‍රව, අවදානම් සහ සිද්ධි ස්ථාන කළමනාකරණය",
        overview: "ආපදා පරිසරයේ උපද්‍රව සහ අවදානම් හඳුනා ගැනීම සහ සීමා (cordons), බාධක, ප්‍රවේශ පාලනය, ආරක්ෂිත ප්‍රදේශ, ඉවත් කිරීමේ ක්‍රියාපටිපාටි සහ ස්ථාන ආරක්ෂාව වැනි ආරක්ෂක පියවර ක්‍රියාත්මක කිරීම.",
        details: [
          { heading: "ප්‍රධාන උපද්‍රව කාණ්ඩ", items: ["හානි වූ යටිතල පහසුකම්", "අස්ථාවර ව්‍යුහ", "හානි වූ උපයෝගිතා පද්ධති", "ගින්න, දුම සහ වායු", "රසායනික උපද්‍රව", "කාලගුණය සහ දූෂිත ජලය වැනි පාරිසරික උපද්‍රව"] },
          { heading: "උපද්‍රව පාලනය", items: ["පුද්ගලික ආරක්ෂක උපකරණ (PPE)", "ප්‍රවේශ පාලනය", "උපද්‍රව සලකුණු කිරීම", "ආරක්ෂක කලාප"] },
          { heading: "දුර පිළිබඳ නීතිය", text: "හානි වූ වස්තුවක සිට එම ව්‍යුහයේ උස මෙන් 1.5 ගුණයක දුරකට වඩා සමීප ඕනෑම ස්ථානයක් උපද්‍රව කලාපයක් ලෙස සැලකේ." },
          { heading: "නිරීක්ෂකයන්", text: "විස්ල් හෝ නළාවකින් කෙටි සංඥා නාද ලබාදී වහාම ඉවත් වීමේ සංඥාව දිය හැකි නිරීක්ෂකයන් පත් කරන්න." }
        ]
      }
    }
  },
  "module-4": {
    title: "Search මොඩියුලය",
    sectors: {
      "surface-search": {
        title: "මතුපිට සෙවීම",
        overview: "ප්‍රවේශ විය හැකි ප්‍රදේශවල සහ සුන්බුන් යට විපතට පත්වූවන් සොයා ගැනීම සඳහා හදිසි/මුල් සෙවීම් සහ ද්විතීයික/පුළුල් සෙවීම් ඇතුළු සංවිධානාත්මක Search මෙහෙයුම් පිළිබඳ හැඳින්වීම.",
        details: [
          { heading: "අරමුණු", text: "අවම උත්සාහයකින් කෙටිම කාලය තුළ වැඩිම විපතට පත්වූවන් සොයා ගැනීමට ක්‍රමානුකූල සෙවීම් ක්‍රම භාවිත කිරීම." },
          { heading: "හදිසි සෙවීම (Hasty Search)", text: "කණ්ඩායමක් සමඟ ප්‍රදේශයක් හරහා ඉක්මනින් සහ ක්‍රමානුකූලව ගමන් කර සෙවීම." },
          { heading: "පේළිගත හා හඬ කැඳවීම / වටා ගොස් හඬ කැඳවීම", text: "ඉලක්කගත හඬ කැඳවීම් සහ සවන්දීම ඇතුළත් ක්‍රමානුකූල සෙවීම් ක්‍රම. සවන්දෙන අවස්ථාවලදී නිශ්ශබ්දතාව අත්‍යවශ්‍යය." },
          { heading: "විපතට පත්වූවන් සිටිය හැකි ස්ථාන", text: "විපතට පත්වූවන් පහත ස්ථානවල සිටිය හැකිය:", items: ["මතුපිට", "සුළු වශයෙන් සිරවූ ස්ථාන", "හිස් අවකාශ", "බිම් මහල්", "නාන කාමර", "පඩිපෙළ"] }
        ]
      },
      "search-exercise": {
        title: "Search අභ්‍යාසය",
        overview: "පෙනෙන සහ මතුපිටට යටින් සිටින විපතට පත්වූවන් සෙවීම ඇතුළුව, ප්‍රාථමික/හදිසි සහ ද්විතීයික/පුළුල් සෙවීම් ක්‍රම ප්‍රායෝගිකව යෙදීම.",
        details: [
          { heading: "අභ්‍යාසයේ අරමුණු", text: "සැබෑ පරිසරයක ක්‍රමානුකූල සෙවීම් ක්‍රම පුහුණු කිරීම." },
          { heading: "ක්‍රියාකාරකම්", items: ["ප්‍රාථමික / හදිසි සෙවීම", "ද්විතීයික / පුළුල් සෙවීම", "පෙනෙන විපතට පත්වූවන් සෙවීම", "මතුපිටට යටින් සිටින විපතට පත්වූවන් සෙවීම", "හඬ කැඳවීම සහ සවන්දීමේ ක්‍රම", "කණ්ඩායම් සම්බන්ධීකරණය සහ වාර්තා කිරීම"] }
        ]
      }
    }
  },
  "module-5": {
    title: "Rescue මොඩියුලය",
    sectors: {
      "practical-rescue-operations": {
        title: "ප්‍රායෝගික Rescue මෙහෙයුම්",
        overview: "Rescue ක්‍රියාකාරකම්වල මූලික අනුපිළිවෙළ, Rescue උපකරණ, මතුපිට Rescue ක්‍රම සහ ආරක්ෂක කරුණු ඇතුළුව, ආරක්ෂිත මුදාගැනීමේ මෙහෙයුම් පිළිබඳ හැඳින්වීම.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "ආරක්ෂිත Rescue මෙහෙයුම්වල මූලධර්ම සහ භාවිතයන් අවබෝධ කර ගැනීම සහ පවතින මෙවලම් හා උපකරණ පිළිබඳ දළ විශ්ලේෂණයක් ලබා ගැනීම." },
          { heading: "මූලික ආරක්ෂක නීති", items: ["ගමන් කිරීමට පෙර ඉහළ සහ පහළ පරීක්ෂා කරන්න.", "සම්බන්ධතා ස්ථාන තුනක් පවත්වා ගන්න.", "විපතට පත්වූවන්ගේ සහ උපද්‍රවවල ශබ්දවලට සවන් දෙන්න.", "දෙදෙනෙකු හෝ කණ්ඩායමක් ලෙස වැඩ කරන්න.", "සුදුසු ආරක්ෂක ඇඳුම් පළඳින්න.", "උපදෙස් අනුගමනය කරන්න.", "නිශ්ශබ්දව සහ ක්‍රමානුකූලව වැඩ කරන්න.", "ක්‍රියාකාරී සැලැස්මට (Plan of Action) අනුව වැඩ කරන්න."] },
          { heading: "Rescue උපකරණ පිළිබඳ හැඳින්වීම", text: "උපදේශකයන් පවතින Rescue උපකරණ හඳුන්වා දී, එක් එක් මෙවලම භාවිත කරන ආකාරය සහ එහි විශේෂිත යෙදුම පැහැදිලි කරයි." }
        ]
      },
      "shoring-operations": {
        title: "Shoring මෙහෙයුම්",
        overview: "ද්විතීයික කඩා වැටීමේ අවදානම අඩු කිරීමේ ක්‍රම. මෙයට ඉහළින් ඇති උපද්‍රව අවම කිරීම, ආරක්ෂිත දුර පිළිබඳ මූලධර්ම සහ හානි වූ ව්‍යුහයකට ආධාර කිරීම සඳහා සරල Shoring එකක් ඉදිකිරීම ඇතුළත් වේ.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "ඉහළින් ඇති උපද්‍රව ආරක්ෂිත කිරීම සහ සරල Shoring ආධාරකයක් ඉදිකිරීම ඉගෙන ගැනීම." },
          {
            heading: "උපද්‍රව සඳහා වඩාත් සුදුසු විකල්ප",
            steps: [
              { title: "වළකින්න", text: "බාධක සහ අනතුරු ඇඟවීමේ සලකුණු යොදන්න." },
              { title: "ඉවත් කරන්න", text: "කඹ හෝ සුදුසු යන්ත්‍රෝපකරණ භාවිතයෙන් සුන්බුන් පහළට ඇද ඉවත් කරන්න." },
              { title: "ආරක්ෂිත කරන්න", text: "ආධාරක හෝ Shoring ආරක්ෂිත ස්ථානයක මැන සකස් කර, බරට යටින් සවිකරන්න." }
            ]
          },
          { heading: "ප්‍රධාන මාර්ගෝපදේශ", items: ["ද්විතීයික කඩා වැටීමේ හැකියාව සලකා බලන්න.", "ආරක්ෂිත ප්‍රදේශ සඳහා 1:1.5 නීතිය අනුගමනය කරන්න.", "නිරීක්ෂකයන් පත් කරන්න.", "ඉවත් කිරීමේ සැලැස්මක් පවත්වා ගන්න."] }
        ]
      },
      "lifting-moving-operations": {
        title: "එසවීම සහ ගෙනයාමේ මෙහෙයුම්",
        overview: "Rescue මෙහෙයුම් අතරතුර බර සුන්බුන් ආරක්ෂිතව එසවීම සහ ගෙනයාමේ ක්‍රම. භූමිය තක්සේරු කිරීම, අනවශ්‍ය චලනය වළක්වා ගැනීම, චලනයට ගුරුත්වය සහ භූමිය උපකාරී කරගැනීම, ලීවර, රෝලර්, කුට්ටි සහ කුඤ්ඤ භාවිත කිරීම සහ Cribbing මඟින් සුන්බුන් ආරක්ෂිතව රඳවා තැබීම මෙයට ඇතුළත් වේ.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "බර සුන්බුන් ආරක්ෂිතව එසවීම සහ ගෙනයාම, භූමියේ බලපෑම අවබෝධ කරගැනීම සහ Cribbing වැනි ආරක්ෂක පියවර භාවිත කිරීම ඉගෙන ගැනීම." },
          {
            heading: "වඩාත් සුදුසු විකල්ප",
            steps: [
              { title: "වළකින්න", text: "සුන්බුන් අස්ථාවර නම් හෝ චලනය කිරීම අනවශ්‍ය නම් එයින් වළකින්න." },
              { title: "ගෙනයන්න", text: "ආරක්ෂිත නම් චලනයට ගුරුත්වය සහ භූමිය උපකාරී කරගන්න." },
              { title: "ඔසවන්න", text: "පහත දෑ භාවිතයෙන් සුන්බුන් ඔසවා ආධාර කරන්න හෝ ආරක්ෂිතව රඳවා තබන්න:" }
            ],
            items: ["ලීවර", "කුට්ටි", "කුඤ්ඤ", "රෝලර්", "Crib පද්ධති"]
          }
        ]
      },
      "cutting-breaking-operations": {
        title: "කැපීම සහ බිඳ දැමීමේ මෙහෙයුම්",
        overview: "කඩා වැටුණු ව්‍යුහවල සුන්බුන් කැපීම හෝ බිඳ දැමීම සඳහා ආරක්ෂිත ක්‍රම. සුන්බුන් ගොඩට ඇති පුළුල් බලපෑම තක්සේරු කිරීම, දුර්වල ස්ථාන සහ උපද්‍රව හඳුනා ගැනීම, සුන්බුන් ආරක්ෂිත කිරීම සහ කැපීම හා බිඳ දැමීම ආරක්ෂිතව සිදු කිරීමට සුදුසු මෙවලම් සහ Shoring ක්‍රම භාවිත කිරීම මෙයට ඇතුළත් වේ.",
        details: [
          { heading: "ඉගෙනුම් ප්‍රතිඵල", text: "කඩා වැටුණු ගොඩනැගිල්ලක සුන්බුන් ආරක්ෂිතව කැපීම හෝ බිඳ දැමීම සහ සුන්බුන් ගොඩට ඇති පුළුල් බලපෑම් අවබෝධ කරගැනීම." },
          {
            heading: "වඩාත් සුදුසු විකල්ප",
            steps: [
              { title: "වළකින්න", text: "හැකි සෑම විටම අස්ථාවර සුන්බුන්වලින් වළකින්න." },
              { title: "ගෙනයන්න", text: "ආරක්ෂිත නම් ගුරුත්වය හෝ භූමිය භාවිතයෙන් සුන්බුන් ගෙනයන්න." },
              { title: "කපන්න / බිඳ දමන්න", text: "අවශ්‍ය වූ විට පමණක් පහත පියවර අනුගමනය කරමින් කපන්න හෝ බිඳ දමන්න:" }
            ],
            items: ["දුර්වල ස්ථාන හඳුනා ගැනීම", "උපද්‍රව හඳුනා ගැනීම", "දුර්වලතා රේඛා සකස් කිරීම", "සුන්බුන් ආරක්ෂිත කිරීම", "සුදුසු මෙවලම් සහ Shoring ක්‍රම භාවිත කිරීම"]
          }
        ]
      }
    }
  },
  "module-7": {
    title: "සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    sectors: {
      "consolidation-exercise": {
        title: "සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
        overview: "ප්‍රථම ප්‍රතිචාරක වැඩසටහන පුරා ඉගෙනගත් දැනුම සහ කුසලතා ඒකාබද්ධ කරන ප්‍රායෝගික අභ්‍යාසයකි. මෙයට සිද්ධි ස්ථාන තක්සේරුව, සෙවීම, මුදාගැනීම, රෝගී තක්සේරුව, ප්‍රතිකාර, ඇසුරුම් කිරීම සහ ඉවත් කිරීම ඇතුළත් වේ.",
        details: [
          { heading: "අරමුණ", text: "සැබෑ පරිසරයක කුසලතා සහ දැනුම පුහුණු කිරීමට සහ වැඩිදියුණු කිරීමට සහභාගිවන්නන්ට අවස්ථාවක් ලබා දීම." },
          { heading: "අභ්‍යාස අවස්ථා විස්තරය", text: "පහත දෑ අවශ්‍ය වන සැබෑ ඉගෙනුම් අවස්ථා අනුකරණය කිරීම:", items: ["සිද්ධි ස්ථාන තක්සේරුව", "සෙවීම් සැලසුම් කිරීම සහ ක්‍රම", "Rescue මෙහෙයුම්", "රෝගී තක්සේරුව", "රෝගී ප්‍රතිකාර", "රෝගී ඇසුරුම් කිරීම", "ඉවත් කිරීම"] },
          { heading: "අභ්‍යාස සීමා සහ කොන්දේසි", text: "පුහුණුකරුවන් විසින් නිර්වචනය කරන සංවිධාන ව්‍යුහ, ආරක්ෂක නීති සහ අභ්‍යාස සීමා මෙයට ඇතුළත් වේ." }
        ]
      }
    }
  }
};

const operationalModules = operationalModuleEnglishData.map((module) => {
  const moduleSinhala = operationalModuleSinhala[module.id];
  return {
    ...module,
    title: { en: module.title, si: moduleSinhala.title },
    sectors: module.sectors.map((sector) => {
      const sectorSinhala = moduleSinhala.sectors[sector.id];
      return {
        ...sector,
        title: { en: sector.title, si: sectorSinhala.title },
        overview: { en: sector.overview, si: sectorSinhala.overview },
        details: { en: sector.details, si: sectorSinhala.details }
      };
    })
  };
});

const sectionContent = {
  operational: {
    kicker: "OPERATIONAL PROTOCOLS",
    title: "INSARAG Operational Guidelines & Modules",
    sinhalaTitle: "මෙහෙයුම් මාර්ගෝපදේශ සහ ප්‍රමිතිගත ක්‍රියා පටිපාටි",
    description: "Access step-by-step procedures and important operational knowledge for Urban Search and Rescue operations.",
    sinhalaDescription: "නාගරික සෙවුම් සහ ගලවා ගැනීමේ මෙහෙයුම් සඳහා පියවරෙන් පියවර ක්‍රියා පටිපාටි සහ වැදගත් මෙහෙයුම් දැනුම ලබා ගන්න.",
  },
  medical: {
    kicker: "MEDICAL RESCUE",
    title: "First Aid & Medical",
    sinhalaTitle: "පළමු ප්‍රතිකාර සහ වෛද්‍ය ප්‍රතිචාර",
    description: "Access essential medical rescue knowledge, patient assessment, treatment, handling, and emergency medical procedures.",
    sinhalaDescription: "අත්‍යවශ්‍ය ප්‍රථමාධාර සහ වෛද්‍ය ප්‍රතිචාර, රෝගී ඇගයීම, ප්‍රතිකාර, රෝගීන් හැසිරවීම සහ හදිසි වෛද්‍ය ක්‍රියා පටිපාටි පිළිබඳ දැනුම ලබා ගන්න.",
    cards: [
      { slug: "basic-medical-rescue", title: "Basic Medical Rescue", sinhalaSubtitle: "ප්‍රථම වෛද්‍ය ප්‍රතිචාරය", desc: "Learn the basic principles of providing medical assistance during an emergency.", sinhalaDesc: "හදිසි අවස්ථාවකදී වෛද්‍ය ආධාර සැපයීමේ මූලික ප්‍රතිපත්ති ඉගෙන ගන්න.", icon: "🩺" },
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
  }
};

export default function KnowledgeSection({ section }) {
  const { locale, setLocale } = useLocale();
  const content = sectionContent[section];
  const [selectedModuleId, setSelectedModuleId] = React.useState(null);
  const [selectedSectorId, setSelectedSectorId] = React.useState(null);
  const [selectedSopSection, setSelectedSopSection] = React.useState(null);
  const operationalLanguage = locale === "si" ? "si" : "en";
  const selectedModule = operationalModules.find((module) => module.id === selectedModuleId);
  const selectedSector = selectedModule?.sectors.find((sector) => sector.id === selectedSectorId);
  const isSinhala = operationalLanguage === "si";

  const operationalTitle = selectedModule
    ? `${isSinhala ? "මොඩියුලය" : "Module"} ${selectedModule.number}: ${selectedModule.title[operationalLanguage]}`
    : isSinhala ? "INSARAG මෙහෙයුම් මාර්ගෝපදේශ සහ මොඩියුල" : content?.title;

  const goBackInOperationalGuidelines = () => {
    if (selectedSectorId) {
      setSelectedSectorId(null);
    } else {
      setSelectedModuleId(null);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main
          className={`knowledge-hub-container${section === "operational" && isSinhala ? " operational-sinhala" : ""}`}
          lang={section === "operational" ? operationalLanguage : undefined}
        >
          {(section !== "operational" || !selectedModule) && <PageBackButton />}
          
          {section === "sops" ? (
            <div className="sop-overview-container" style={{ color: "#f8fafc" }}>
              <div className="knowledge-hub-hero">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  {locale === "si" ? "ජාතික මට්ටමේ ආපදා කළමනාකරණ ක්‍රියාපටිපාටි" : "NATIONAL DISASTER MANAGEMENT PROCEDURES"}
                </div>
                <h1 className="hero-title">
                  {locale === "si" ? "ශ්‍රී ලංකාවේ ජාතික මට්ටමේ ආපදා කළමනාකරණ SOP" : "National-Level Disaster Management SOPs – Sri Lanka"}
                </h1>
                <p className="hero-description" style={{ margin: 0 }}>
                  {locale === "si"
                    ? "ශ්‍රී ලංකාවේ ඒකාබද්ධ නාගරික සෙවීම් සහ මුදාගැනීම් (IU-SAR) කණ්ඩායම සඳහා වන දැනුම සහ මෙහෙයුම් තොරතුරු මධ්‍යගත කරන ද්වාරය."
                    : "A centralized portal for Integrated Urban Search and Rescue (IU-SAR) operational information and knowledge in Sri Lanka."}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {selectedSopSection ? (
                  <>
                    <button
                      type="button"
                      className="operational-back-button"
                      onClick={() => setSelectedSopSection(null)}
                    >
                      <ArrowLeft size={16} />
                      {locale === "si" ? "මාතෘකා දෙක වෙත ආපසු" : "Back to topics"}
                    </button>
                    <h2 className="operational-sector-title">
                      {selectedSopSection === "non-technical"
                        ? locale === "si" ? "IU-SAR මෙහෙයුම් සහ දැනුම් කළමනාකරණ ද්වාරය" : "Sri Lanka Integrated USAR Operations & Knowledge Management Portal"
                        : locale === "si" ? "ජාතික මට්ටමේ ආපදා කළමනාකරණ SOP" : "National-Level Disaster Management SOPs"}
                    </h2>
                  </>
                ) : (
                  <div className="knowledge-cards-grid">
                    <button
                      type="button"
                      className="knowledge-card-item operational-card-button"
                      onClick={() => setSelectedSopSection("non-technical")}
                    >
                      <div className="card-header-row">
                        <div className="card-icon-wrapper"><ShieldAlert size={22} /></div>
                        <span className="card-action-indicator"><ArrowRight size={16} /></span>
                      </div>
                      <div className="card-body-content">
                        <h3 className="card-item-title">
                          {locale === "si" ? "IU-SAR මෙහෙයුම් සහ දැනුම් කළමනාකරණ ද්වාරය" : "Sri Lanka Integrated USAR Operations & Knowledge Management Portal"}
                        </h3>
                        <p>{locale === "si" ? "ව්‍යාපෘති දළ විශ්ලේෂණය, අරමුණු සහ වෙබ් අඩවියේ ප්‍රධාන අංශ." : "Project overview, objectives, and the main sections of the portal."}</p>
                      </div>
                      <div className="card-footer-link">
                        <span>{locale === "si" ? "විස්තර බලන්න" : "View overview"}</span>
                        <ArrowRight size={14} style={{ marginLeft: "6px" }} />
                      </div>
                    </button>
                    <button
                      type="button"
                      className="knowledge-card-item operational-card-button"
                      onClick={() => setSelectedSopSection("technical")}
                    >
                      <div className="card-header-row">
                        <div className="card-icon-wrapper"><Cpu size={22} /></div>
                        <span className="card-action-indicator"><ArrowRight size={16} /></span>
                      </div>
                      <div className="card-body-content">
                        <h3 className="card-item-title">
                          {locale === "si" ? "ජාතික මට්ටමේ ආපදා කළමනාකරණ SOP" : "National-Level Disaster Management SOPs"}
                        </h3>
                        <p>{locale === "si" ? "ආපදා වර්ග, ආපදා අදියර අනුව DMC වගකීම් සහ අදාළ පාර්ශ්වකරුවන්." : "Disaster categories, DMC responsibilities across disaster stages, and key stakeholders."}</p>
                      </div>
                      <div className="card-footer-link">
                        <span>{locale === "si" ? "විස්තර බලන්න" : "View overview"}</span>
                        <ArrowRight size={14} style={{ marginLeft: "6px" }} />
                      </div>
                    </button>
                  </div>
                )}

                {selectedSopSection === "non-technical" && (
                  <div className="operational-sector-overview">
                    <h2>{locale === "si" ? "ව්‍යාපෘති දළ විශ්ලේෂණය" : "Project Overview"}</h2>
                    <p>
                      {locale === "si"
                        ? "ශ්‍රී ලංකාවේ ඒකාබද්ධ නාගරික සෙවීම් සහ මුදාගැනීම් (IU-SAR) කණ්ඩායමේ සම්මත මෙහෙයුම් ක්‍රියාපටිපාටි (SOP) සංවිධානය කර ඒවාට පහසුවෙන් ප්‍රවේශ වීමට නිර්මාණය කළ මධ්‍යගත වෙබ් ද්වාරයකි. සක්‍රීය කිරීම, යෙදවීම, මෙහෙයුම් ක්‍රියාපටිපාටි, ආයතනික සම්බන්ධීකරණය, කණ්ඩායම් සංයුතිය, උපකරණ, ආරක්ෂාව, සිද්ධි වාර්තාකරණය සහ පුහුණු අවශ්‍යතා පිළිබඳ තොරතුරු මෙහි ව්‍යුහගතව සපයයි."
                        : "A centralized web-based portal designed to organize and provide access to the Integrated Urban Search and Rescue (IU-SAR) Team SOP in Sri Lanka. It structures information about USAR activation, deployment, operational procedures, agency coordination, team composition, equipment, safety, incident reporting, and training requirements."}
                    </p>

                    <div className="detail-section-heading operational-detailed-heading">
                      <span className="detail-section-line" />
                      <h2>{locale === "si" ? "ප්‍රධාන අරමුණු" : "Main Objectives"}</h2>
                    </div>
                    <ul>
                      {(locale === "si"
                        ? [
                            "USAR මෙහෙයුම් තොරතුරු මධ්‍යගත කිරීම.",
                            "සම්මත මෙහෙයුම් ක්‍රියාපටිපාටි (SOP) වෙත ප්‍රවේශය වැඩිදියුණු කිරීම.",
                            "ආයතන අතර දැනුම හුවමාරුවට සහාය වීම.",
                            "සිද්ධි වාර්තා සහ මෙහෙයුම් වාර්තා සංවිධානය කිරීම.",
                            "ආරක්ෂාව සහ පුහුණු මාර්ගෝපදේශ වෙත ප්‍රවේශය සැපයීම."
                          ]
                        : [
                            "Centralize USAR operational information.",
                            "Improve access to Standard Operating Procedures.",
                            "Support inter-agency knowledge sharing.",
                            "Organize incident reports and operational records.",
                            "Provide access to safety and training guidelines."
                          ]).map((objective) => <li key={objective}>{objective}</li>)}
                    </ul>

                    <div className="detail-section-heading operational-detailed-heading">
                      <span className="detail-section-line" />
                      <h2>{locale === "si" ? "ප්‍රධාන වෙබ් අඩවි අංශ" : "Main Website Sections"}</h2>
                    </div>
                    <ol>
                      {(locale === "si"
                        ? [
                            "උපකරණ පුවරුව",
                            "SOP පුස්තකාලය",
                            "සක්‍රීය කිරීම සහ යෙදවීම",
                            "USAR මෙහෙයුම්",
                            "ආයතනික සම්බන්ධීකරණය",
                            "කණ්ඩායම් සංයුතිය",
                            "උපකරණ සහ සැපයුම්",
                            "ආරක්ෂාව සහ වෛද්‍ය සේවා",
                            "සිද්ධි වාර්තා",
                            "පුහුණුව සහ අභ්‍යාස"
                          ]
                        : [
                            "Dashboard",
                            "SOP Library",
                            "Activation & Deployment",
                            "USAR Operations",
                            "Agency Coordination",
                            "Team Composition",
                            "Equipment & Logistics",
                            "Safety & Medical",
                            "Incident Reports",
                            "Training & Exercises"
                          ]).map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>
                )}

                {selectedSopSection === "technical" && (
                  <div className="operational-sector-overview">
                    <h2>{locale === "si" ? "ආපදා කාණ්ඩ" : "Main Disaster Categories Covered"}</h2>
                    <p>
                      {locale === "si"
                        ? "ජාතික මට්ටමේ විවිධ ආපදා කළමනාකරණය සඳහා DMC හි කාර්යභාරය මෙම ක්‍රියාපටිපාටි මඟින් විස්තර කෙරේ."
                        : "The document describes DMC procedures for managing a range of disaster types at the national level."}
                    </p>
                    <ol>
                      {(locale === "si"
                        ? [
                            "ගුවන් අනතුරු සහ ගුවන් ප්‍රහාර",
                            "රසායනික අනතුරු",
                            "සිවිල් හෝ අභ්‍යන්තර ගැටුම්",
                            "වෙරළ ඛාදනය",
                            "සුළි කුණාටු",
                            "වේලි කැඩීම්",
                            "නියඟ",
                            "භූමිකම්පා",
                            "වසංගත",
                            "පිපිරීම්",
                            "ගිනි සහ වන ගිනි",
                            "ගංවතුර",
                            "කාර්මික ආපදා",
                            "නායයෑම්",
                            "අකුණු සහ ගිගුරුම් සහිත වැසි",
                            "මිනිසා විසින් ඇති කරන ආපදා",
                            "සාගරික අනතුරු",
                            "න්‍යෂ්ටික සහ විකිරණ අනතුරු",
                            "තෙල් කාන්දුවීම්",
                            "සුනාමි"
                          ]
                        : [
                            "Air hazards and air raids",
                            "Chemical accidents",
                            "Civil or internal strife",
                            "Coastal erosion",
                            "Cyclones",
                            "Dam breaches",
                            "Droughts",
                            "Earthquakes",
                            "Epidemics",
                            "Explosions",
                            "Fires and forest fires",
                            "Floods",
                            "Industrial disasters",
                            "Landslides",
                            "Lightning and thunderstorms",
                            "Manmade disasters",
                            "Maritime hazards",
                            "Nuclear and radiological hazards",
                            "Oil spills",
                            "Tsunamis"
                          ]).map((category) => <li key={category}>{category}</li>)}
                    </ol>

                    <div className="detail-section-heading operational-detailed-heading">
                      <span className="detail-section-line" />
                      <h2>{locale === "si" ? "ආපදා අදියර අනුව DMC වගකීම්" : "DMC Responsibilities by Disaster Stage"}</h2>
                    </div>
                    <section className="operational-sector-detail">
                      <h3>{locale === "si" ? "ආපදාවට පෙර" : "Before"}</h3>
                      <p>
                        {locale === "si"
                          ? "ආපදා අනතුරු ඇඟවීම් ලබාගෙන තහවුරු කිරීම, තොරතුරු රැස් කිරීම, අවදානම් නිරීක්ෂණය කිරීම, අදාළ බලධාරීන් දැනුවත් කිරීම සහ අවදානමට ලක්විය හැකි ප්‍රජාවන්ට අනතුරු ඇඟවීම් බෙදාහැරීම."
                          : "Receive and verify disaster warnings, collect information, monitor risks, inform relevant authorities, and disseminate warnings to vulnerable communities."}
                      </p>
                    </section>
                    <section className="operational-sector-detail">
                      <h3>{locale === "si" ? "ආපදාව අතරතුර" : "During"}</h3>
                      <p>
                        {locale === "si"
                          ? "අදාළ ආයතන සමඟ සම්බන්ධීකරණය, ආපදා තත්ත්වය නිරීක්ෂණය, තත්ත්ව වාර්තා රැස් කිරීම, සෙවීම් සහ මුදාගැනීමේ මෙහෙයුම් සම්බන්ධීකරණය සහ හදිසි සම්පත් යෙදවීම."
                          : "Coordinate with relevant agencies, monitor the disaster situation, collect situation reports, coordinate search and rescue operations, and mobilize emergency resources."}
                      </p>
                    </section>
                    <section className="operational-sector-detail">
                      <h3>{locale === "si" ? "ආපදාවෙන් පසු" : "After"}</h3>
                      <p>
                        {locale === "si"
                          ? "ප්‍රකෘතිමත් වීමේ තත්ත්වය නිරීක්ෂණය, සහන බෙදාහැරීම සම්බන්ධීකරණය, හානි සහ පාඩු ඇගයීම්වලට සහාය වීම, පුනරුත්ථාපන කටයුතු සම්බන්ධීකරණය සහ පාර්ශ්වකරුවන් වෙත යාවත්කාලීන තොරතුරු සන්නිවේදනය."
                          : "Monitor recovery, coordinate relief distribution, support damage and loss assessments, coordinate rehabilitation activities, and communicate updates to stakeholders."}
                      </p>
                    </section>

                    <div className="detail-section-heading operational-detailed-heading">
                      <span className="detail-section-line" />
                      <h2>{locale === "si" ? "ප්‍රධාන ආයතන සහ පාර්ශ්වකරුවන්" : "Key Organizations and Stakeholders"}</h2>
                    </div>
                    <ul>
                      {(locale === "si"
                        ? [
                            "ආපදා කළමනාකරණ මධ්‍යස්ථානය (DMC)",
                            "දිස්ත්‍රික් ලේකම්වරු",
                            "දිස්ත්‍රික් ආපදා කළමනාකරණ සම්බන්ධීකරණ ඒකක (DDMCU)",
                            "ත්‍රිවිධ හමුදාව සහ පොලිසිය",
                            "රාජ්‍ය ආයතන",
                            "රාජ්‍ය නොවන සහ ජාත්‍යන්තර රාජ්‍ය නොවන සංවිධාන (NGO/INGO)",
                            "එක්සත් ජාතීන්ගේ සංවිධාන",
                            "ජාතික ආපදා කළමනාකරණ සම්බන්ධීකරණ කමිටුව (NDMCC)",
                            "ආපදා කළමනාකරණ විෂය භාර අමාත්‍යාංශය",
                            "අදාළ මාධ්‍ය ආයතන"
                          ]
                        : [
                            "Disaster Management Centre (DMC)",
                            "District Secretaries",
                            "District Disaster Management Coordinating Units (DDMCUs)",
                            "Military and Police",
                            "Government institutions",
                            "NGOs and INGOs",
                            "United Nations Organizations",
                            "National Disaster Management Coordinating Committee (NDMCC)",
                            "Ministry responsible for Disaster Management",
                            "Relevant media organizations"
                          ]).map((stakeholder) => <li key={stakeholder}>{stakeholder}</li>)}
                    </ul>
                  </div>
                )}

                {selectedSopSection && (
                  <section className="operational-training-material">
                    <div className="detail-section-heading">
                      <span className="detail-section-line" />
                      <h2>{locale === "si" ? "අදාළ ලේඛන" : "Related Documents"}</h2>
                    </div>
                    <div className="operational-training-grid">
                      {selectedSopSection === "non-technical" ? (
                        <article className="operational-training-card">
                          <div className="operational-training-icon">
                            <FileText size={20} />
                          </div>
                          <h3>Sri Lanka Integrated USAR Operations & Knowledge Management Portal</h3>
                          <a
                            href="https://drive.google.com/file/d/1cabC1cPVK-mxew38B_wrme9d0RkF2Rvu/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{locale === "si" ? "ද්වාර ලේඛනය බලන්න" : "View Portal Document"}</span>
                            <ExternalLink size={15} />
                          </a>
                        </article>
                      ) : (
                        <>
                          <article className="operational-training-card">
                            <div className="operational-training-icon">
                              <FileText size={20} />
                            </div>
                            <h3>{locale === "si" ? "ජාතික මට්ටමේ ආපදා කළමනාකරණ SOP — English" : "National-Level Disaster Management SOP — English"}</h3>
                            <a
                              href="https://drive.google.com/file/d/1VD6H2MxvjuucMDUqM63PEYcdISzA-sPn/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>English PDF</span>
                              <ExternalLink size={15} />
                            </a>
                          </article>
                          <article className="operational-training-card">
                            <div className="operational-training-icon">
                              <FileText size={20} />
                            </div>
                            <h3>{locale === "si" ? "ජාතික මට්ටමේ ආපදා කළමනාකරණ SOP — සිංහල" : "National-Level Disaster Management SOP — Sinhala"}</h3>
                            <a
                              href="https://drive.google.com/file/d/1KoNjaPsnubhVSjKlWRsMXdmbVdzhBbSG/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>සිංහල PDF</span>
                              <ExternalLink size={15} />
                            </a>
                          </article>
                        </>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          ) : section === "operational" && content ? (
            <>
              <div className="operational-language-toggle" role="group" aria-label={isSinhala ? "භාෂාව" : "Language"}>
                <button
                  type="button"
                  className={!isSinhala ? "active" : ""}
                  aria-pressed={!isSinhala}
                  onClick={() => setLocale("en")}
                >
                  English
                </button>
                <button
                  type="button"
                  className={isSinhala ? "active" : ""}
                  aria-pressed={isSinhala}
                  onClick={() => setLocale("si")}
                >
                  සිංහල
                </button>
              </div>
              {selectedModule && (
                <button
                  type="button"
                  className="operational-back-button"
                  onClick={goBackInOperationalGuidelines}
                >
                  <ArrowLeft size={16} />
                  {isSinhala
                    ? selectedSector ? "අංශ ලැයිස්තුව වෙත" : "මෙහෙයුම් මාර්ගෝපදේශ වෙත"
                    : selectedSector ? "Back to Sector List" : "Back to Operational Guidelines"}
                </button>
              )}
              <div className="knowledge-hub-hero">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  {isSinhala ? "මෙහෙයුම් මාර්ගෝපදේශ" : content.kicker}
                </div>
                <h1 className="hero-title">
                  {operationalTitle}
                </h1>
                {!selectedModule && (
                  <p className="hero-description">
                    {isSinhala
                      ? "නාගරික සෙවීම් සහ මුදාගැනීමේ (USAR) මෙහෙයුම් සඳහා පියවරෙන් පියවර ක්‍රියාපටිපාටි සහ වැදගත් මෙහෙයුම් දැනුම ලබා ගන්න."
                      : content.description}
                  </p>
                )}
              </div>

              {!selectedModule ? (
                <div className="knowledge-cards-grid">
                  {operationalModules.map((module) => (
                    <button
                      type="button"
                      className="knowledge-card-item operational-card-button"
                      key={module.id}
                      onClick={() => {
                        setSelectedModuleId(module.id);
                        setSelectedSectorId(null);
                      }}
                    >
                      <div className="card-header-row">
                        <div className="card-icon-wrapper">
                          <span className="emoji-icon">{module.icon}</span>
                        </div>
                        <span className="card-action-indicator">
                          <ArrowRight size={16} />
                        </span>
                      </div>
                      <div className="card-body-content">
                        <h3 className="card-item-title">
                          {isSinhala ? "මොඩියුලය" : "Module"} {module.number}: {module.title[operationalLanguage]}
                        </h3>
                      </div>
                      <div className="card-footer-link">
                        <span>{isSinhala ? "මොඩියුලය බලන්න" : "Explore Module"}</span>
                        <ArrowRight size={14} style={{ marginLeft: "6px" }} />
                      </div>
                    </button>
                  ))}
                </div>
              ) : selectedSector ? (
                <section className="operational-sector-overview">
                  <h2 className="operational-sector-title">{selectedSector.title[operationalLanguage]}</h2>
                  <div className="detail-section-heading">
                    <span className="detail-section-line" />
                    <h2>{isSinhala ? "දළ විශ්ලේෂණය" : "Overview"}</h2>
                  </div>
                  <p>{selectedSector.overview[operationalLanguage]}</p>
                  {selectedSector.details[operationalLanguage]?.length > 0 && (
                    <div className="detail-section-heading operational-detailed-heading">
                      <span className="detail-section-line" />
                      <h2>{isSinhala ? "සවිස්තරාත්මක තොරතුරු" : "Detailed Information"}</h2>
                    </div>
                  )}
                  {selectedSector.details[operationalLanguage]?.map((detail) => (
                    <section className="operational-sector-detail" key={detail.heading}>
                      <h3>{detail.heading}</h3>
                      {detail.text && <p>{detail.text}</p>}
                      {detail.steps && (
                        <ol>
                          {detail.steps.map((step) => (
                            <li key={step.title}>
                              <strong>{step.title}</strong>
                              <span>{step.text}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                      {detail.items && (
                        <ul>
                          {detail.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      )}
                    </section>
                  ))}
                  {selectedSector.documents?.length > 0 && (
                    <section className="operational-training-material">
                      <div className="detail-section-heading">
                        <span className="detail-section-line" />
                        <h2>{isSinhala ? "අදාළ පුහුණු ද්‍රව්‍ය" : "Related Training Material"}</h2>
                      </div>
                      <div className="operational-training-grid">
                        {selectedSector.documents.map((document) => (
                          <article className="operational-training-card" key={document.url}>
                            <div className="operational-training-icon">
                              <FileText size={20} />
                            </div>
                            <h3>{document.title[operationalLanguage]}</h3>
                            <a href={document.url} target="_blank" rel="noopener noreferrer">
                              <span>{document.label[operationalLanguage]}</span>
                              <ExternalLink size={15} />
                            </a>
                          </article>
                        ))}
                      </div>
                    </section>
                  )}
                </section>
              ) : (
                <div className="knowledge-cards-grid">
                  {selectedModule.sectors.map((sector, index) => (
                    <button
                      type="button"
                      className="knowledge-card-item operational-card-button"
                      key={sector.id}
                      onClick={() => setSelectedSectorId(sector.id)}
                    >
                      <div className="card-header-row">
                        <div className="card-icon-wrapper">
                          <span className="emoji-icon">📘</span>
                        </div>
                        <span className="card-action-indicator">
                          <ArrowRight size={16} />
                        </span>
                      </div>
                      <div className="card-body-content">
                        <h3 className="card-item-title">
                          {isSinhala ? "අංශය" : "Sector"} {index + 1} — {sector.title[operationalLanguage]}
                        </h3>
                      </div>
                      <div className="card-footer-link">
                        <span>{isSinhala ? "අංශය බලන්න" : "View Sector"}</span>
                        <ArrowRight size={14} style={{ marginLeft: "6px" }} />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : content ? (
            <>
              <div className="knowledge-hub-hero">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  {locale === "si" ? ({
                    sops: "සම්මත ක්‍රියාපටිපාටි",
                    medical: "වෛද්‍ය ගලවාගැනීම්",
                    others: "අමතර සම්පත්",
                    experiences: "අත්දැකීම් සහ සිද්ධි"
                  }[section] || content.kicker) : content.kicker}
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
                          {locale === "si" ? (card.sinhalaDesc || "විස්තරයක් නොමැත.") : card.desc}
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