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
    slug: "first-response",
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
    slug: "disaster-environment",
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
    slug: "incident-site-management",
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
    slug: "search-operations",
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
    slug: "rescue-operations",
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
  },
  "mass-casualty-incident": {
    slug: "mass-casualty-incident",
    title: "Hospital Coordination and Casualty Management",
    sinhalaTitle: "රෝහල් සම්බන්ධීකරණය සහ අනතුරු කළමනාකරණය",
    icon: "🚨",
    hideHeroBanner: true,
    hideHeroKicker: true,
    hideHeroIcon: true,
    hideEnglishSubtitle: true,
    heroImage: firstResponseImage,
    heroAlt: "Mass Casualty Incident Response Plan CNTH Ragama",
    description: "A coordinated response framework to support rescue and the safe transfer of trapped and injured people to hospital.",
    sinhalaDescription: "සිරවී සිටින සහ තුවාල ලැබූ පුද්ගලයන් මුදාගෙන ආරක්ෂිතව රෝහලට යොමු කිරීම සඳහා සම්බන්ධීකරණය කළ ප්‍රතිචාර රාමුවක්.",
    keyHeading: "KEY INFORMATION | ප්‍රධාන තොරතුරු",
    keyInformation: [
      ["⚠️", "Relevant Hazards", "අදාළ උපද්‍රව", "Building collapse, structural damage, earthquakes, explosions, fires, and industrial accidents.", "ගොඩනැගිලි කඩා වැටීම්, ව්‍යුහාත්මක හානි, භූමිකම්පා, පිපිරීම්, ගිනිගැනීම් සහ කාර්මික අනතුරු."],
      ["🎯", "Main Objective", "ප්‍රධාන අරමුණ", "Support the rescue and safe transfer of trapped and injured victims to hospital.", "සිරවී සිටින සහ තුවාල ලැබූ පුද්ගලයන් මුදාගෙන ආරක්ෂිතව රෝහලට යොමු කිරීමට සහාය වීම."],
      ["🤝", "Coordination", "සම්බන්ධීකරණය", "Coordinate USAR teams, emergency medical services, police, and hospital response teams.", "USAR කණ්ඩායම්, හදිසි වෛද්‍ය සේවා, පොලීසිය සහ රෝහල් ප්‍රතිචාර කණ්ඩායම් අතර සම්බන්ධීකරණය." ]
    ],
    processHeading: "NOTIFICATION AND ACTIVATION | දැනුම්දීම සහ සක්‍රීය කිරීම",
    steps: [
      ["📞", "Receive Incident Information", "සිද්ධිය පිළිබඳ තොරතුරු ලබාගැනීම", "Receive information from emergency services or relevant authorities.", "හදිසි සේවා හෝ අදාළ බලධාරීන්ගෙන් සිද්ධිය පිළිබඳ තොරතුරු ලබාගන්න."],
      ["📋", "Collect Incident Details", "සිද්ධියේ විස්තර රැස් කිරීම", "Record the location, incident type, possible hazards, and estimated number of casualties.", "සිද්ධියේ ස්ථානය, වර්ගය, ඇතිවිය හැකි උපද්‍රව සහ ඇස්තමේන්තුගත තුවාලකරුවන්ගේ සංඛ්‍යාව සටහන් කරගන්න."]
    ],
    groups: [
      {
        heading: "METHANE INCIDENT REPORT | METHANE සිද්ධි වාර්තාව",
        items: [
          ["🚨", "M — Major incident declared", "M — ප්‍රධාන සිද්ධියක් ප්‍රකාශ කිරීම", "", ""],
          ["📍", "E — Exact location", "E — නිශ්චිත ස්ථානය", "", ""],
          ["📝", "T — Type of incident", "T — සිද්ධියේ වර්ගය", "", ""],
          ["⚠️", "H — Hazards present or potential", "H — පවතින හෝ ඇතිවිය හැකි උපද්‍රව", "", ""],
          ["🚧", "A — Access to the scene", "A — සිද්ධි ස්ථානයට ප්‍රවේශය", "", ""],
          ["👥", "N — Number of casualties", "N — තුවාලකරුවන්ගේ සංඛ්‍යාව", "", ""],
          ["🚑", "E — Emergency services present or required", "E — පැමිණ සිටින හෝ අවශ්‍ය හදිසි සේවා", "", ""]
        ]
      },
      {
        heading: "SECURITY AND ACCESS MANAGEMENT | ආරක්ෂාව සහ ප්‍රවේශ කළමනාකරණය",
        items: [
          ["👮", "Coordinate with Police", "පොලීසිය සමඟ සම්බන්ධීකරණය", "Coordinate traffic and crowd control with the Police.", "රථවාහන සහ ජනකාය පාලනය සඳහා පොලීසිය සමඟ සම්බන්ධීකරණය කරන්න."],
          ["🚑", "Keep Access Routes Clear", "ප්‍රවේශ මාර්ග විවෘතව තබාගැනීම", "Keep routes clear for ambulances and emergency response vehicles.", "ගිලන් රථ සහ හදිසි ප්‍රතිචාර වාහන සඳහා මාර්ග විවෘතව තබාගන්න."],
          ["⛔", "Restrict Unauthorized Access", "අවසර නොලත් ප්‍රවේශය සීමා කිරීම", "Restrict unauthorized access to incident and treatment areas.", "සිද්ධි ස්ථානයට සහ ප්‍රතිකාර ප්‍රදේශවලට අවසර නොලත් පුද්ගලයන් ඇතුළුවීම සීමා කරන්න."],
          ["🦺", "Protect Response Personnel", "ප්‍රතිචාර කාර්ය මණ්ඩලයට ආරක්ෂිත ප්‍රවේශය", "Ensure safe access for rescue and medical personnel.", "ගලවාගැනීමේ සහ වෛද්‍ය කාර්ය මණ්ඩලයට ආරක්ෂිතව ප්‍රවේශ විය හැකි බව තහවුරු කරන්න."]
        ]
      },
      {
        heading: "STAFF IDENTIFICATION | කාර්ය මණ්ඩල හඳුනාගැනීම",
        items: [
          ["🔴", "Red — Triage Officers", "රතු — රෝගී වර්ගීකරණ නිලධාරීන්", "", ""],
          ["🟣", "Purple — Clinical Commander", "දම් — සායනික අණදෙන නිලධාරී", "", ""],
          ["🔵", "Blue — Doctors", "නිල් — වෛද්‍යවරුන්", "", ""],
          ["🟢", "Green — Nurses", "කොළ — හෙදියන්", "", ""],
          ["🟡", "Yellow — Minor Staff", "කහ — සහායක කාර්ය මණ්ඩලය", "", ""]
        ]
      },
      {
        heading: "TRIAGE AND PATIENT MANAGEMENT | රෝගී වර්ගීකරණය සහ කළමනාකරණය",
        items: [
          ["🔴", "Red — Immediate", "රතු — වහාම ප්‍රතිකාර අවශ්‍ය", "Requires immediate medical attention.", "වහාම වෛද්‍ය ප්‍රතිකාර අවශ්‍ය වේ."],
          ["🟡", "Yellow — Delayed", "කහ — ප්‍රමාද කළ හැකි", "Requires medical treatment but can wait.", "වෛද්‍ය ප්‍රතිකාර අවශ්‍ය නමුත් යම් කාලයක් බලා සිටිය හැකිය."],
          ["🟢", "Green — Minor", "කොළ — සුළු තුවාල", "Has minor injuries and is able to walk.", "සුළු තුවාල ඇති අතර ඇවිදීමට හැකිය."],
          ["⚫", "Black — Dead / Expectant", "කළු — මියගිය / දිවි ගලවාගැනීම අපේක්ෂා කළ නොහැකි", "Deceased or unlikely to survive given the severity of injuries and available resources.", "මියගොස් ඇති හෝ තුවාලවල බරපතළකම සහ පවතින සම්පත් අනුව දිවි ගලවාගැනීමේ හැකියාව අඩු පුද්ගලයන්."]
        ]
      }
    ],
    resource: "MCI Response Plan Complete Guide",
    resourceSinhala: "බහු-තුවාල සිදුවීම් (MCI) සඳහා ප්‍රතිචාර සැලැස්ම - සම්පූර්ණ මාර්ගෝපදේශය",
    resourceKey: "mciResponsePDF",
    resourceUrl: "https://drive.google.com/file/d/140aKs-65YF0By3aOZkYLgCi-RDzZ3xCp/view?usp=sharing",
    resourceBeforeContent: true
  },
  "emt-basic-certificate": {
    slug: "emt-basic-certificate",
    title: "1990 Suwa Seriya EMT-Basic Training",
    sinhalaTitle: "1990 සුව සැරිය EMT-මූලික පුහුණුව",
    icon: "🚑",
    hideHeroBanner: true,
    hideEnglishSubtitle: true,
    heroImage: firstResponseImage,
    heroAlt: "1990 Suwa Seriya EMT-Basic Training",
    description: "Certificate course structure, modules, and operational guidelines.",
    sinhalaDescription: "1990 සුව සැරිය ගිලන්රථ සේවය සහ සෞඛ්‍ය අමාත්‍යාංශය මඟින් පවත්වනු ලබන හදිසි වෛද්‍ය කාර්මික ශිල්පීන් සඳහා වන මූලික සහතික පත්‍ර පාඨමාලාව.",
    keyHeading: "COURSE OVERVIEW | පාඨමාලා විස්තරය",
    keyInformation: [
      ["Course", "Certificate course for Emergency Medical Technicians (Basic), AdvCertParamedSc. Run by the 1990 Suwa Seriya Ambulance Service and Ministry of Health."],
      ["Purpose", "To train EMTs who give pre-hospital emergency care, communicate with hospitals, transport patients rapidly, and help with disaster coordination."],
      ["Entry criteria", "3 A/L passes in any stream; age below 35 at the closing date; three consecutive interviews."]
    ],
    processHeading: "CURRICULUM MODULES | විෂය මාලා මොඩියුල",
    steps: [
      ["📖", "Module 1: Preparatory", "මූලික සූදානම", "EMS system and Suwa Seriya, EMT well-being, infection control, medico-legal/ethics, and vital signs."],
      ["🩺", "Module 2: Medical, Behavioural & Obstetrics", "වෛද්‍ය සහ ප්‍රසව විද්‍යාව", "Pharmacology, respiratory, cardiovascular (AED), diabetes, anaphylaxis, and obstetrics."],
      ["🚑", "Module 3: Trauma", "තුවාල සහ අනතුරු කළමනාකරණය", "Bleeding and shock, soft tissue, musculoskeletal, head/spine, airway, and ventilation."],
      ["📋", "Module 4: Patient Assessment", "රෝගී ඇගයීම", "Primary survey, focused history, exam (trauma and medical), and ongoing assessment."],
      ["⚙️", "Module 5: Operations", "මෙහෙයුම් කටයුතු", "Ambulance operations, extrication, hazmat, incident management, and mass casualty/triage."],
      ["🏥", "Module 6: Rotations", "රෝහල් සහ ගිලන්රථ පුහුණුව", "A&E/ETU, ambulance training, and minor clinical rotations (2 credits each)."]
    ],
    resource: "Suwa Seriya EMT-Basic Curriculum Summary",
    resourceKey: "emtBasicPDF",
    resourceUrl: "https://drive.google.com/file/d/1c8u_0_29OKQmZAIEPnysy4J-0yDiwb02/view?usp=sharing",
    resourceBeforeContent: true
  }
};

export { commonNote };
export default topics;