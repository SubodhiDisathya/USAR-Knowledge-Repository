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

// සුනිල් මහතාගේ Story 01 සඳහා ඇති පින්තූර
import story1Img from "../assets/1story.jpeg";
import story1_1Img from "../assets/1.1story.jpeg";
import story1_2Img from "../assets/1.2story.jpeg";

// Construction Rebar Rescue (නව පින්තූර තුන)
import rebarImg1 from "../assets/story1..png";
import rebarImg2 from "../assets/story1.2.png";
import rebarImg3 from "../assets/stoy01.png";

// සුනිමල් මහතාගේ 3 වන Story එක සඳහා නව පින්තූර
import story3_1Img from "../assets/3.1story.png";
import story3_2Img from "../assets/3.2stoory.png";
import story3Img from "../assets/3story.png";

// සුනිමල් මහතාගේ 4 වන Story එක සඳහා නව පින්තූරය
import story4Img from "../assets/4story.png";

export default function ViewExperience() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useLocale();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

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
      summarySoon: "(Detailed story records for this officer will be updated soon.)",
      selectStory: "Select Incident / Story:"
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
      summarySoon: "(මෙම නිලධාරියාගේ විස්තර ඉක්මනින් යාවත්කාලීන කෙරේ.)",
      selectStory: "සිදුවීම / අත්දැකීම තෝරන්න:"
    }
  };

  const realExperiences = [
    {
      id: 1,
      title: locale === "si" ? "භාර පුහුණු නිලධාරී" : "Training Officer In Charge",
      responder: "PAC Ranjan Kumara",
      organization: locale === "si" ? "ගිනි නිවීම් සහ ගැලවුම්කරණ පුහුණු ඇකඩමිය, වැල්ලවත්ත" : "Fire & Rescue Training Academy, Wellawatte",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" 
        ? "අභියෝගාත්මක නායකත්වය, විශේෂිත පුහුණු සම්බන්ධීකරණය සහ අවදානම් සහගත පරිසරයන්හි ගැලවුම්කරණ ක්‍රමවේද ලබා දෙන පළපුරුදු පුහුණු නිලධාරී." 
        : "Experienced Training Officer In Charge providing critical leadership, specialized training coordination, and rescue protocols in high-risk urban environments.",
      type: locale === "si" ? "පුහුණු සහ මෙහෙයුම්" : "Training & Operations",
      location: locale === "si" ? "ශ්‍රී ලංකාව" : "Sri Lanka",
      image: ranjanImg,
      storyDetailsList: [
        {
          incidentTitle: locale === "si" ? "පයිප්පයක් තුළ සිරවූ පුද්ගලයන් දෙදෙනෙකු මුදාගැනීමේ මෙහෙයුම" : "Rescue of Two People Trapped Inside a Pipe",
          incidentYear: "2022",
          incidentType: locale === "si" ? "සීමිත අවකාශයක සිදුකළ ගැලවුම්කරණ මෙහෙයුමක්" : "Confined-Space Rescue / Trapped Person Rescue",
          storyImages: [
            { img: pipelineImg, caption: locale === "si" ? "පයිප්ප / ශේෂ ටැංකි ස්ථානයේ ගැලවුම්කරණ මෙහෙයුම" : "Rescue Operation at the Pipe / Balance Tank Site" },
            { img: newspaperImg, caption: locale === "si" ? "සිදුවීම පිළිබඳ පුවත්පත් මාධ්‍ය ආවරණය" : "Newspaper Media Coverage of the Incident" }
          ],
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
            locale === "si" ? "වින්දිතයන් මුදාගැනීම: සිරවූවන් ආරක්ෂිතව ඉවතට ගැනීම." : "Victim Rescue: The trapped persons were carefully assisted and brought out of the confined space."
          ],
          lessons: [
            locale === "si" ? "ආරක්ෂාව: සීමිත අවකාශයක මෙහෙයුම් සඳහා ඇතුළු වීමට පෙර හොඳින් පරීක්ෂා කිරීම සහ ආරක්ෂක උපකරණ අවශ්‍ය වේ." : "Safety: Confined-space rescue requires careful assessment and appropriate protective equipment before entering.",
            locale === "si" ? "කණ්ඩායම් ක්‍රියාකාරිත්වය: පටු පරිසරයන්හිදී සම්බන්ධීකරණය අත්‍යවශ්‍ය වේ." : "Teamwork: Clear coordination between the rescuer and supporting team is important in restricted environments."
          ],
          recommendations: [
            locale === "si" ? "සීමිත අවකාශයන්හි ගැලවුම්කරණ පුහුණුව වැඩි කිරීම" : "Increase confined-space rescue training",
            locale === "si" ? "විශේෂිත උපකරණ නඩත්තු කිරීම" : "Maintain specialised confined-space rescue equipment"
          ]
        }
      ]
    },
    {
      id: 2,
      title: locale === "si" ? "පුහුණු මෙහෙයුම් නිලධාරී" : "Training Operations & Training Officer",
      responder: "PK Pathmasiri",
      organization: locale === "si" ? "පුහුණු අංශය" : "Training Division",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "උසස් ගිනි නිවීමේ ක්‍රමවේද සහ හදිසි සූදානම් වීම් පිළිබඳ විශේෂඥ පුහුණු නිලධාරී." : "Specialized Training Officer focusing on advanced firefighting techniques.",
      type: locale === "si" ? "ගිනි ආරක්ෂණය" : "Fire Safety",
      location: locale === "si" ? "කොළඹ" : "Colombo"
    },
    {
      id: 3,
      title: locale === "si" ? "සහායක ප්‍රධාන ගිනි නිවීම් නිලධාරී" : "Fire Assistant Chief & Fire Officer",
      responder: "TLSS Nandasiri",
      organization: locale === "si" ? "ගිනි නිවීම් විධානය" : "Fire Command Unit",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "මහා පරිමාණ ව්‍යසන අවම කිරීමේ මෙහෙයුම් අධීක්ෂණය කරන සහායක ප්‍රධාන ගිනි නිවීම් නිලධාරී." : "Assistant Chief Fire Officer overseeing major disaster mitigation.",
      type: locale === "si" ? "හදිසි විධානය" : "Emergency Command",
      location: locale === "si" ? "කොළඹ" : "Colombo"
    },
    {
      id: 4,
      title: locale === "si" ? "කොටස් මෙහෙයුම් කළමනාකරණය" : "Sectional Operations Management",
      responder: "WVDA Sunimal",
      organization: locale === "si" ? "මෙහෙයුම් අංශය" : "Operations Section",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "බිම් මට්ටමේ මෙහෙයුම් සහ උපකරණ සූදානම පාලනය කරන අංශ ප්‍රධානියා." : "Section Officer managing ground operations, equipment readiness, and rapid response deployment.",
      type: locale === "si" ? "නගර සෙවීම සහ ගැලවීම" : "Urban Search & Rescue",
      location: locale === "si" ? "කොළඹ" : "Colombo",
      image: sunimalImg,
      storyDetailsList: [
        {
          incidentTitle: locale === "si" ? "ඉදිකිරීම් ස්ථාන යකඩ දඬු (Rebar) අනතුරු ගැලවුම් මෙහෙයුම" : "Construction Rebar Rescue",
          incidentYear: "2023",
          incidentType: locale === "si" ? "ඉදිකිරීම් ස්ථාන හදිසි අනතුරු ප්‍රතිචාරය" : "Construction Site Accident Response",
          storyImages: [
            { img: rebarImg1, caption: locale === "si" ? "ඉදිකිරීම් ස්ථාන සිදුවීම් දර්ශනය 01" : "Construction Site Incident Visual 01" },
            { img: rebarImg2, caption: locale === "si" ? "ඉදිකිරීම් ස්ථාන සිදුවීම් දර්ශනය 02" : "Construction Site Incident Visual 02" },
            { img: rebarImg3, caption: locale === "si" ? "ඉදිකිරීම් ස්ථාන සිදුවීම් දර්ශනය 03" : "Construction Site Incident Visual 03" }
          ],
          storyText: locale === "si" 
            ? "ගොඩනැඟිල්ලක ඉහළ මාලයකට දිගු වානේ ශක්තිමත් කිරීමේ දඬු (rebars) ඔසවමින් සිටියදී ගොඩනැඟිලි ඉදිකිරීම් ස්ථානයක බරපතල අනතුරක් සිදු විය. වැඩ කටයුතු අතරතුර දඬු ලණු වලින් එකට බැඳ ඔසවන ලදී.\n\nඔසවමින් සිටියදී ලණුව ලිහිල් වීම හේතුවෙන් දිගු යකඩ දඬු කිහිපයක් පහළට පතිත විය. පහළ සිටි පුරුෂයෙකු මතට යකඩ දඬු හතරක් පතිත වූ අතර, ඒවා ඔහුගේ සිරුරේ විවිධ කොටස් තුළට කිඳා බැස්සެވެ.\n\nතුවාල ලැබූ සේවකයාට බරපතල තුවාල සිදු වී ඇති අතර වහාම ගැලවුම්කරණ ආධාර අවශ්‍ය විය. ගිනි නිවීම් සේවා කණ්ඩායම එම ස්ථානයට පැමිණ තත්ත්වය ප්‍රවේශමෙන් තක්සේරු කළේය.\n\nයකඩ දඬු සේවකයාගේ සිරුරට කිඳා බැස තිබූ බැවින්, ගැලවුම්කරණයේදී ඒවා බලහත්කාරයෙන් ඇද ගැනීමට නොහැකි විය. එමනිසා ගිනි නිවීම් කණ්ඩායම විසින් එම ස්ථානයේදීම යකඩ දඬු කපා ඒවායේ දිග අඩු කර තුවාල ලැබූ සේවකයා ආරක්ෂිතව ප්‍රවාහනය කිරීමට කටයුතු කළහ.\n\nඉන්පසු එම සේවකයා වැඩිදුර වෛද්‍ය ප්‍රතිකාර සඳහා ගිලන් රථයෙන් රෝහල වෙත ගෙන යන ලදී.\n\nරෝහලේදී තවත් අපහසුතාවකට මුහුණ දීමට සිදු විය. ඉතිරි යකඩ දඬු තවදුරටත් දිග වැඩි වැඩි වූ බැවින්, රෝගියා රෝහල් ඇඳ මතට සහ ශල්‍යාගාරය තුළට ආරක්ෂිතව ගෙනයාම අසාధ్య විය. එබැවින් ගිනි නිවීම් කණ්ඩායම නැවතත් සහයෝගය ලබා දී රෝහල ඇතුළත ඉතිරි යකඩ දඬු කොටස් ප්‍රවේශමෙන් කපා ඉවත් කළහ.\n\nයකඩ දඬු කොටස් කෙටි කිරීමෙන් පසු රෝගියා ආරක්ෂිතව ඇඳ මතට ගෙන වැඩිදුර ප්‍රතිකාර සඳහා ශල්‍යාගාරය වෙත ගෙන යන ලදී."
            : "A serious accident occurred at a building construction site while workers were lifting long steel reinforcement bars (rebars) to an upper level of the building. The rebars were tied together with ropes and lifted during the construction work.\n\nDuring the lifting operation, the rope became loose, causing several long rebars to fall downward. A male worker below was struck by four rebars, which became embedded in different parts of his body.\n\nThe injured worker sustained serious injuries and required immediate rescue assistance. The Fire Brigade team arrived at the scene and carefully assessed the situation.\n\nAs the rebars were embedded in the worker's body, they could not be pulled out during the rescue. The Fire Brigade team therefore cut the rebars at the scene to reduce their length and allow the injured worker to be safely transported.\n\nThe worker was then taken to the hospital by ambulance for further medical treatment.\n\nAt the hospital, another difficulty was encountered. The remaining rebars were still too long, making it impossible to move the patient onto the hospital bed and into the operating theatre safely. Therefore, the Fire Brigade team assisted again and carefully cut the remaining sections of the rebars inside the hospital.\n\nAfter the rebars were shortened, the patient could be safely moved onto the bed and taken into the operating theatre for further treatment.",
          challenges: [
            locale === "si" ? "දිගු යකඩ දඬු හතරක් තුවාල ලැබූ සේවකයාගේ සිරුර තුළට කිඳා බැස තිබුණි." : "Four long rebars were embedded in the injured worker's body.",
            locale === "si" ? "අනතුරු සිදු වූ ස්ථානයේදී යකඩ දඬු ඉවත් කිරීමට නොහැකි විය." : "The rebars could not be removed at the accident scene.",
            locale === "si" ? "රෝහල තුළ රෝගියා ගමන් කරවීමේදී ඉතිරි යකඩ දඬු වල දිග ගැටළු ඇති කළේය." : "The remaining length of the rebars created difficulties when moving the patient inside the hospital.",
            locale === "si" ? "යකඩ දඬු අධික දිග වැඩි නිසා රෝගියාට මූලිකව රෝහල් ඇඳට හෝ ශල්‍යාගාරයට යාමට නොහැකි විය." : "The patient could not initially be moved onto the hospital bed or into the operating theatre because the rebars were too long.",
            locale === "si" ? "රෝහල ඇතුළතදී අතිරේකව කපා ඉවත් කිරීම් අවශ්‍ය විය." : "Additional cutting was required inside the hospital."
          ],
          actions: [
            locale === "si" ? "ගිනි නිවීම් සේවා කාර්ය මණ්ඩලය ඉදිකිරීම් ස්ථානයේ අනතුරට වහාම ප්‍රතිචාර දැක්වීය." : "Fire Brigade personnel responded to the construction-site accident.",
            locale === "si" ? "තත්ත්වය තක්සේරු කර තුවාල ලැබූ සේවකයා සුරක්ෂිත කරන ලදී." : "The situation was assessed and the injured worker was secured.",
            locale === "si" ? "කිඳා බැස තිබූ යකඩ දඬු බලහත්කාරයෙන් ඉවත් නොකරන ලදී." : "The embedded rebars were not forcibly removed from the worker's body.",
            locale === "si" ? "අනතුරු සිදු වූ ස්ථානයේදී යකඩ දඬු වල දිග අඩු කිරීම සඳහා ඒවා ප්‍රවේශමෙන් කපන ලදී." : "The rebars were carefully cut at the accident scene to reduce their length.",
            locale === "si" ? "තුවාල ලැබූ සේවකයා ගිලන් රථයෙන් රෝහල වෙත ප්‍රවාහනය කරන ලදී." : "The injured worker was transported to the hospital by ambulance.",
            locale === "si" ? "රෝහලේදී, රෝගියා ඇඳ මතට ගෙනයාමට යකඩ දඬු වැඩි වැඩි බව නිරීක්ෂණය විය." : "At the hospital, the remaining rebars were found to be too long to move the patient onto the bed and into the operating theatre.",
            locale === "si" ? "ගිනි නිවීම් කණ්ඩායම ඉතිරි යකඩ දඬු කොටස් කපා රෝහල් කණ්ඩායමට සහය විය." : "Fire Brigade personnel assisted the hospital team by cutting the remaining sections of the rebars.",
            locale === "si" ? "පසුව රෝගියා ආරක්ෂිතව ඇඳ මතට සහ ශල්‍යාගාරය වෙත ගෙන යන ලදී." : "The patient was then moved safely onto the bed and into the operating theatre."
          ],
          lessons: [
            locale === "si" ? "ඔසවා තැබීමේ මෙහෙයුම් අසාර්ථක වූ විට දිගු ඉදිකිරීම් ද්‍රව්‍ය බරපතල තුවාල ඇති කළ හැක." : "Long construction materials can cause serious injuries when lifting operations fail.",
            locale === "si" ? "ගැලවුම්කරණ මෙහෙයුම් වලදී සිරුරට කිඳා බැස ඇති වස්තු බලහත්කාරයෙන් ඉවත් නොකළ යුතුය." : "Embedded objects should not be forcibly removed during rescue operations.",
            locale === "si" ? "රෝගියා ආරක්ෂිතව ගමන් කරවීම සඳහා කිඳා බැස ඇති වස්තුවක් කැපීම අවශ්‍ය විය හැක." : "Cutting an embedded object may be necessary to facilitate safe patient movement.",
            locale === "si" ? "ගැලවුම්කරණ සැලසුම් කිරීමේදී රෝගියා සිදුවීම් ස්ථානයේ සිට රෝහලට සහ ප්‍රතිකාර ප්‍රදේශයට ගෙනයාම සලකා බැලිය යුතුය." : "Rescue planning should consider the patient's movement from the incident site to the hospital and into the treatment area.",
            locale === "si" ? "සංකීර්ණ ගැලවුම්කරණ අවස්ථාවන්හිදී ගිනි නිවීම් සහ රෝහල් කාර්ය මණ්ඩලය අතර ඵලදායී සම්බන්ධීකරණය වැදගත් වේ." : "Effective coordination between Fire Brigade and hospital personnel is important during complex rescue situations."
          ],
          recommendations: [
            locale === "si" ? "ඉදිකිරීම් ස්ථානවල දිගු යකඩ දඬු ඔසවන විට ආරක්ෂිත ක්‍රමවේද භාවිත කළ යුතුය." : "Construction sites should use secure methods when lifting long reinforcement bars.",
            locale === "si" ? "ඔසවා තැබීමේ මෙහෙයුම් වලදී ලණු සහ උපාංග පරීක්ෂා කළ යුතුය." : "Ropes and lifting equipment should be checked before and during lifting operations.",
            locale === "si" ? "සේවකයන් අත්හිටුවන ලද ඉදිකිරීම් ද්‍රව්‍ය වලින් ආරක්ෂිත දුරක් පවත්වා ගත යුතුය." : "Workers should maintain a safe distance from suspended construction materials.",
            locale === "si" ? "හදිසි කණ්ඩායම් සිරුරට කිඳා බැස ඇති වස්තු සම්බන්ධ අනතුරු හැසිරවීමට සූදානම් විය යුතුය." : "Emergency teams should be prepared to handle incidents involving embedded objects.",
            locale === "si" ? "රෝහල් සහ හදිසි සේවා සතුව විශාල කිඳා බැසගත් වස්තු සහිත රෝගීන් ආරක්ෂිතව කළමනාකරණය කිරීමට ක්‍රියා පටිපාටි තිබිය යුතුය." : "Hospitals and emergency services should have procedures for safely managing patients with large embedded objects.",
            locale === "si" ? "ගැලවුම්කරණ කණ්ඩායම් සම්පූර්ණ ගැලවුම්කරණ සහ වෛද්‍ය ප්‍රතිකාර ක්‍රියාවලිය පුරාම ප්‍රදේශ සහ චලන අවශ්‍යතා සලකා බැලිය යුතුය." : "Rescue teams should consider access and movement requirements throughout the entire rescue and medical treatment process."
          ]
        },
        {
          incidentTitle: locale === "si" ? "වැල්ලවත්ත යහළුවන් දෙදෙනෙකු සම්බන්ධ සිදුවීම" : "Wellawatte Incident Involving Two Friends",
          incidentYear: "2024",
          incidentType: locale === "si" ? "හදිසි ගැලවුම්කරණ සිදුවීමක්" : "Emergency Rescue Incident",
          storyImages: [
            { img: story3_1Img, caption: locale === "si" ? "වැල්ලවත්ත යහළුවන් සිදුවීම් දර්ශනය 01" : "Wellawatte Incident Visual 01" },
            { img: story3_2Img, caption: locale === "si" ? "වැල්ලවත්ත යහළුවන් සිදුවීම් දර්ශනය 02" : "Wellawatte Incident Visual 02" },
            { img: story3Img, caption: locale === "si" ? "වැල්ලවත්ත යහළුවන් සිදුවීම් දර්ශනය 03" : "Wellawatte Incident Visual 03" }
          ],
          storyText: locale === "si" 
            ? "වැල්ලවත්ත ප්‍රදේශයේ තරුණ යහළුවන් දෙදෙනෙකු අතර ඇති වූ බහින්බස් වීමකින් පසු සිදු වූ හදිසි අනතුරකදී, එක් අයෙක් තුලනය ගිලිහී පටු සහ රොමියුලස්/ගල් සහිත ප්‍රදේශයකට වැටී විශාල ගල් අතර සිරවිය. අනෙක් යාළුවා වහාම උදව් කිරීමට උත්සාහ කළද, නිසි උපකරණ නොමැතිව ඔහු බේරා ගැනීමට යෑමෙන් තවත් තුවාල සිදුවිය හැකි විය. අවට සිටි පිරිස හදිසි ප්‍රතිචාරකයන් දැනුවත් කළ අතර, ගැලවුම්කරණ කණ්ඩායම පැමිණ පරිසරය සහ සිරවූ පුද්ගලයා පරීක්ෂා කර සුදුසු ක්‍රමවේද මගින් ඔහු ආරක්ෂිතව මුදා ගන්නා ලදී."
            : "Two young friends were involved in an incident in the Wellawatte area after an argument between them. During the incident, one of the friends lost his balance and fell into a narrow rocky area, becoming trapped between large rocks. The other friend immediately tried to help him. However, the area was difficult to access, and attempting to pull him out without proper equipment could have caused further injury. People nearby noticed the situation and contacted emergency responders. When the rescue team arrived, they first assessed the surrounding area and checked the condition of the trapped person. The rescuers carefully approached the location and used appropriate rescue techniques to reach the trapped friend. After creating enough space around him, they carefully freed him from between the rocks and moved him to a safer area. The rescued person was then checked for possible injuries, while the other friend and people at the scene were advised to remain away from the hazardous area.",
          challenges: [
            locale === "si" ? "පටු ගල් සහිත ප්‍රදේශය නිසා ප්‍රවේශ වීම අපහසු වීම." : "The narrow rocky area made access difficult.",
            locale === "si" ? "සිරවූ පුද්ගලයාට නිදහසේ චලනය වීමට නොහැකි වීම." : "The trapped person could not move freely.",
            locale === "si" ? "ගැලවුම්කරණයේදී අමතර තුවාල සිදුවීමේ අවදානම." : "There was a risk of causing additional injury during the rescue.",
            locale === "si" ? "වටපිටාවේ ඇති ගල් වින්දිතයාට සහ ගැලවුම්කරුවන්ට උපද්‍රව ඇති කිරීම." : "The surrounding rocks created hazards for both the victim and rescuers.",
            locale === "si" ? "පළමු මිතුරා හැඟීම්බර වීම සහ වහාම උදව් කිරීමට උත්සාහ කිරීම." : "The first friend was emotionally distressed and wanted to rescue his friend immediately.",
            locale === "si" ? "සිරවූ පුද්ගලයා චලනය කිරීමට පෙර නිසි තක්සේරුවක් අවශ්‍ය වීම." : "Proper assessment was required before attempting to move the trapped person."
          ],
          actions: [
            locale === "si" ? "හදිසි තත්ත්වය අදාළ ප්‍රතිචාරකයන් වෙත වාර්තා කිරීම." : "The emergency situation was reported to the relevant responders.",
            locale === "si" ? "ගැලවුම්කරණ කණ්ඩායම ස්ථානය පරීක්ෂා කර सम्ಭವනීය අවදානම් හඳුනා ගැනීම." : "The rescue team assessed the location and identified potential hazards.",
            locale === "si" ? "සිරවූ පුද්ගලයාගේ තත්ත්වය සහ පිහිටීම පරීක්ෂා කිරීම." : "The condition and position of the trapped person were checked.",
            locale === "si" ? "ආරක්ෂිත වැඩබිමක් සැපයීම සඳහා අවට ප්‍රදේශය හිස්ව තබා ගැනීම." : "The surrounding area was kept clear to provide a safe working space.",
            locale === "si" ? "ගැලවුම්කරුවන් ප්‍රවේශමෙන් සිරවූ පුද්ගලයා වෙත ළඟා වීම." : "Rescuers carefully accessed the trapped person.",
            locale === "si" ? "ගල් අතරින් ඔහු නිදහස් කර ගැනීමට සුදුසු ගැලවුම්කරණ ක්‍රම භාවිත කිරීම." : "Appropriate rescue techniques were used to release him from between the rocks.",
            locale === "si" ? "මුදාගත් පුද්ගලයා ආරක්ෂිත ස්ථානයකට ගෙන යාම." : "The rescued person was moved to a safe location.",
            locale === "si" ? "තුවාල සඳහා ඔහුගේ තත්ත්වය පරීක්ෂා කිරීම." : "His condition was checked for possible injuries.",
            locale === "si" ? "අවශ්‍ය නම් තවත් වෛද්‍ය සහය ලබා දීම සංවිධානය කිරීම." : "Further medical assistance was arranged if required."
          ],
          lessons: [
            locale === "si" ? "තක්සේරුවකින් තොරව අනතුරුදායක ගැලවුම්කරණයකට නොයන්න: ක්ෂණික උදව් වැදගත් වුවද, අනාරක්ෂිත ක්‍රියා තත්ත්වය වඩාත් නරක අතට හැරවිය හැක." : "Do not attempt a dangerous rescue without assessment: Immediate help is important, but unsafe actions can make the situation worse.",
            locale === "si" ? "පළමුව පරිසරය තක්සේරු කරන්න: ගල්, අස්ථායී පෘෂ්ඨයන් සහ සීමිත අවකාශයන් අමතර උවදුරු නිර්මාණය කළ හැක." : "Assess the environment first: Rocks, unstable surfaces, and restricted spaces can create additional hazards.",
            locale === "si" ? "ප්‍රදේශය පිරිසිදුව තබා ගන්න: නරඹන්නන් ගැලවුම්කරුවන්ට ආරක්ෂිතව වැඩ කිරීමට ප්‍රමාණවත් ඉඩක් ලබා දිය යුතුය." : "Keep the area clear: Bystanders should give rescuers enough space to work safely.",
            locale === "si" ? "පැහැදිලිව සන්නිවේදනය කරන්න: වින්දිතයාගේ පිහිටීම සහ තත්ත්වය පිළිබඳ නිවැරදි තොරතුරු ප්‍රතිචාරකයන්ට ඉක්මනින් ක්‍රියා කිරීමට උපකාරී වේ." : "Communicate clearly: Accurate information about the victim's location and condition helps responders act quickly.",
            locale === "si" ? "සුදුසු ගැලවුම්කරණ ක්‍රම භාවිත කරන්න: අමතර තුවාල වීම වැළැක්වීම සඳහා සිරවූවන් ප්‍රවේශමෙන් නිදහස් කළ යුතුය." : "Use appropriate rescue techniques: Trapped persons should be released carefully to avoid additional injuries.",
            locale === "si" ? "සන්සුන්ව සිටින්න: භීතිය හදිසි තත්ත්වයක් කළමනාකරණය කිරීම වඩාත් අපහසු කළ හැක." : "Remain calm: Panic can make an emergency situation more difficult to manage."
          ],
          recommendations: [
            locale === "si" ? "ප්‍රජා සාමාජිකයන්ට මූලික හදිසි ප්‍රතිචාර දැනුවත්භාවය ලබා දීම." : "Provide basic emergency-response awareness to community members.",
            locale === "si" ? "ඉහළ අවදානම් සහිත ගැලවුම්කරණයන් තමන් විසින් කිරීමට උත්සාහ කිරීම වෙනුවට පුහුණු ප්‍රතිචාරකයන් සම්බන්ධ කර ගැනීමට ජනතාව දිරිමත් කිරීම." : "Encourage people to contact trained responders instead of attempting high-risk rescues themselves.",
            locale === "si" ? "පැහැදිලි හදිසි සන්නිවේදන ක්‍රියා පටිපාටි පවත්වා ගැනීම." : "Maintain clear emergency communication procedures.",
            locale === "si" ? "අවශ්‍ය අවස්ථාවන්හිදී සීමිත අවකාශ සහ තාක්ෂණික ගැලවුම්කරණ ක්‍රමවේද පිළිබඳව ප්‍රතිචාරකයන් පුහුණු කිරීම." : "Train responders in confined-space and technical rescue techniques where required.",
            locale === "si" ? "අපහසු ප්‍රවේශයන් සහිත සිදුවීම් සඳහා සුදුසු ගැලවුම්කරණ උපකරණ ඇති බව තහවුරු කිරීම." : "Ensure appropriate rescue equipment is available for difficult-access incidents.",
            locale === "si" ? "අනාගත ගැලවුම්කරණ මෙහෙයුම් වැඩිදියුණු කිරීම සඳහා සිදුවීම් සහ ඉගෙනගත් පාඩම් ලේඛනගත කිරීම." : "Document incidents and lessons learned to improve future rescue operations."
          ]
        },
        {
          incidentTitle: locale === "si" ? "මරදාන දුම්රිය ස්ථාන ගැලවුම්කරණ සිදුවීම" : "Maradana Railway Station Rescue Incident",
          incidentYear: "2024",
          incidentType: locale === "si" ? "දුම්රිය හදිසි අනතුරු ප්‍රතිචාරය" : "Railway Emergency Response",
          storyImages: [
            { img: story4Img, caption: locale === "si" ? "මරදාන දුම්රිය ස්ථාන සිදුවීම් දර්ශනය" : "Maradana Railway Station Incident Visual" }
          ],
          storyText: locale === "si" 
            ? "මරදාන දුම්රිය ස්ථානයේදී පුද්ගලයෙකු චලනය වන දුම්රියක් සමඟ ගැටීමෙන් ඛේදනීය සිදුවීමක් සිදු විය. තුවාල ලැබූ පුද්ගලයාට සහය වීමට සහ මුදා ගැනීමට ගැලවුම්කරණ කණ්ඩායමක් එම ස්ථානයට කැඳවන ලදී.\n\nගැලවුම්කරණ කණ්ඩායම වහාම එම ස්ථානයට ගොස් සහය වීමට උත්සාහ කළේය. කෙසේ වෙතත්, එම පුද්ගලයාගේ තත්ත්වය ඉතා අසතුටුදායක (දේශසීමා/අවදානම්) වූ අතර, ඔහුට හදිසි වෛද්‍ය ප්‍රතිකාර අවශ්‍ය විය. අත්‍යවශ්‍ය ඖෂධ සහ වෛද්‍ය සැපයුම් එම ස්ථානයේ නොතිබීම හේතුවෙන් කණ්ඩායමට දුෂ්කරතාවන්ට මුහුණ දීමට සිදු විය. අවශ්‍ය එන්නත් සහ අනෙකුත් හදිසි වෛද්‍ය සම්පත් ද ලබා ගැනීමට නොහැකි විය.\n\nගැලවුම්කරණ කණ්ඩායමේ උත්සාහය නොතකා, ඔවුන්ට එම පුද්ගලයාගේ ජීවිතය බේරා ගැනීමට නොහැකි විය. දුම්රිය හදිසි අවස්ථාවන්හිදී අත්‍යවශ්‍ය වෛද්‍ය සැපයුම්, පුහුණු වෛද්‍ය කාර්ය මණ්ඩලය සහ ඵලදායී හදිසි ප්‍රතිචාර ක්‍රියා පටිපාටි තිබීමේ වැදගත්කම මෙම සිදුවීම මගින් මනාව පෙන්නුම් කරන ලදී."
            : "A tragic incident occurred at Maradana Railway Station when a man came into contact with a moving train. A rescue team was called to the scene to assist and rescue the injured person.\n\nThe rescue team immediately went to the location and attempted to provide assistance. However, the man's condition was critical, and he required urgent medical attention. The team faced difficulties because the necessary medicines and medical supplies were not available at the scene. Some required injections and other emergency medical resources were also unavailable.\n\nDespite the rescue team's efforts, they were unable to save the man's life. The incident highlighted the importance of having essential medical supplies, trained medical personnel, and effective emergency response procedures available during railway emergencies.",
          challenges: [
            locale === "si" ? "මෙම සිදුවීම චලනය වන දුම්රියක් සහ ඉතා අවදානම් සහගත ගැලවුම්කරණ පරිසරයක් සම්බන්ධ විය." : "The incident involved a moving train and a highly dangerous rescue environment.",
            locale === "si" ? "තුවාල ලැබූ පුද්ගලයාට වහාම වෛද්‍ය ප්‍රතිකාර අවශ්‍ය විය." : "The injured person required immediate medical attention.",
            locale === "si" ? "වින්දිතයාගේ තත්ත්වය බරපතල වීම නිසා ගැලවුම්කරණ කණ්ඩායමට දුෂ්කරතාවන්ට මුහුණ දීමට සිදු විය." : "The rescue team faced difficulties due to the critical condition of the victim.",
            locale === "si" ? "අත්‍යවශ්‍ය ඖෂධ සහ හදිසි වෛද්‍ය සැපයුම් එම ස්ථානයේ නොතිබුණි." : "Essential medicines and emergency medical supplies were not available at the scene.",
            locale === "si" ? "අවශ්‍ය එන්නත් සහ අනෙකුත් වෛද්‍ය සම්පත් ලබා ගැනීමට නොහැකි විය." : "Required injections and other medical resources were unavailable.",
            locale === "si" ? "අවශ්‍ය හදිසි ප්‍රතිකාර ලබා දීමේදී කණ්ඩායමට දුෂ්කරතා මතු විය." : "The team faced difficulties in providing the necessary emergency treatment.",
            locale === "si" ? "ගැලවුම්කරුවන් සහ වෛද්‍ය සේවා අතර වේගවත් සම්බන්ධීකරණයක් අවශ්‍ය විය." : "The incident required rapid coordination between rescue personnel and medical services."
          ],
          actions: [
            locale === "si" ? "දුම්රිය හදිසි අනතුර පිළිබඳව ගැලවුම්කරණ කණ්ඩායම දැනුවත් කරන ලදී." : "The rescue team was informed about the railway emergency.",
            locale === "si" ? "කණ්ඩායම වහාම මරදාන දුම්රිය ස්ථානය වෙත ගියේය." : "The team immediately went to Maradana Railway Station.",
            locale === "si" ? "තත්ත්වයට අනුව පීඩාවට පත් වූ පුද්ගලයා තක්සේරු කරන ලදී." : "The affected person was assessed according to the situation.",
            locale === "si" ? "තුවාල ලැබූ පුද්ගලයාට සහය වීමට සහ මුදා ගැනීමට ගැලවුම්කරණ කණ්ඩායම උත්සාහ කළේය." : "The rescue team attempted to provide assistance and rescue the injured man.",
            locale === "si" ? "හදිසි වෛද්‍ය ප්‍රතිකාරවල අවශ්‍යතාව හඳුනා ගන්නා ලදී." : "The need for urgent medical treatment was identified.",
            locale === "si" ? "පවතින වෛද්‍ය සම්පත් සහ අදාළ පුද්ගලයාගේ තත්ත්වය කණ්ඩායම විසින් සලකා බලන ලදී." : "The team considered the available medical resources and the person's condition.",
            locale === "si" ? "හදිසි සහය සම්බන්ධීකරණය සඳහා අදාළ කාර්ය මණ්ඩලය සම්බන්ධ කර ගන්නා ලදී." : "Relevant personnel were involved in coordinating emergency assistance."
          ],
          lessons: [
            locale === "si" ? "වෛද්‍ය සූදානම අත්‍යවශ්‍ය වේ: ගැලවුම්කරණ කණ්ඩායම් සතුව අත්‍යවශ්‍ය ප්‍රථමාධාර සැපයුම් සහ හදිසි වෛද්‍ය උපකරණ තිබිය යුතුය." : "Medical preparedness is essential: Rescue teams should have access to essential first-aid supplies and emergency medical equipment.",
            locale === "si" ? "ක්ෂණික වෛද්‍ය ආධාර වැදගත් වේ: බරපතල ලෙස තුවාල ලැබූවන්ට පුහුණු වෛද්‍ය වෘත්තිකයන්ගෙන් ක්ෂණික ප්‍රතිකාර අවශ්‍ය විය හැක." : "Rapid medical assistance matters: Critically injured persons may require immediate treatment from trained medical professionals.",
            locale === "si" ? "හදිසි සැපයුම් ලබා ගත හැකි විය යුතුය: අවශ්‍ය විටෙක ඖෂධ සහ සුදුසු වෛද්‍ය සම්පත් ප්‍රවේශ විය හැකි මට්ටමේ තිබිය යුතුය." : "Emergency supplies should be available: Medicines and appropriate medical resources should be accessible when required.",
            locale === "si" ? "ගැලවුම්කරණ සහ වෛද්‍ය කණ්ඩායම් සම්බන්ධීකරණය විය යුතුය: ඵලදායී සහයෝගීතාව කාලෝචිත හදිසි සත්කාර සඳහා උපකාරී වේ." : "Rescue and medical teams should coordinate: Effective cooperation can support timely emergency care.",
            locale === "si" ? "දුම්රිය හදිසි අවස්ථා සඳහා විශේෂ සූදානමක් අවශ්‍ය වේ: අවදානම් සහිත දුම්රිය පරිසරයන් තුළ ආරක්ෂිතව ප්‍රතිචාර දැක්වීමට කණ්ඩායම් පුහුණු කළ යුතුය." : "Railway emergencies require special preparation: Teams should be trained to respond safely in hazardous railway environments.",
            locale === "si" ? "සිදුවීම් වාර්තා කිරීම වැදගත් වේ: අභියෝග සහ සම්පත් හිඟයන් සටහන් කර ගැනීම අනාගත හදිසි මෙහෙයුම් වැඩිදියුණු කිරීමට උපකාරී වේ." : "Incident documentation is important: Recording challenges and resource shortages can help improve future emergency operations."
          ],
          recommendations: [
            locale === "si" ? "ගැලවුම්කරණ කණ්ඩායම් සතුව සුදුසු හදිසි ප්‍රථමාධාර කට්ටල සහ වෛද්‍ය උපකරණ ඇති බව තහවුරු කිරීම." : "Ensure rescue teams have appropriate emergency first-aid kits and medical equipment.",
            locale === "si" ? "දුම්රිය හදිසි අවස්ථාවන්හිදී සුදුසුකම් ලත් වෛද්‍ය කාර්ය මණ්ඩලයකට ප්‍රවේශ වීමට පහසුකම් සැලසීම." : "Establish access to qualified medical personnel during railway emergencies.",
            locale === "si" ? "අදාළ දුම්රිය ස්ථානවල අත්‍යවශ්‍ය හදිසි සැපයුම් පවත්වාගෙන යාම." : "Maintain essential emergency supplies at railway stations where appropriate.",
            locale === "si" ? "දුම්රිය කාර්ය මණ්ඩලය, ගැලවුම්කරණ කණ්ඩායම් සහ වෛද්‍ය සේවා අතර සම්බන්ධීකරණය වැඩිදියුණු කිරීම." : "Improve coordination between railway staff, rescue teams, and medical services.",
            locale === "si" ? "නිయමිත පරිදි දුම්රිය හදිසි ප්‍රතිචාර පුහුණු සහ අභ්‍යාස පැවැත්වීම." : "Conduct regular railway emergency-response training and drills.",
            locale === "si" ? "හදිසි වෛද්‍ය සහය ඉල් සිටීම සඳහා පැහැදිලි ක්‍රියා පටිපාටි ස්ථාපිත කිරීම." : "Establish clear procedures for requesting urgent medical assistance.",
            locale === "si" ? "අනාගත සැලසුම්කරණය සඳහා වෛද්‍ය සම්පත් හිඟයන් සහ ප්‍රතිචාර අභියෝග වාර්තා කිරීම." : "Record medical-resource shortages and response challenges for future planning.",
            locale === "si" ? "සුදුසු වෛද්‍ය සහය ලබා ගැනීමේ හැකියාව වැඩි දියුණු කිරීම සඳහා හදිසි සූදානම් වීමේ ක්‍රියා පටිපාටි සමාලෝචනය කිරීම." : "Review emergency preparedness procedures to improve the availability of appropriate medical support."
          ]
        }
      ]
    },
    {
      id: 5,
      title: locale === "si" ? "ගිනි නිවීම් සහ ගැලවුම්කරණ පුහුණුව" : "Firefighting & Rescue Training",
      responder: "AADR Rukmal",
      organization: locale === "si" ? "ගිනි නිවීම් පුහුණු අංශය" : "Fire Training Wing",
      year: locale === "si" ? "වසර 23 ක සේවය" : "23 Years Service",
      snippet: locale === "si" ? "දක්ෂ මෙහෙයුම් සේවකයන් බිහි කිරීමට කැප වූ ජ්‍යෙෂ්ඨ පුහුණු උපදේශක." : "Senior Training Instructor in Fire Fighting.",
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

  const activeStoryList = officer.storyDetailsList || [];
  const currentStory = activeStoryList[selectedStoryIndex] || activeStoryList[0];

  const handlePrevImage = () => {
    if (currentStory && currentStory.storyImages && currentStory.storyImages.length > 0) {
      setCurrentImageIndex((prev) => (prev === 0 ? currentStory.storyImages.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (currentStory && currentStory.storyImages && currentStory.storyImages.length > 0) {
      setCurrentImageIndex((prev) => (prev === currentStory.storyImages.length - 1 ? 0 : prev + 1));
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

            {/* Tab Section for multiple stories */}
            {activeStoryList.length > 1 && (
              <div style={{ marginBottom: "24px", background: "rgba(255,255,255,0.03)", padding: "14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <label style={{ display: "block", fontSize: "13px", color: "#f59e0b", fontWeight: "600", marginBottom: "10px" }}>
                  {t[locale].selectStory}
                </label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {activeStoryList.map((st, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedStoryIndex(idx);
                        setCurrentImageIndex(0);
                      }}
                      style={{
                        padding: "8px 14px",
                        fontSize: "12px",
                        fontWeight: "600",
                        borderRadius: "6px",
                        border: selectedStoryIndex === idx ? "1px solid #f59e0b" : "1px solid rgba(255,255,255,0.1)",
                        background: selectedStoryIndex === idx ? "rgba(245, 158, 11, 0.15)" : "rgba(255,255,255,0.02)",
                        color: selectedStoryIndex === idx ? "#f59e0b" : "#cbd5e1",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {idx + 1}. {st.incidentTitle.substring(0, 30)}...
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Story Content Section */}
            {currentStory ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                {/* Incident Main Title */}
                <div style={{ background: "rgba(245, 158, 11, 0.05)", borderLeft: "4px solid #f59e0b", padding: "16px 20px", borderRadius: "0 8px 8px 0" }}>
                  <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {locale === "si" ? `වසර ${currentStory.incidentYear} • ${currentStory.incidentType}` : `Year ${currentStory.incidentYear} • ${currentStory.incidentType}`}
                  </span>
                  <h2 style={{ fontSize: "20px", color: "#f8fafc", margin: "6px 0 0" }}>{currentStory.incidentTitle}</h2>
                </div>

                {/* Slideshow Section */}
                {currentStory.storyImages && currentStory.storyImages.length > 0 && (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <h3 style={{ fontSize: "16px", color: "#f1f5f9", margin: 0 }}>📸 {t[locale].slideshowTitle}</h3>
                      <span style={{ fontSize: "13px", color: "#94a3b8", fontFamily: "monospace" }}>
                        {currentImageIndex + 1} / {currentStory.storyImages.length}
                      </span>
                    </div>

                    <div style={{ position: "relative", background: "#000", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img 
                        src={currentStory.storyImages[currentImageIndex].img} 
                        alt="Incident Visual" 
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                      />

                      {/* Navigation Arrows */}
                      {currentStory.storyImages.length > 1 && (
                        <>
                          <button 
                            onClick={handlePrevImage}
                            style={{ position: "absolute", left: "12px", background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "grid", placeItems: "center", cursor: "pointer", transition: "background 0.2s" }}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button 
                            onClick={handleNextImage}
                            style={{ position: "absolute", right: "12px", background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "grid", placeItems: "center", cursor: "pointer", transition: "background 0.2s" }}
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}

                      {/* Caption Overlay */}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", padding: "16px 20px 10px", color: "#fff", fontSize: "13px", textAlign: "center" }}>
                        {currentStory.storyImages[currentImageIndex].caption}
                      </div>
                    </div>

                    {/* Thumbnails Row */}
                    {currentStory.storyImages.length > 1 && (
                      <div style={{ display: "flex", gap: "8px", marginTop: "10px", justifyContent: "center" }}>
                        {currentStory.storyImages.map((imgObj, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            style={{
                              border: currentImageIndex === i ? "2px solid #f59e0b" : "2px solid transparent",
                              borderRadius: "6px",
                              overflow: "hidden",
                              padding: 0,
                              background: "transparent",
                              cursor: "pointer",
                              width: "60px",
                              height: "40px"
                            }}
                          >
                            <img src={imgObj.img} alt="Thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* The Story Section */}
                <div style={{ background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <h3 style={{ fontSize: "16px", color: "#f1f5f9", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    📖 {t[locale].theStory}
                  </h3>
                  <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6", margin: 0, whiteSpace: "pre-line" }}>
                    {currentStory.storyText}
                  </p>
                </div>

                {/* Challenges Faced */}
                {currentStory.challenges && currentStory.challenges.length > 0 && (
                  <div style={{ background: "rgba(239, 68, 68, 0.03)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
                    <h3 style={{ fontSize: "16px", color: "#f87171", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <AlertTriangle size={18} /> {t[locale].challenges}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {currentStory.challenges.map((ch, i) => (
                        <li key={i} style={{ lineHeight: "1.5" }}>{ch}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions Taken */}
                {currentStory.actions && currentStory.actions.length > 0 && (
                  <div style={{ background: "rgba(59, 130, 246, 0.03)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(59, 130, 246, 0.1)" }}>
                    <h3 style={{ fontSize: "16px", color: "#60a5fa", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle size={18} /> {t[locale].actions}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {currentStory.actions.map((act, i) => (
                        <li key={i} style={{ lineHeight: "1.5" }}>{act}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Lessons Learned */}
                {currentStory.lessons && currentStory.lessons.length > 0 && (
                  <div style={{ background: "rgba(52, 211, 153, 0.03)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(52, 211, 153, 0.1)" }}>
                    <h3 style={{ fontSize: "16px", color: "#34d399", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Lightbulb size={18} /> {t[locale].lessons}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {currentStory.lessons.map((les, i) => (
                        <li key={i} style={{ lineHeight: "1.5" }}>{les}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                {currentStory.recommendations && currentStory.recommendations.length > 0 && (
                  <div style={{ background: "rgba(245, 158, 11, 0.03)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(245, 158, 11, 0.1)" }}>
                    <h3 style={{ fontSize: "16px", color: "#f59e0b", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Shield size={18} /> {t[locale].recommendations}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {currentStory.recommendations.map((rec, i) => (
                        <li key={i} style={{ lineHeight: "1.5" }}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
                <p>{t[locale].summary}</p>
                <p style={{ fontSize: "13px", marginTop: "8px" }}>{t[locale].summarySoon}</p>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}