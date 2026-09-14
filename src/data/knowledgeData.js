import firstResponseImage from "../assets/SOPs.jpeg";
import disasterEnvironmentImage from "../assets/Sri Lanka Flood 2025.jpeg";
import incidentSiteImage from "../assets/SOPs.jpeg";
import searchOperationsImage from "../assets/SOPs.jpeg";
import rescueOperationsImage from "../assets/SOPs.jpeg";

const commonNote = {
  title: "Knowledge Note | වැදගත් දැනුම්දීම",
  body: "This section provides simplified operational guidance for learning and knowledge-sharing purposes. During actual emergency operations, users must follow authorized organizational procedures, official guidelines, and instructions from responsible authorities.",
  sinhala: "මෙම section එක learning සහ knowledge-sharing purposes සඳහා simplified operational guidance ලබාදීම සඳහා සකස් කර ඇත. Actual emergency operations වලදී authorized organizational procedures සහ responsible authorities විසින් ලබාදෙන instructions අනුගමනය කළ යුතුය."
};

const topics = {
  "first-response": {
    title: "First Response",
    sinhalaTitle: "පළමු ප්‍රතිචාරය",
    icon: "🚨",
    heroImage: firstResponseImage,
    heroAlt: "USAR operational guidance and first response resources",
    description: "First response refers to the immediate actions taken by responders and local teams after a disaster occurs.",
    sinhalaDescription: "ආපදාවක් සිදු වූ පසු responders සහ local teams විසින් සිදු කරන මුල්ම සහ immediate actions වේ.",
    keyHeading: "KEY INFORMATION | ප්‍රධාන තොරතුරු",
    keyInformation: [
      ["Understand the emergency situation", "හදිසි තත්ත්වය තේරුම් ගැනීම"],
      ["Identify potential hazards", "පවතින අවදානම් (Hazards) හඳුනා ගැනීම"],
      ["Determine immediate priorities and needs", "Immediate priorities සහ needs හඳුනා ගැනීම"],
      ["Provide initial assistance if safe", "ආරක්ෂිත නම් initial assistance ලබාදීම"],
      ["Coordinate with relevant teams", "Relevant teams සමඟ coordination කිරීම"],
      ["Communicate important information", "වැදගත් information communicate කිරීම"]
    ],
    processHeading: "STEP-BY-STEP PROCESS | පියවර ක්‍රමය",
    steps: [
      ["🔍", "Assess the Situation", "තත්ත්වය තක්සේරු කරන්න", "Understand the emergency and identify the overall situation clearly."],
      ["⚠️", "Identify Hazards", "අවදානම් හඳුනා ගන්න", "Identify potential dangers before taking further action."],
      ["📋", "Identify Immediate Needs", "හදිසි අවශ්‍යතා හඳුනා ගන්න", "Determine urgent needs and set priorities."],
      ["🤝", "Provide Initial Assistance", "මූලික සහාය ලබාදෙන්න", "Offer appropriate initial assistance if conditions are safe."],
      ["📡", "Coordinate the Response", "ප්‍රතිචාරය සම්බන්ධීකරණය කරන්න", "Maintain communication and coordination with relevant teams."],
      ["📝", "Report Important Information", "වැදගත් තොරතුරු වාර්තා කරන්න", "Record and communicate key findings and information."]
    ],
    safety: ["SAFETY REMINDER | ආරක්ෂක මතක් කිරීම", "Always consider personal safety before entering a disaster area.", "ආපදා ප්‍රදේශයකට ඇතුළු වීමට පෙර සෑම විටම තමන්ගේ personal safety පිළිබඳ සැලකිලිමත් වන්න."],
    resource: "First Response – Complete Guide",
    resourceKey: "firstResponsePDF",
    resourceUrl: "https://drive.google.com/file/d/1w1TnSUO6CQ55K9IZk3hSs7ZHtIJGIKbm/view?usp=sharing"
  },
  "disaster-environment": {
    title: "Disaster Environment",
    sinhalaTitle: "ආපදා පරිසරය",
    icon: "🌍",
    heroImage: disasterEnvironmentImage,
    heroAlt: "Flooded urban disaster environment in Sri Lanka",
    description: "Understand different disaster environments and the risks that responders may face during USAR operations.",
    sinhalaDescription: "USAR මෙහෙයුම් අතරතුර responders මුහුණ දිය හැකි විවිධ ආපදා පරිසරයන් සහ අවදානම් තේරුම් ගන්න.",
    groups: [
      { heading: "TYPES OF DISASTER | ආපදා වර්ග", items: [["🌎", "Earthquake", "භූමිකම්පා"], ["🌊", "Flood", "ගංවතුර"], ["🌊", "Tsunami", "සුනාමි"], ["🔥", "Fire", "ගින්න"], ["🏢", "Building Collapse", "ගොඩනැගිලි කඩා වැටීම"], ["⚠️", "Other Emergencies", "වෙනත් හදිසි අවස්ථා"]] },
      { heading: "URBAN ENVIRONMENT | නාගරික පරිසරය", items: [["🏢", "Buildings", "ගොඩනැගිලි"], ["🛣️", "Roads", "මාර්ග"], ["🌉", "Bridges", "පාලම්"], ["⚡", "Utilities", "විදුලි සහ සේවා පද්ධති"], ["🏚️", "Damaged Infrastructure", "හානි වූ යටිතල පහසුකම්"]] },
      { heading: "COLLAPSE PATTERNS | ගොඩනැගිලි කඩා වැටීමේ ආකාර", items: [["📐", "Lean-To Collapse", "One wall fails while the floor leans to one side forming a triangular void."], ["🥞", "Pancake Collapse", "Floors fall directly on top of each other with little void space."], ["🔻", "V-Shaped Collapse", "The center of a floor collapses while the edges remain supported."], ["🔺", "A-Frame Collapse", "Two floor sections lean against each other creating a triangular space."]] },
      { heading: "IMPORTANT RISKS | වැදගත් අවදානම්", items: [["🏗️", "Unstable Structures", "අස්ථාවර ගොඩනැගිලි"], ["🪨", "Falling Debris", "වැටෙන debris"], ["⚡", "Damaged Utilities", "හානි වූ utilities"], ["🔥", "Fire Hazards", "ගිනි අවදානම්"], ["☣️", "Hazardous Materials", "අනතුරුදායක ද්‍රව්‍ය"]] }
    ],
    resource: "Disaster Environment – Complete Guide",
    resourceKey: "disasterEnvironmentPDF",
    resourceUrl: "https://drive.google.com/file/d/1zZ7eagHTKq1zcXskR4pg6OtY_186XLaM/view?usp=sharing"
  },
  "incident-site-management": {
    title: "Incident Site Management",
    sinhalaTitle: "සිද්ධි ස්ථාන කළමනාකරණය",
    icon: "⚠️",
    heroImage: incidentSiteImage,
    heroAlt: "USAR site management and operational procedures",
    description: "Learn how to safely assess, organize, and manage activities at a disaster or emergency site.",
    sinhalaDescription: "Disaster හෝ emergency site එකක activities ආරක්ෂිතව assess, organize සහ manage කරන ආකාරය පිළිබඳ දැනගන්න.",
    processHeading: "SITE MANAGEMENT PROCESS | කළමනාකරණ ක්‍රියාවලිය",
    steps: [
      ["🔍", "Assess the Environment", "පරිසරය තක්සේරු කරන්න", "Observe and understand the disaster environment before starting operations."],
      ["⚠️", "Identify Hazards", "අවදානම් හඳුනා ගන්න", "Identify potential risks and dangers affecting responders and victims."],
      ["🛡️", "Establish Safe and Restricted Areas", "ආරක්ෂිත ප්‍රදේශ ස්ථාපිත කරන්න", "Identify safe locations and clearly separate hazardous restricted areas."],
      ["👷", "Ensure Team Safety", "කණ්ඩායමේ ආරක්ෂාව තහවුරු කරන්න", "Confirm appropriate safety measures and PPE are in use."],
      ["📡", "Coordinate Site Operations", "Site Operations සම්බන්ධීකරණය කරන්න", "Organize teams, communication channels, and operational activities."],
      ["👁️", "Continuously Monitor the Situation", "නිරන්තරයෙන් නිරීක්ෂණය කරන්න", "Monitor environment changes and re-assess risks as the situation evolves."]
    ],
    groups: [{ heading: "HAZARD TYPES | අවදානම් වර්ග", items: [["⚡", "Electrical Hazards", "විදුලි අවදානම්"], ["🏢", "Unstable Buildings", "අස්ථාවර ගොඩනැගිලි"], ["🔥", "Fire and Smoke", "ගින්න සහ දුම"], ["☣️", "Hazardous Materials", "අනතුරුදායක ද්‍රව්‍ය"], ["🌧️", "Environmental Hazards", "පාරිසරික අවදානම්"], ["🔌", "Damaged Utilities", "හානි වූ utilities"]] }],
    safety: ["SAFETY FIRST | ආරක්ෂාව ප්‍රථමයෙන්", "Never enter an unsafe area without proper assessment and appropriate safety measures.", "නිසි assessment එකක් සහ appropriate safety measures නොමැතිව unsafe area එකකට ඇතුළු නොවන්න."],
    resource: "Incident Site Management – Complete Guide",
    resourceKey: "incidentSiteManagementPDF",
    resourceUrl: "https://drive.google.com/file/d/1ULZoJ-9uYiUw35_3WpwXgmwhSGRB4eKr/view?usp=sharing"
  },
  "search-operations": {
    title: "Search Operations",
    sinhalaTitle: "සෙවුම් මෙහෙයුම්",
    icon: "🔍",
    heroImage: searchOperationsImage,
    heroAlt: "USAR search operations guidance and procedures",
    description: "Learn important procedures and techniques used to search for victims during Urban Search and Rescue operations.",
    sinhalaDescription: "USAR operations අතරතුර victims සෙවීම සඳහා භාවිතා කරන වැදගත් procedures සහ techniques පිළිබඳ දැනගන්න.",
    processHeading: "SEARCH PROCESS | සෙවුම් ක්‍රියාවලිය",
    steps: [
      ["🗺️", "Assess the Search Area", "Search Area එක තක්සේරු කරන්න", "Evaluate the search area for extent, hazards, and victim likelihood."],
      ["📋", "Plan the Search", "Search Plan එක සකස් කරන්න", "Develop a systematic plan covering sectors, methods, and priorities."],
      ["👥", "Organize Search Teams", "Search Teams සංවිධානය කරන්න", "Assign roles, sectors, and responsibilities to team members clearly."],
      ["🔍", "Conduct Initial Search", "Initial Search සිදු කරන්න", "Perform a rapid primary search to identify any accessible victims."],
      ["🔎", "Conduct Detailed Search", "Detailed Search සිදු කරන්න", "Carry out thorough secondary search of all areas in the sector."],
      ["📝", "Report Findings", "Findings වාර්තා කරන්න", "Document and communicate all results clearly to the team and command."]
    ],
    groups: [
      { heading: "OPERATION ELEMENTS | මෙහෙයුම් අංග", items: [["👥", "Search Team Organization", "කණ්ඩායම් සංවිධානය", "Organize clear team roles and responsibilities for effective coverage."], ["🔎", "Search Techniques", "සෙවුම් ක්‍රම", "Apply systematic methods appropriate to the environment and structure."], ["📍", "Victim Location", "ගොදුරු හඳුනාගැනීම", "Use audio, visual, and technical methods to locate victims."], ["📢", "Communication & Reporting", "සන්නිවේදනය සහ වාර්තාකරණය", "Maintain clear team communication and document all findings."], ["🗺️", "Search Area Planning", "සෙවුම් ප්‍රදේශ සැලැස්ම", "Define and divide search sectors to ensure full systematic coverage."]] },
      { heading: "KEY TAKEAWAYS", items: [["✓", "Work as a coordinated team", "සම්බන්ධිත කණ්ඩායමක් ලෙස වැඩ කරන්න"], ["✓", "Maintain clear communication", "Clear communication පවත්වාගෙන යන්න"], ["✓", "Follow the search plan", "Search plan එක follow කරන්න"], ["✓", "Report findings clearly", "Findings clearly report කරන්න"], ["✓", "Always prioritize safety", "සෑම විටම safety ප්‍රමුඛ කරන්න"]] }
    ],
    resource: "Search Operations – Complete Guide",
    resourceKey: "searchOperationsPDF",
    resourceUrl: "https://drive.google.com/file/d/1oXhsAzZfilELqfX4oR3CwGdY1ev9UxWI/view?usp=sharing"
  },
  "rescue-operations": {
    title: "Rescue Operations",
    sinhalaTitle: "ගලවා ගැනීමේ මෙහෙයුම්",
    icon: "🦺",
    heroImage: rescueOperationsImage,
    heroAlt: "USAR rescue operations guidance and safety procedures",
    description: "Learn important safety principles and organized procedures for conducting rescue operations.",
    sinhalaDescription: "Rescue operations සඳහා අවශ්‍ය වැදගත් safety principles සහ organized procedures පිළිබඳ දැනගන්න.",
    processHeading: "RESCUE PROCESS | ගලවා ගැනීමේ ක්‍රියාවලිය",
    steps: [
      ["🔍", "Assess the Situation and Hazards", "තත්ත්වය සහ අවදානම් තක්සේරු කරන්න", "Understand the rescue environment and identify all potential dangers."],
      ["🦺", "Apply Safety Procedures", "ආරක්ෂක ක්‍රියාමාර්ග අනුගමනය කරන්න", "Follow appropriate safety procedures before beginning the rescue operation."],
      ["🛠️", "Prepare Required Equipment", "අවශ්‍ය උපකරණ සූදානම් කරන්න", "Prepare suitable rescue tools and equipment for the specific situation."],
      ["👥", "Coordinate the Rescue Team", "Rescue Team එක සම්බන්ධීකරණය කරන්න", "Ensure clear communication and coordination between all team members."],
      ["🚑", "Conduct the Rescue Operation", "Rescue Operation එක සිදු කරන්න", "Carry out the rescue according to the situation and applicable procedures."],
      ["📝", "Report and Complete the Operation", "Operation එක Report කර Complete කරන්න", "Record key information and properly conclude the rescue operation."]
    ],
    groups: [{ heading: "OPERATIONAL ELEMENTS | මෙහෙයුම් අංග", items: [["📋", "Rescue Planning", "ගලවා ගැනීමේ සැලසුම් කිරීම", "Develop a clear, situation-specific rescue plan before action."], ["🦺", "Rescue Safety", "ගලවා ගැනීමේ ආරක්ෂාව", "Ensure all safety protocols and PPE requirements are met."], ["🛠️", "Equipment Preparation", "උපකරණ සූදානම් කිරීම", "Inspect and prepare all required rescue equipment and tools."], ["👥", "Team Coordination", "කණ්ඩායම් සම්බන්ධීකරණය", "Coordinate roles, communication, and actions across the entire team."], ["🚑", "Victim Extraction", "විපතට පත් පුද්ගලයා ඉවත් කිරීම", "Safely extricate victims while maintaining their physical stability."]] }],
    safety: ["IMPORTANT SAFETY RULE | වැදගත් ආරක්ෂක නියමය", "The safety of the rescue team must always be considered before and during rescue operations.", "Rescue operation එකකට පෙර සහ operation එක අතරතුර සෑම විටම rescue team එකේ safety පිළිබඳ ප්‍රමුඛ අවධානය යොමු කළ යුතුය."],
    resource: "Rescue Operations – Complete Guide",
    resourceKey: "rescueOperationsPDF",
    resourceUrl: "https://drive.google.com/file/d/1-nzWcCvoCv3Z9PW8Ddcq4lrvH_t1zRyI/view?usp=sharing"
  }
};

export { commonNote };
export default topics;