const sourceResources = {
  "first-response": [{ id: "modu-i", title: "INSARAG Sinhala Module I — First Response Introduction", source: "Knowlege repo / Sop / Insa_Sinhala Modu-I.pptx" }],
  "disaster-environment": [{ id: "modu-ii", title: "INSARAG Sinhala Module II — Disaster Environment", source: "Knowlege repo / Sop / INSA_Sinhala_Modu-II.pptx" }],
  "incident-site-management": [{ id: "modu-iii", title: "INSARAG Sinhala Module III — Incident Site Management", source: "Knowlege repo / Sop / INSA_Sinhala_Modu-III.pptx" }],
  "search-operations": [{ id: "modu-iv", title: "INSARAG Sinhala Module IV — Search Operations", source: "Knowlege repo / Sop / INSAR_Sinhala_Modu-IV.pptx" }],
  "rescue-operations": [{ id: "modu-v", title: "INSARAG Sinhala Module V — Rescue Operations", source: "Knowlege repo / Sop / INSAR_Sinhala_Modul-V.pptx" }],
  "basic-medical-rescue": [{ id: "medical-61", title: "INSARAG Sinhala 6.1 — Basic Medical Rescue", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.1.pptx" }],
  "scene-assessment": [{ id: "medical-62", title: "INSARAG Sinhala 6.2 — Scene Assessment", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.2.pptx" }],
  "patient-assessment": [{ id: "medical-63", title: "INSARAG Sinhala 6.3 — Patient Assessment", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.3.pptx" }],
  "patient-treatment": [{ id: "medical-64", title: "INSARAG Sinhala 6.4 — Patient Treatment", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.4.pptx" }],
  "patient-handling": [{ id: "medical-65", title: "INSARAG Sinhala 6.5 — Patient Handling", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.5.pptx" }],
  "deceased-handling": [{ id: "medical-66", title: "INSARAG Sinhala 6.6 — Deceased Handling", source: "Knowlege repo / Medical / INSARAG_Sinhala_6.6.pptx" }]
};
const createTopic = (id, category, categoryLabel, icon, title, sinhalaTitle, description, guidance) => ({ id, category, categoryLabel, icon, title, sinhalaTitle, description, guidance, resources: sourceResources[id] || [] });

export const categories = [
  { id: "operational", kicker: "OPERATIONAL GUIDANCE", icon: "🚨", title: "Operational Guidelines & SOPs", sinhalaTitle: "මෙහෙයුම් මාර්ගෝපදේශ සහ ක්‍රියා පටිපාටි", description: "Step-by-step operational knowledge for USAR response.", path: "/operational-guidelines" },
  { id: "medical", kicker: "MEDICAL RESCUE", icon: "🩺", title: "First Aid & Medical", sinhalaTitle: "ප්‍රථමාධාර සහ වෛද්‍ය ප්‍රතිකාර", description: "Medical rescue learning resources and references.", path: "/first-aid-medical" },
  { id: "others", kicker: "REFERENCE RESOURCES", icon: "🌍", title: "Others", sinhalaTitle: "වෙනත් සම්පත්", description: "International coordination, training, and additional resources.", path: "/others" },
  { id: "experiences", kicker: "CASE STUDIES", icon: "🧑‍🚒", title: "Past Experiences & Stories", sinhalaTitle: "පසුගිය අත්දැකීම් සහ කථා", description: "Contributor-approved lessons and field experiences.", path: "/experiences" },
  { id: "contacts", kicker: "EMERGENCY DIRECTORY", icon: "📞", title: "Emergency Contacts", sinhalaTitle: "හදිසි ඇමතුම්", description: "Verified responder and agency contacts.", path: "/emergency-contacts" }
];

export const allTopics = [
  createTopic("first-response", "operational", "Operational Guidance", "🚨", "First Response", "පළමු ප්‍රතිචාරය", "Initial actions and priorities after an emergency or disaster.", "This topic provides a learning overview. Consult the relevant approved source presentation for specific procedures."),
  createTopic("disaster-environment", "operational", "Operational Guidance", "🌍", "Disaster Environment", "ආපදා පරිසරය", "Understand disaster environments and responder risks.", "Review available source materials to identify hazards and conditions specific to the incident environment."),
  createTopic("incident-site-management", "operational", "Operational Guidance", "⚠️", "Incident Site Management", "සිද්ධි ස්ථාන කළමනාකරණය", "Organize safe and coordinated activity at an incident site.", "This is operational guidance, not a substitute for site command or approved procedures."),
  createTopic("search-operations", "operational", "Operational Guidance", "🔍", "Search Operations", "සෙවීමේ මෙහෙයුම්", "Planning, organization, communication, and reporting for searches.", "Use the relevant authorized references for methods, marking, and safety controls."),
  createTopic("rescue-operations", "operational", "Operational Guidance", "🦺", "Rescue Operations", "ගලවා ගැනීමේ මෙහෙයුම්", "Safety-focused organization of rescue operations.", "Technical rescue steps must be taken only from current authorized training and source materials."),
  createTopic("basic-medical-rescue", "medical", "First Aid & Medical", "🩺", "Basic Medical Rescue", "මූලික වෛද්‍ය ගලවා ගැනීම", "Core medical rescue reference material.", "Medical actions must follow current approved medical protocols and the supplied training resource."),
  createTopic("scene-assessment", "medical", "First Aid & Medical", "🔍", "Scene Assessment", "සිද්ධි ස්ථාන ඇගයීම", "Reference resources for assessing a scene before assistance.", "Follow approved medical and organizational guidance for live scenes."),
  createTopic("patient-assessment", "medical", "First Aid & Medical", "❤️", "Patient Assessment", "රෝගී තත්ත්ව ඇගයීම", "Patient assessment learning materials.", "Only use procedures supported by approved medical instruction."),
  createTopic("patient-treatment", "medical", "First Aid & Medical", "🩹", "Patient Treatment", "රෝගී ප්‍රතිකාර", "Treatment reference resources.", "Medical treatment must be carried out by appropriately trained and authorized personnel."),
  createTopic("patient-handling", "medical", "First Aid & Medical", "🛏️", "Patient Handling", "රෝගීන් හැසිරවීම", "Patient handling reference resources.", "Use current approved training material for patient movement and handling."),
  createTopic("deceased-handling", "medical", "First Aid & Medical", "⚕️", "Deceased Handling", "මියගිය අය හැසිරවීම", "Respectful handling reference resources.", "Use the applicable approved procedures and legal requirements."),
  createTopic("insarag", "others", "Other Resources", "🌍", "INSARAG", "INSARAG සම්පත්", "International Search and Rescue Advisory Group reference resources.", "Resources are classified here when they are international guidance rather than local operational SOPs."),
  createTopic("ocha-coordination", "others", "Other Resources", "🌐", "OCHA / International Coordination", "ජාත්‍යන්තර සම්බන්ධීකරණය", "International coordination reference resources.", "Refer to approved coordination documents in the repository."),
  createTopic("training", "others", "Other Resources", "🎓", "Training Resources", "පුහුණු සම්පත්", "Training and learning materials.", "Only materials supplied to this repository are shown as source resources."),
  createTopic("additional-resources", "others", "Other Resources", "📚", "Additional Resources", "අමතර සම්පත්", "General USAR reference materials.", "Information not available in the current repository is not represented as an official resource.")
];
export const getTopic = id => allTopics.find(item => item.id === id);
export const contacts = [];
export const experiences = [];
