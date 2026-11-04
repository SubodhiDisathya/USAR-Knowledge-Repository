const createQuestion = (topic, topicSi, prompt, promptSi, options, answerIndex, explanation, explanationSi) => ({
  topic: { en: topic, si: topicSi },
  question: { en: prompt, si: promptSi },
  options: options.map(([en, si]) => ({ en, si })),
  answerIndex,
  explanation: { en: explanation, si: explanationSi }
});

const additionalOperationalQuestions = [
  createQuestion("Module 1: First Responder Programme", "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන",
    "According to the module, when are many survivors rescued after a disaster?",
    "මොඩියුලයට අනුව ආපදාවකින් දිවි ගලවා ගන්නා බොහෝ දෙනා මුදාගනු ලබන්නේ කවදාද?",
    [["Within the first 24 to 48 hours", "පළමු පැය 24 සිට 48 ඇතුළත"], ["Only after international teams arrive", "ජාත්‍යන්තර කණ්ඩායම් පැමිණි පසුව පමණි"], ["After the first month", "පළමු මාසය ගත වූ පසු"], ["Only during recovery", "නැවත යථා තත්ත්වයට පත්වීමේදී පමණි"]],
    0, "The module notes that a large proportion of survivors are rescued within the first 24 to 48 hours.", "දිවි ගලවා ගන්නා විශාල පිරිසක් පළමු පැය 24 සිට 48 තුළ මුදාගනු ලබන බව මොඩියුලයේ සඳහන් වේ."),
  createQuestion("Module 1: First Responder Programme", "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන",
    "What typically happens before first responders arrive?",
    "ප්‍රථම ප්‍රතිචාරකයන් පැමිණීමට පෙර සාමාන්‍යයෙන් සිදුවන්නේ කුමක්ද?",
    [["Self-rescue and help from bystanders", "ස්වයං-මුදාගැනීම සහ අවට සිටින අයගේ සහාය"], ["International assistance", "ජාත්‍යන්තර සහාය"], ["Formal recovery operations", "විධිමත් යථා තත්ත්වයට පත් කිරීමේ මෙහෙයුම්"], ["Hospital rotations", "රෝහල් පුහුණු වාර"]],
    0, "The disaster timeline begins with self-rescue and bystander help, followed by first responders.", "ආපදා කාලරේඛාව ආරම්භ වන්නේ ස්වයං-මුදාගැනීමෙන් සහ අවට සිටින අයගේ සහායෙන් පසුව ප්‍රථම ප්‍රතිචාරකයන් පැමිණීමෙනි."),
  createQuestion("Module 1: First Responder Programme", "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන",
    "Which is a first responder responsibility described in the programme?",
    "වැඩසටහනේ සඳහන් ප්‍රථම ප්‍රතිචාරක වගකීමක් වන්නේ කුමක්ද?",
    [["Guide the local community", "ප්‍රාදේශීය ප්‍රජාවට මඟපෙන්වීම"], ["Wait for all national resources before acting", "ක්‍රියා කිරීමට පෙර සියලු ජාතික සම්පත් ලැබෙන තෙක් බලා සිටීම"], ["Avoid requesting resources", "සම්පත් ඉල්ලා සිටීමෙන් වැළකීම"], ["Work without assessing damage", "හානි තක්සේරු නොකර වැඩ කිරීම"]],
    0, "Guiding the local community is listed alongside early rescue, damage assessment, and requesting resources.", "මුල් අදියරේ මුදාගැනීම, හානි තක්සේරුව සහ සම්පත් ඉල්ලීම සමඟ ප්‍රාදේශීය ප්‍රජාවට මඟපෙන්වීමද සඳහන් වේ."),
  createQuestion("Module 1: First Responder Programme", "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන",
    "What is one goal of learning about national disaster-response capability?",
    "ජාතික ආපදා ප්‍රතිචාර ධාරිතාව පිළිබඳ ඉගෙනීමේ එක් අරමුණක් කුමක්ද?",
    [["Understand available capacity at city, regional, and national levels", "නගර, කලාපීය සහ ජාතික මට්ටමේ පවතින ධාරිතාව තේරුම් ගැනීම"], ["Replace all local response teams", "සියලු ප්‍රාදේශීය ප්‍රතිචාර කණ්ඩායම් වෙනුවට කටයුතු කිරීම"], ["Avoid identifying response gaps", "ප්‍රතිචාර ධාරිතාවේ හිඩැස් හඳුනාගැනීමෙන් වැළකීම"], ["Focus only on international assistance", "ජාත්‍යන්තර සහාය පිළිබඳව පමණක් අවධානය යොමු කිරීම"]],
    0, "The learning outcome is awareness of rescue and response capacities available in the city, region, and country.", "නගරය, කලාපය සහ රට තුළ පවතින මුදාගැනීමේ සහ ප්‍රතිචාර ධාරිතාව පිළිබඳ දැනුවත් වීම ඉගෙනුම් ප්‍රතිඵලයයි."),
  createQuestion("Module 1: First Responder Programme", "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන",
    "During a group discussion, what should participants consider about response capability?",
    "කණ්ඩායම් සාකච්ඡාවකදී ප්‍රතිචාර ධාරිතාව පිළිබඳ සහභාගිවන්නන් සලකා බැලිය යුත්තේ කුමක්ද?",
    [["Whether gaps exist and how they could be addressed", "හිඩැස් තිබේද සහ ඒවා විසඳිය හැක්කේ කෙසේද යන්න"], ["How to stop sharing information", "තොරතුරු බෙදාගැනීම නවත්වන්නේ කෙසේද යන්න"], ["Why local capacity is unnecessary", "ප්‍රාදේශීය ධාරිතාව අනවශ්‍ය වන්නේ ඇයි යන්න"], ["How to delay the first response", "පළමු ප්‍රතිචාරය ප්‍රමාද කරන්නේ කෙසේද යන්න"]],
    0, "The module prompts participants to identify capability gaps and discuss possible solutions.", "ධාරිතාවේ හිඩැස් හඳුනාගෙන ඒවාට හැකි විසඳුම් සාකච්ඡා කිරීමට මොඩියුලය සහභාගිවන්නන් යොමු කරයි."),

  createQuestion("Module 2: The Rescue Environment", "මොඩියුලය 2: මුදාගැනීමේ පරිසරය",
    "Which is an example of a disaster's impact on a city?",
    "ආපදාවකින් නගරයකට ඇති විය හැකි බලපෑමක් කුමක්ද?",
    [["Disruption of public utility networks", "පොදු උපයෝගිතා ජාලවලට බාධා වීම"], ["Improved infrastructure access", "යටිතල පහසුකම් වෙත ප්‍රවේශය වැඩිදියුණු වීම"], ["Reduced need for coordination", "සම්බන්ධීකරණ අවශ්‍යතාව අඩු වීම"], ["Guaranteed structural stability", "ගොඩනැගිලිවල ස්ථාවරත්වය සහතික වීම"]],
    0, "Disruption of public utility networks is listed among the possible impacts on a city.", "පොදු උපයෝගිතා ජාලවලට බාධා වීම නගරයකට ඇති විය හැකි බලපෑම් අතර සඳහන් වේ."),
  createQuestion("Module 2: The Rescue Environment", "මොඩියුලය 2: මුදාගැනීමේ පරිසරය",
    "In a pancake collapse, what happens to the floors?",
    "Pancake ආකාරයේ කඩා වැටීමකදී මහල්වලට සිදුවන්නේ කුමක්ද?",
    [["They fall directly on top of each other", "ඒවා එකිනෙක මත සෘජුවම කඩා වැටේ"], ["They lean against two walls to form a tent", "ඒවා බිත්ති දෙකකට හේත්තු වී කූඩාරමක් සාදයි"], ["Only one wall fails while the floor stays level", "බිම සමතලව තිබියදී එක් බිත්තියක් පමණක් කඩා වැටේ"], ["The floor edges rise while the centre stays intact", "මැද කොටස නොවෙනස්ව තිබියදී බිමේ දාර ඉහළට එසවේ"]],
    0, "The module describes a pancake collapse as floors falling directly on top of one another.", "Pancake කඩා වැටීමකදී මහල් එකිනෙක මත සෘජුවම කඩා වැටෙන බව මොඩියුලයේ විස්තර කරයි."),
  createQuestion("Module 2: The Rescue Environment", "මොඩියුලය 2: මුදාගැනීමේ පරිසරය",
    "What information should reconnaissance gather?",
    "ප්‍රදේශ නිරීක්ෂණයේදී රැස් කළ යුතු තොරතුරු මොනවාද?",
    [["Victims, damage, and hazards", "විපතට පත්වූවන්, හානි සහ උපද්‍රව"], ["Only team names", "කණ්ඩායම්වල නම් පමණක්"], ["Only road signs", "මාර්ග සංඥා පමණක්"], ["Only equipment purchase records", "උපකරණ මිලදී ගැනීමේ වාර්තා පමණක්"]],
    0, "Reconnaissance gathers information about victims, damage, and hazards to support an action plan.", "ක්‍රියාකාරී සැලැස්මකට සහාය වීමට විපතට පත්වූවන්, හානි සහ උපද්‍රව පිළිබඳ තොරතුරු ප්‍රදේශ නිරීක්ෂණයේදී රැස් කරයි."),
  createQuestion("Module 2: The Rescue Environment", "මොඩියුලය 2: මුදාගැනීමේ පරිසරය",
    "Which boundaries can help divide a heavily affected area into sectors?",
    "දැඩි ලෙස බලපෑ ප්‍රදේශයක් කලාපවලට බෙදීමට උපකාරී වන සීමා මොනවාද?",
    [["Geographical features such as roads and rivers", "මාර්ග සහ ගංගා වැනි භූගෝලීය ලක්ෂණ"], ["The order in which teams arrive", "කණ්ඩායම් පැමිණෙන අනුපිළිවෙළ"], ["The colour of responders' clothing", "ප්‍රතිචාරකයන්ගේ ඇඳුම්වල වර්ණය"], ["The number of training documents", "පුහුණු ලේඛන සංඛ්‍යාව"]],
    0, "The module uses geographical boundaries such as roads and rivers for sectorization.", "කලාප වෙන් කිරීම සඳහා මාර්ග සහ ගංගා වැනි භූගෝලීය සීමා භාවිතා කරන බව මොඩියුලයේ සඳහන් වේ."),
  createQuestion("Module 2: The Rescue Environment", "මොඩියුලය 2: මුදාගැනීමේ පරිසරය",
    "Why are sectors labelled, for example, A, B, and C?",
    "උදාහරණයක් ලෙස A, B සහ C ලෙස කලාප නම් කරන්නේ ඇයි?",
    [["To deploy resources effectively", "සම්පත් ඵලදායී ලෙස යෙදවීමට"], ["To identify building ownership", "ගොඩනැගිලිවල හිමිකාරිත්වය හඳුනාගැනීමට"], ["To replace situation reports", "තත්ත්ව වාර්තා වෙනුවට භාවිතා කිරීමට"], ["To mark medical supplies only", "වෛද්‍ය සැපයුම් පමණක් සලකුණු කිරීමට"]],
    0, "Sector labels help teams deploy resources effectively.", "සම්පත් ඵලදායී ලෙස යෙදවීමට කලාප නාම උපකාරී වේ."),

  createQuestion("Module 3: Scene Management", "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය",
    "Which group contains hazards identified in the module?",
    "මොඩියුලයේ හඳුනාගෙන ඇති උපද්‍රව අඩංගු කණ්ඩායම කුමක්ද?",
    [["Unstable structures, damaged utilities, and chemical hazards", "අස්ථාවර ගොඩනැගිලි, හානි වූ උපයෝගිතා සහ රසායනික උපද්‍රව"], ["Training schedules and maps only", "පුහුණු කාලසටහන් සහ සිතියම් පමණක්"], ["Team names and sector labels", "කණ්ඩායම් නම් සහ කලාප නාම"], ["Patient records and supply lists", "රෝගී වාර්තා සහ සැපයුම් ලැයිස්තු"]],
    0, "The module lists structural, utility, fire, chemical, and environmental hazards.", "ව්‍යුහාත්මක, උපයෝගිතා, ගිනි, රසායනික සහ පාරිසරික උපද්‍රව මොඩියුලයේ සඳහන් වේ."),
  createQuestion("Module 3: Scene Management", "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය",
    "Which is a hazard-control measure described in the module?",
    "මොඩියුලයේ විස්තර කර ඇති උපද්‍රව පාලන ක්‍රමයක් කුමක්ද?",
    [["Access control and hazard marking", "ප්‍රවේශ පාලනය සහ උපද්‍රව සලකුණු කිරීම"], ["Removing all barriers", "සියලු බාධක ඉවත් කිරීම"], ["Allowing unrestricted entry", "සීමාවකින් තොරව ඇතුළුවීමට ඉඩ දීම"], ["Ignoring safety zones", "ආරක්ෂිත කලාප නොසලකා හැරීම"]],
    0, "Access control and hazard marking are among the listed hazard-control measures.", "ප්‍රවේශ පාලනය සහ උපද්‍රව සලකුණු කිරීම සඳහන් කර ඇති උපද්‍රව පාලන ක්‍රම අතරට අයත් වේ."),
  createQuestion("Module 3: Scene Management", "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය",
    "How should a lookout signal an immediate evacuation, according to the module?",
    "මොඩියුලයට අනුව නිරීක්ෂකයෙකු හදිසි ඉවත් කිරීමක් සංඥා කළ යුත්තේ කෙසේද?",
    [["Using short blasts from a whistle or horn", "විස්ල් හෝ නළාවකින් කෙටි හඬ සංඥා නිකුත් කිරීමෙන්"], ["By silently leaving the area", "නිහඬව ප්‍රදේශයෙන් පිටවීමෙන්"], ["By removing hazard signs", "උපද්‍රව සංඥා ඉවත් කිරීමෙන්"], ["By waiting for a written report", "ලිඛිත වාර්තාවක් ලැබෙන තෙක් බලා සිටීමෙන්"]],
    0, "Lookouts should be able to signal evacuation immediately with short whistle or horn blasts.", "කෙටි විස්ල් හෝ නළා හඬින් වහාම ඉවත් වීම සංඥා කිරීමට නිරීක්ෂකයන්ට හැකි විය යුතුය."),
  createQuestion("Module 3: Scene Management", "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය",
    "Which combination supports safer management of a disaster site?",
    "ආපදා ස්ථානයක් වඩාත් ආරක්ෂිතව කළමනාකරණය කිරීමට උපකාරී වන සංයෝජනය කුමක්ද?",
    [["Cordons, barriers, access control, and safe areas", "සීමා, බාධක, ප්‍රවේශ පාලනය සහ ආරක්ෂිත ප්‍රදේශ"], ["Open access and no evacuation plan", "විවෘත ප්‍රවේශය සහ ඉවත් කිරීමේ සැලැස්මක් නොමැති වීම"], ["Unmarked hazards and unrestricted movement", "සලකුණු නොකළ උපද්‍රව සහ සීමා රහිත ගමනාගමනය"], ["Removing protective equipment", "ආරක්ෂක උපකරණ ඉවත් කිරීම"]],
    0, "The module describes cordons, barriers, access control, safe areas, and evacuation procedures as safety measures.", "සීමා, බාධක, ප්‍රවේශ පාලනය, ආරක්ෂිත ප්‍රදේශ සහ ඉවත් කිරීමේ ක්‍රියාපටිපාටි ආරක්ෂක ක්‍රම ලෙස මොඩියුලයේ විස්තර කරයි."),
  createQuestion("Module 3: Scene Management", "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය",
    "Besides unstable structures, which hazard should responders consider?",
    "අස්ථාවර ගොඩනැගිලිවලට අමතරව ප්‍රතිචාරකයන් සලකා බැලිය යුතු උපද්‍රවයක් කුමක්ද?",
    [["Fire, smoke, and gases", "ගින්න, දුම සහ වායු"], ["Course certificates", "පාඨමාලා සහතික"], ["Sector names", "කලාප නම්"], ["Exercise schedules", "අභ්‍යාස කාලසටහන්"]],
    0, "Fire, smoke, and gases are listed among the main hazard categories.", "ගින්න, දුම සහ වායු ප්‍රධාන උපද්‍රව කාණ්ඩ අතර සඳහන් වේ."),

  createQuestion("Module 4: Search Module", "මොඩියුලය 4: සෙවීමේ මොඩියුලය",
    "What is the goal of structured search techniques?",
    "සංවිධානාත්මක සෙවීමේ ක්‍රමවල අරමුණ කුමක්ද?",
    [["Locate the most victims in the shortest time with minimal effort", "අවම උත්සාහයකින් කෙටිම කාලය තුළ වැඩිම විපතට පත්වූවන් සොයාගැනීම"], ["Search without coordinating the team", "කණ්ඩායම සම්බන්ධීකරණය නොකර සෙවීම"], ["Focus only on accessible roads", "ප්‍රවේශ විය හැකි මාර්ගවලට පමණක් අවධානය යොමු කිරීම"], ["Delay searches until all debris is removed", "සියලු සුන්බුන් ඉවත් කරන තෙක් සෙවීම් ප්‍රමාද කිරීම"]],
    0, "The module aims to locate the most victims in the shortest time with minimal effort.", "අවම උත්සාහයකින් කෙටිම කාලය තුළ වැඩිම විපතට පත්වූවන් සොයාගැනීම මොඩියුලයේ අරමුණයි."),
  createQuestion("Module 4: Search Module", "මොඩියුලය 4: සෙවීමේ මොඩියුලය",
    "How is a hasty search described?",
    "Hasty search එකක් විස්තර කරන්නේ කෙසේද?",
    [["A quick, systematic team search of an area", "කණ්ඩායමක් විසින් ප්‍රදේශයක් ඉක්මනින් හා ක්‍රමානුකූලව සෙවීම"], ["An unplanned search by one person", "එක් පුද්ගලයෙකුගේ සැලසුම් රහිත සෙවීමක්"], ["A search conducted only after recovery", "යථා තත්ත්වයට පත්වීමෙන් පසු පමණක් සිදු කරන සෙවීමක්"], ["A search that avoids reporting", "වාර්තා කිරීමෙන් වැළකෙන සෙවීමක්"]],
    0, "A hasty search quickly and systematically moves through an area with a team.", "Hasty search එකකදී කණ්ඩායමක් ප්‍රදේශයක් ඉක්මනින් සහ ක්‍රමානුකූලව පරීක්ෂා කරයි."),
  createQuestion("Module 4: Search Module", "මොඩියුලය 4: සෙවීමේ මොඩියුලය",
    "What distinguishes a secondary or extensive search exercise?",
    "ද්විතීයික හෝ පුළුල් සෙවීමේ අභ්‍යාසයක් විශේෂ වන්නේ කුමකින්ද?",
    [["It practices searching for visible and sub-surface casualties", "පෙනෙන සහ මතුපිටට යටින් සිටින විපතට පත්වූවන් සෙවීම පුහුණු කිරීමෙන්"], ["It excludes team coordination", "කණ්ඩායම් සම්බන්ධීකරණය බැහැර කිරීමෙන්"], ["It focuses only on equipment inventory", "උපකරණ ලැයිස්තුවට පමණක් අවධානය යොමු කිරීමෙන්"], ["It avoids calling and listening", "හඬ නඟා කතා කිරීම සහ සවන් දීමෙන් වැළකීමෙන්"]],
    0, "The search exercise includes secondary/extensive searches for visible and sub-surface casualties.", "පෙනෙන සහ මතුපිටට යටින් සිටින විපතට පත්වූවන් සඳහා ද්විතීයික/පුළුල් සෙවීම් මෙම අභ්‍යාසයට ඇතුළත් වේ."),
  createQuestion("Module 4: Search Module", "මොඩියුලය 4: සෙවීමේ මොඩියුලය",
    "Where might victims be located, according to the module?",
    "මොඩියුලයට අනුව විපතට පත්වූවන් සිටිය හැකි ස්ථානයක් කුමක්ද?",
    [["Void spaces beneath debris", "සුන්බුන් යට ඇති හිස් අවකාශ"], ["Only on open roads", "විවෘත මාර්ගවල පමණක්"], ["Only inside ambulances", "ගිලන් රථ තුළ පමණක්"], ["Only in designated safe areas", "නම් කළ ආරක්ෂිත ප්‍රදේශවල පමණක්"]],
    0, "Possible locations include the surface, lightly trapped areas, void spaces, basements, bathrooms, and stairwells.", "පෘෂ්ඨය, සුළු වශයෙන් සිරවූ ස්ථාන, හිස් අවකාශ, පහළමහල්, නානකාමර සහ පඩිපෙළ විපතට පත්වූවන් සිටිය හැකි ස්ථාන වේ."),
  createQuestion("Module 4: Search Module", "මොඩියුලය 4: සෙවීමේ මොඩියුලය",
    "Which activity is included in the search exercise?",
    "සෙවීමේ අභ්‍යාසයට ඇතුළත් ක්‍රියාකාරකමක් කුමක්ද?",
    [["Team coordination and reporting", "කණ්ඩායම් සම්බන්ධීකරණය සහ වාර්තා කිරීම"], ["Removing all scene controls", "සිද්ධි ස්ථාන පාලන සියල්ල ඉවත් කිරීම"], ["Avoiding communication", "සන්නිවේදනයෙන් වැළකීම"], ["Moving patients without assessment", "තක්සේරුවකින් තොරව රෝගීන් ගෙනයාම"]],
    0, "Team coordination and reporting are listed among the search-exercise activities.", "කණ්ඩායම් සම්බන්ධීකරණය සහ වාර්තා කිරීම සෙවීමේ අභ්‍යාස ක්‍රියාකාරකම් අතර වේ."),

  createQuestion("Module 5: Rescue Module", "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය",
    "Which basic safety practice is recommended during rescue operations?",
    "මුදාගැනීමේ මෙහෙයුම් අතරතුර නිර්දේශ කරන මූලික ආරක්ෂක ක්‍රියාවක් කුමක්ද?",
    [["Keep three points of contact", "සම්බන්ධතා ස්ථාන තුනක් පවත්වා ගැනීම"], ["Work alone whenever possible", "හැකි සෑම විටම තනිව වැඩ කිරීම"], ["Ignore instructions", "උපදෙස් නොසලකා හැරීම"], ["Move without looking around", "වටපිට නොබලා ගමන් කිරීම"]],
    0, "Keeping three points of contact is one of the module's basic safety rules.", "සම්බන්ධතා ස්ථාන තුනක් පවත්වා ගැනීම මොඩියුලයේ මූලික ආරක්ෂක නීතියකි."),
  createQuestion("Module 5: Rescue Module", "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය",
    "How should rescue activities be organized?",
    "මුදාගැනීමේ ක්‍රියාකාරකම් සංවිධානය කළ යුත්තේ කෙසේද?",
    [["Work in pairs or teams and follow a Plan of Action", "දෙදෙනෙකු හෝ කණ්ඩායම් ලෙස වැඩ කර ක්‍රියාකාරී සැලැස්මක් අනුගමනය කිරීම"], ["Work quietly without a plan", "සැලැස්මක් නොමැතිව නිහඬව වැඩ කිරීම"], ["Separate workers and avoid instructions", "සේවකයන් වෙන් කර උපදෙස් නොසලකා හැරීම"], ["Use equipment without guidance", "මඟපෙන්වීමකින් තොරව උපකරණ භාවිතා කිරීම"]],
    0, "The module recommends working in pairs or teams, following instructions, and using a Plan of Action.", "දෙදෙනෙකු හෝ කණ්ඩායම් ලෙස වැඩ කිරීම, උපදෙස් අනුගමනය කිරීම සහ ක්‍රියාකාරී සැලැස්මක් භාවිතා කිරීම මොඩියුලය නිර්දේශ කරයි."),
  createQuestion("Module 5: Rescue Module", "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය",
    "What is the purpose of shoring?",
    "Shoring කිරීමේ අරමුණ කුමක්ද?",
    [["Support a damaged structure and reduce secondary-collapse risk", "හානි වූ ව්‍යුහයකට ආධාරක ලබාදී ද්විතීයික කඩා වැටීමේ අවදානම අඩු කිරීම"], ["Make barriers unnecessary", "බාධක අනවශ්‍ය කිරීම"], ["Move debris without assessment", "තක්සේරුවකින් තොරව සුන්බුන් ගෙනයාම"], ["Replace all rescue equipment", "සියලු මුදාගැනීමේ උපකරණ වෙනුවට භාවිතා කිරීම"]],
    0, "Shoring operations include supporting damaged structures and reducing secondary-collapse risk.", "Shoring මෙහෙයුම්වලට හානි වූ ව්‍යුහයකට ආධාරක ලබාදීම සහ ද්විතීයික කඩා වැටීමේ අවදානම අඩු කිරීම ඇතුළත් වේ."),
  createQuestion("Module 5: Rescue Module", "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය",
    "When should debris movement be avoided?",
    "සුන්බුන් ගෙනයාමෙන් වැළකිය යුත්තේ කවදාද?",
    [["When debris is unstable or movement is unnecessary", "සුන්බුන් අස්ථාවර වූ විට හෝ ගෙනයාම අනවශ්‍ය වූ විට"], ["Whenever terrain can assist movement", "භූමිය ගෙනයාමට සහාය වන සෑම විටම"], ["Only after a team has assessed it", "කණ්ඩායමක් තක්සේරු කළ පසුව පමණක්"], ["When appropriate support is available", "සුදුසු ආධාරක පවතින විට"]],
    0, "The module advises avoiding debris if it is unstable or does not need to be moved.", "සුන්බුන් අස්ථාවර නම් හෝ ගෙනයාම අවශ්‍ය නොවේ නම් එයින් වැළකීමට මොඩියුලය උපදෙස් දෙයි."),
  createQuestion("Module 5: Rescue Module", "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය",
    "Before cutting or breaking debris, what should the team do?",
    "සුන්බුන් කැපීමට හෝ බිඳ දැමීමට පෙර කණ්ඩායම කළ යුත්තේ කුමක්ද?",
    [["Identify weak points and hazards, then secure the debris", "දුර්වල ස්ථාන සහ උපද්‍රව හඳුනාගෙන පසුව සුන්බුන් ආරක්ෂිත කිරීම"], ["Cut immediately without checking the debris pile", "සුන්බුන් ගොඩ පරීක්ෂා නොකර වහාම කැපීම"], ["Remove all shoring first", "පළමුව සියලු shoring ඉවත් කිරීම"], ["Ignore the wider impact", "පුළුල් බලපෑම නොසලකා හැරීම"]],
    0, "The module recommends identifying weak points and hazards and securing debris before cutting or breaking.", "කැපීමට හෝ බිඳ දැමීමට පෙර දුර්වල ස්ථාන සහ උපද්‍රව හඳුනාගෙන සුන්බුන් ආරක්ෂිත කළ යුතු බව මොඩියුලය නිර්දේශ කරයි."),

  createQuestion("Module 7: Consolidation Exercise", "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    "What is the main aim of the consolidation exercise?",
    "සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසයේ ප්‍රධාන අරමුණ කුමක්ද?",
    [["Practice and develop skills in a realistic environment", "යථාර්ථවාදී පරිසරයක කුසලතා පුහුණු කර වර්ධනය කිරීම"], ["Replace all practical training with lectures", "සියලු ප්‍රායෝගික පුහුණුව දේශනවලින් ප්‍රතිස්ථාපනය කිරීම"], ["Test only equipment inventory", "උපකරණ ලැයිස්තුව පමණක් පරීක්ෂා කිරීම"], ["Avoid combining course skills", "පාඨමාලාවේ කුසලතා ඒකාබද්ධ කිරීමෙන් වැළකීම"]],
    0, "The exercise provides an opportunity to practice and develop skills and knowledge in a realistic environment.", "යථාර්ථවාදී පරිසරයක කුසලතා සහ දැනුම පුහුණු කර වර්ධනය කිරීමට මෙම අභ්‍යාසය අවස්ථාව සලසයි."),
  createQuestion("Module 7: Consolidation Exercise", "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    "Who defines the organizational structures, safety rules, and constraints for an exercise?",
    "අභ්‍යාසයක සංවිධාන ව්‍යුහ, ආරක්ෂක නීති සහ සීමාවන් නිර්වචනය කරන්නේ කවුරුන්ද?",
    [["The trainers", "පුහුණුකරුවන්"], ["Bystanders", "අවට සිටින පුද්ගලයන්"], ["Patients", "රෝගීන්"], ["Equipment suppliers", "උපකරණ සැපයුම්කරුවන්"]],
    0, "The exercise parameters are defined by trainers.", "අභ්‍යාසයේ සීමාවන් පුහුණුකරුවන් විසින් නිර්වචනය කරනු ලැබේ."),
  createQuestion("Module 7: Consolidation Exercise", "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    "Which patient-care activity is explicitly included in the exercise scenarios?",
    "අභ්‍යාස අවස්ථාවන්ට පැහැදිලිව ඇතුළත් රෝගී සත්කාර ක්‍රියාකාරකමක් කුමක්ද?",
    [["Patient packaging", "රෝගියා ප්‍රවාහනයට සූදානම් කිරීම"], ["Hospital administration", "රෝහල් පරිපාලනය"], ["Vehicle repair", "වාහන අලුත්වැඩියාව"], ["Course registration", "පාඨමාලා ලියාපදිංචිය"]],
    0, "Patient packaging is listed among the simulated exercise requirements.", "රෝගියා ප්‍රවාහනයට සූදානම් කිරීම අභ්‍යාසයට ඇතුළත් අවශ්‍යතාවක් ලෙස සඳහන් වේ."),
  createQuestion("Module 7: Consolidation Exercise", "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    "Which combination best describes the skills combined in the exercise?",
    "අභ්‍යාසයේ ඒකාබද්ධ කරන කුසලතා වඩාත් හොඳින් විස්තර කරන සංයෝජනය කුමක්ද?",
    [["Scene assessment, search, rescue, and patient care", "සිද්ධි ස්ථාන තක්සේරුව, සෙවීම, මුදාගැනීම සහ රෝගී සත්කාරය"], ["Only mapping and photography", "සිතියම්ගත කිරීම සහ ඡායාරූප ගැනීම පමණක්"], ["Only equipment demonstrations", "උපකරණ ප්‍රදර්ශන පමණක්"], ["Only classroom discussion", "පන්තිකාමර සාකච්ඡා පමණක්"]],
    0, "The consolidation exercise combines scene assessment, search, rescue, and patient assessment and treatment.", "සමස්ත අභ්‍යාසය සිද්ධි ස්ථාන තක්සේරුව, සෙවීම, මුදාගැනීම සහ රෝගී තක්සේරුව හා ප්‍රතිකාර ඒකාබද්ධ කරයි."),
  createQuestion("Module 7: Consolidation Exercise", "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය",
    "What is one of the final activities included in the exercise scenario?",
    "අභ්‍යාස අවස්ථාවට ඇතුළත් අවසාන ක්‍රියාකාරකමක් කුමක්ද?",
    [["Evacuation", "ඉවත් කිරීම"], ["Removing all safety controls", "සියලු ආරක්ෂක පාලන ඉවත් කිරීම"], ["Stopping team communication", "කණ්ඩායම් සන්නිවේදනය නතර කිරීම"], ["Skipping patient assessment", "රෝගී තක්සේරුව මඟහැරීම"]],
    0, "Evacuation is included among the exercise scenario activities.", "ඉවත් කිරීම අභ්‍යාස අවස්ථාවේ ක්‍රියාකාරකම් අතරට ඇතුළත් වේ.")
];

export const quizQuestionSets = {
  operational: [
    {
      topic: { en: "Module 1: First Responder Programme", si: "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන" },
      question: {
        en: "Which action is part of a first responder's role during the initial phase of a disaster?",
        si: "ආපදාවක මුල් අදියරේදී ප්‍රථම ප්‍රතිචාරකයෙකුගේ කාර්යභාරයට අයත් වන්නේ කුමක්ද?"
      },
      options: [
        { en: "Assess damage and request the resources needed", si: "හානි තක්සේරු කර අවශ්‍ය සම්පත් ඉල්ලා සිටීම" },
        { en: "Enter every damaged building immediately", si: "හානි වූ සෑම ගොඩනැගිල්ලකටම වහාම ඇතුළු වීම" },
        { en: "Wait until international assistance arrives", si: "ජාත්‍යන්තර සහාය ලැබෙන තෙක් බලා සිටීම" },
        { en: "Work without communicating with the community", si: "ප්‍රජාව සමඟ සන්නිවේදනය නොකර වැඩ කිරීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The module describes assessing damage, requesting resources, and guiding the local community as first-responder responsibilities.",
        si: "හානි තක්සේරු කිරීම, සම්පත් ඉල්ලා සිටීම සහ ප්‍රාදේශීය ප්‍රජාවට මඟපෙන්වීම ප්‍රථම ප්‍රතිචාරකයන්ගේ වගකීම් ලෙස මොඩියුලයේ සඳහන් වේ."
      }
    },
    {
      topic: { en: "Module 2: The Rescue Environment", si: "මොඩියුලය 2: මුදාගැනීමේ පරිසරය" },
      question: {
        en: "What is the sequence of the main rescue operation stages in the module?",
        si: "මොඩියුලයේ සඳහන් ප්‍රධාන මුදාගැනීමේ මෙහෙයුම් අදියර අනුපිළිවෙළ කුමක්ද?"
      },
      options: [
        { en: "Rescue, reconnaissance, search", si: "මුදාගැනීම, ප්‍රදේශ නිරීක්ෂණය, සෙවීම" },
        { en: "Search, rescue, reconnaissance", si: "සෙවීම, මුදාගැනීම, ප්‍රදේශ නිරීක්ෂණය" },
        { en: "Reconnaissance, search, rescue", si: "ප්‍රදේශ නිරීක්ෂණය, සෙවීම, මුදාගැනීම" },
        { en: "Treatment, evacuation, reconnaissance", si: "ප්‍රතිකාර, ඉවත් කිරීම, ප්‍රදේශ නිරීක්ෂණය" }
      ],
      answerIndex: 2,
      explanation: {
        en: "The module presents reconnaissance first, followed by search and then rescue.",
        si: "මොඩියුලයට අනුව පළමුව ප්‍රදේශ නිරීක්ෂණය, ඉන්පසු සෙවීම සහ අවසානයේ මුදාගැනීම සිදු වේ."
      }
    },
    {
      topic: { en: "Module 3: Scene Management", si: "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය" },
      question: {
        en: "According to the scene-management guidance, how is the hazard-zone distance from a damaged structure described?",
        si: "සිද්ධි ස්ථාන කළමනාකරණ මාර්ගෝපදේශයට අනුව හානි වූ ගොඩනැගිල්ලක උපද්‍රව කලාපයේ දුර විස්තර කරන්නේ කෙසේද?"
      },
      options: [
        { en: "The same as the structure's height", si: "ගොඩනැගිල්ලේ උසට සමාන දුරක් ලෙස" },
        { en: "Closer than 1.5 times the structure's height", si: "ගොඩනැගිල්ලේ උස මෙන් 1.5 ගුණයකට වඩා ආසන්න ප්‍රදේශයක් ලෙස" },
        { en: "Only the area directly beneath the structure", si: "ගොඩනැගිල්ලට කෙළින්ම පහළ ප්‍රදේශය පමණක් ලෙස" },
        { en: "A fixed distance of 10 metres for every building", si: "සෑම ගොඩනැගිල්ලකටම මීටර් 10ක නියත දුරක් ලෙස" }
      ],
      answerIndex: 1,
      explanation: {
        en: "The module identifies locations closer than 1.5 times a damaged structure's height as a hazard zone.",
        si: "හානි වූ ගොඩනැගිල්ලේ උස මෙන් 1.5 ගුණයකට වඩා ආසන්න ස්ථාන උපද්‍රව කලාපයක් ලෙස මොඩියුලයේ දක්වා ඇත."
      }
    },
    {
      topic: { en: "Module 4: Search Module", si: "මොඩියුලය 4: සෙවීමේ මොඩියුලය" },
      question: {
        en: "During the listening phase of a Line and Hail search, what is essential?",
        si: "Line and Hail සෙවීමේදී සවන් දෙන අදියරේ අත්‍යවශ්‍ය වන්නේ කුමක්ද?"
      },
      options: [
        { en: "Keep calling continuously", si: "අඛණ්ඩව හඬ නඟා කතා කිරීම" },
        { en: "Maintain silence", si: "නිශ්ශබ්දතාව පවත්වා ගැනීම" },
        { en: "Move debris while listening", si: "සවන් දෙන අතරතුර සුන්බුන් ඉවත් කිරීම" },
        { en: "Separate the team without a plan", si: "සැලැස්මක් නොමැතිව කණ්ඩායම වෙන් කිරීම" }
      ],
      answerIndex: 1,
      explanation: {
        en: "The search module states that silence is essential during listening phases so signals can be heard.",
        si: "සංඥා ඇසීමට හැකි වන පරිදි සවන් දෙන අදියරවලදී නිශ්ශබ්දතාව අත්‍යවශ්‍ය බව සෙවීමේ මොඩියුලයේ සඳහන් වේ."
      }
    },
    {
      topic: { en: "Module 5: Rescue Module", si: "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය" },
      question: {
        en: "Which item is listed as a method for supporting debris during lifting and moving operations?",
        si: "එසවීමේ සහ ගෙනයාමේ මෙහෙයුම්වලදී සුන්බුන් ආධාරක කිරීමට සඳහන් කර ඇති ක්‍රමයක් කුමක්ද?"
      },
      options: [
        { en: "Crib systems", si: "Crib ආධාරක පද්ධති" },
        { en: "Unsecured ropes only", si: "ආරක්ෂිතව සවි නොකළ කඹ පමණක්" },
        { en: "Moving debris without assessment", si: "තක්සේරුවකින් තොරව සුන්බුන් ගෙනයාම" },
        { en: "Removing all supports first", si: "පළමුව සියලු ආධාරක ඉවත් කිරීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The module lists levers, blocks, wedges, rollers, and crib systems among the tools used to support or move debris.",
        si: "සුන්බුන් ආධාරක කිරීමට හෝ ගෙනයාමට භාවිතා කරන ක්‍රම ලෙස levers, blocks, wedges, rollers සහ crib පද්ධති මොඩියුලයේ සඳහන් වේ."
      }
    },
    {
      topic: { en: "Module 7: Consolidation Exercise", si: "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය" },
      question: {
        en: "Which set of activities is included in the consolidation exercise?",
        si: "සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසයට ඇතුළත් වන ක්‍රියාකාරකම් සමූහය කුමක්ද?"
      },
      options: [
        { en: "Scene assessment, search, rescue, patient care, and evacuation", si: "සිද්ධි ස්ථාන තක්සේරුව, සෙවීම, මුදාගැනීම, රෝගී සත්කාරය සහ ඉවත් කිරීම" },
        { en: "Only classroom lectures and written exams", si: "පන්තිකාමර දේශන සහ ලිඛිත විභාග පමණක්" },
        { en: "Only equipment inventory and vehicle maintenance", si: "උපකරණ ලැයිස්තුගත කිරීම සහ වාහන නඩත්තුව පමණක්" },
        { en: "Only mapping with no operational practice", si: "මෙහෙයුම් පුහුණුවක් නොමැතිව සිතියම්ගත කිරීම පමණක්" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The exercise combines scene assessment, search, rescue, patient assessment and treatment, packaging, and evacuation.",
        si: "මෙම අභ්‍යාසය සිද්ධි ස්ථාන තක්සේරුව, සෙවීම, මුදාගැනීම, රෝගී තක්සේරුව සහ ප්‍රතිකාර, ඇසුරුම් කිරීම සහ ඉවත් කිරීම ඒකාබද්ධ කරයි."
      }
    },
    ...additionalOperationalQuestions
  ],
  medical: [
    {
      topic: { en: "6.1 Basic Medical Rescue", si: "6.1 මූලික වෛද්‍ය ගලවා ගැනීම" },
      question: {
        en: "What should be done before providing assistance at an emergency scene?",
        si: "හදිසි සිද්ධි ස්ථානයක සහාය ලබාදීමට පෙර කළ යුත්තේ කුමක්ද?"
      },
      options: [
        { en: "Check personal safety and identify immediate risks", si: "තම ආරක්ෂාව පරීක්ෂා කර ක්ෂණික අවදානම් හඳුනාගැනීම" },
        { en: "Move the patient immediately", si: "රෝගියා වහාම ගෙනයාම" },
        { en: "Provide treatment before assessing the situation", si: "තත්ත්වය තක්සේරු කිරීමට පෙර ප්‍රතිකාර ලබාදීම" },
        { en: "Ignore hazards if help is nearby", si: "සහාය අසල තිබේ නම් උපද්‍රව නොසලකා හැරීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The medical guidance prioritizes personal safety and assessment of the situation before care is provided.",
        si: "වෛද්‍ය මාර්ගෝපදේශ අනුව සත්කාර ලබාදීමට පෙර පුද්ගලික ආරක්ෂාව සහ තත්ත්වය තක්සේරු කිරීමට ප්‍රමුඛත්වය දිය යුතුය."
      }
    },
    {
      topic: { en: "6.2 Scene Assessment", si: "6.2 සිද්ධි ස්ථාන ඇගයීම" },
      question: {
        en: "What is the first priority when approaching a patient?",
        si: "රෝගියෙකු වෙත ළඟාවීමේදී පළමු ප්‍රමුඛතාවය කුමක්ද?"
      },
      options: [
        { en: "Check for hazards and make sure the area is safe", si: "උපද්‍රව පරීක්ෂා කර ප්‍රදේශය ආරක්ෂිත බව තහවුරු කිරීම" },
        { en: "Start moving the patient", si: "රෝගියා ගෙනයාම ආරම්භ කිරීම" },
        { en: "Remove the patient's protective equipment", si: "රෝගියාගේ ආරක්ෂක උපකරණ ඉවත් කිරීම" },
        { en: "Ask bystanders to enter the scene", si: "සිද්ධි ස්ථානයට ඇතුළු වන ලෙස අවට සිටින අයට පැවසීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "Scene assessment calls for checking hazards and ensuring the area is safe before approaching or assisting a patient.",
        si: "රෝගියෙකු වෙත ළඟාවීමට හෝ සහාය ලබාදීමට පෙර උපද්‍රව පරීක්ෂා කර ප්‍රදේශය ආරක්ෂිත බව තහවුරු කළ යුතුය."
      }
    },
    {
      topic: { en: "6.3 Patient Assessment", si: "6.3 රෝගී තත්ත්ව ඇගයීම" },
      question: {
        en: "In the AVPU method, what does 'V' mean?",
        si: "AVPU ක්‍රමයේ 'V' යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
      },
      options: [
        { en: "The patient responds to voice", si: "රෝගියා හඬට ප්‍රතිචාර දක්වයි" },
        { en: "The patient is ventilating normally", si: "රෝගියා සාමාන්‍ය ලෙස හුස්ම ගනී" },
        { en: "The patient has a visible injury", si: "රෝගියාට පෙනෙන තුවාලයක් ඇත" },
        { en: "The patient is fully recovered", si: "රෝගියා සම්පූර්ණයෙන් සුවය ලබා ඇත" }
      ],
      answerIndex: 0,
      explanation: {
        en: "AVPU describes Alert, responds to Voice, responds to Pain, and Unresponsive.",
        si: "AVPU යනු Alert, Voice හඬට ප්‍රතිචාර දැක්වීම, Pain වේදනාවට ප්‍රතිචාර දැක්වීම සහ Unresponsive ප්‍රතිචාර නොදැක්වීමයි."
      }
    },
    {
      topic: { en: "6.4 Patient Treatment", si: "6.4 රෝගී ප්‍රතිකාර" },
      question: {
        en: "What basic response does the guidance give for severe bleeding?",
        si: "දැඩි රුධිර වහනයක් සඳහා මාර්ගෝපදේශයේ සඳහන් මූලික ප්‍රතිචාරය කුමක්ද?"
      },
      options: [
        { en: "Apply direct pressure and use appropriate bleeding-control methods", si: "සෘජු පීඩනය යොදා සුදුසු රුධිර වහනය පාලන ක්‍රම භාවිතා කිරීම" },
        { en: "Remove any object embedded in the wound", si: "තුවාලයේ ඇතුළුවී ඇති වස්තුව ඉවත් කිරීම" },
        { en: "Wait without seeking qualified help", si: "සුදුසුකම් ලත් සහාය නොඉල්ලා බලා සිටීම" },
        { en: "Straighten any injured limb", si: "තුවාල වූ අතක් හෝ පාදයක් කෙළින් කිරීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The simplified guidance recommends direct pressure and appropriate bleeding-control methods, while seeking qualified assistance.",
        si: "සරල මාර්ගෝපදේශය සෘජු පීඩනය සහ සුදුසු රුධිර වහනය පාලන ක්‍රම නිර්දේශ කරන අතර සුදුසුකම් ලත් සහාය ලබාගැනීමද වැදගත් වේ."
      }
    },
    {
      topic: { en: "6.5 Patient Handling", si: "6.5 රෝගීන් හැසිරවීම" },
      question: {
        en: "Which practice helps protect a patient's condition during movement?",
        si: "චලනය අතරතුර රෝගියාගේ තත්ත්වය ආරක්ෂා කිරීමට උපකාරී වන්නේ කුමන ක්‍රියාවද?"
      },
      options: [
        { en: "Assess first and coordinate movement with the rescue team", si: "පළමුව තක්සේරු කර ගලවා ගැනීමේ කණ්ඩායම සමඟ චලනය සම්බන්ධීකරණය කිරීම" },
        { en: "Move the patient without checking the environment", si: "පරිසරය පරීක්ෂා නොකර රෝගියා ගෙනයාම" },
        { en: "Move the patient as often as possible", si: "රෝගියා හැකි සෑම විටම ගෙනයාම" },
        { en: "Use equipment without checking whether it is appropriate", si: "සුදුසුදැයි පරීක්ෂා නොකර උපකරණ භාවිතා කිරීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The guidance recommends assessment before moving, coordination with the rescue team, appropriate equipment, and avoiding unnecessary movement.",
        si: "ගෙනයාමට පෙර තක්සේරු කිරීම, ගලවා ගැනීමේ කණ්ඩායම සමඟ සම්බන්ධීකරණය, සුදුසු උපකරණ භාවිතය සහ අනවශ්‍ය චලනයෙන් වැළකීම මාර්ගෝපදේශය නිර්දේශ කරයි."
      }
    },
    {
      topic: { en: "6.6 Respectful Handling of Deceased Persons", si: "6.6 මියගිය පුද්ගලයන්ට ගෞරවනීය සැලකීම" },
      question: {
        en: "Which approach is appropriate when handling a deceased person?",
        si: "මියගිය පුද්ගලයෙකු සමඟ කටයුතු කිරීමේදී සුදුසු ප්‍රවේශය කුමක්ද?"
      },
      options: [
        { en: "Maintain dignity, use appropriate PPE, and document accurately", si: "ගෞරවය රැකීම, සුදුසු PPE භාවිතා කිරීම සහ නිවැරදිව ලේඛනගත කිරීම" },
        { en: "Move the person without recording the location", si: "ස්ථානය සටහන් නොකර පුද්ගලයා ගෙනයාම" },
        { en: "Ignore cultural sensitivity and local practices", si: "සංස්කෘතික සංවේදීතාව සහ ප්‍රාදේශීය චාරිත්‍ර නොසලකා හැරීම" },
        { en: "Handle the person without protective equipment", si: "ආරක්ෂක උපකරණ නොමැතිව පුද්ගලයා හැසිරවීම" }
      ],
      answerIndex: 0,
      explanation: {
        en: "The module emphasizes dignity, appropriate PPE, accurate documentation and location records, and cultural sensitivity.",
        si: "ගෞරවය, සුදුසු PPE, නිවැරදි ලේඛනගත කිරීම සහ ස්ථානය සටහන් කිරීම මෙන්ම සංස්කෘතික සංවේදීතාවද මොඩියුලය අවධාරණය කරයි."
      }
    }
  ]
};
