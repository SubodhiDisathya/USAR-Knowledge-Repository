import { quizQuestionSets } from "./quizQuestions";

const quizModules = [
  {
    id: "module-1",
    title: { en: "Module 1: First Responder Programme", si: "මොඩියුලය 1: ප්‍රථම ප්‍රතිචාරක වැඩසටහන" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 1:"))
  },
  {
    id: "module-2",
    title: { en: "Module 2: The Rescue Environment", si: "මොඩියුලය 2: මුදාගැනීමේ පරිසරය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 2:"))
  },
  {
    id: "module-3",
    title: { en: "Module 3: Scene Management", si: "මොඩියුලය 3: සිද්ධි ස්ථාන කළමනාකරණය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 3:"))
  },
  {
    id: "module-4",
    title: { en: "Module 4: Search Module", si: "මොඩියුලය 4: සෙවීමේ මොඩියුලය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 4:"))
  },
  {
    id: "module-5",
    title: { en: "Module 5: Rescue Module", si: "මොඩියුලය 5: මුදාගැනීමේ මොඩියුලය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 5:"))
  },
  {
    id: "module-6",
    title: { en: "Module 6: First Aid & Medical", si: "මොඩියුලය 6: පළමු ප්‍රතිකාර සහ වෛද්‍ය ප්‍රතිචාර" },
    questions: quizQuestionSets.medical
  },
  {
    id: "module-7",
    title: { en: "Module 7: Consolidation Exercise", si: "මොඩියුලය 7: සමස්ත කුසලතා ඒකාබද්ධ කිරීමේ අභ්‍යාසය" },
    questions: quizQuestionSets.operational.filter((question) => question.topic.en.startsWith("Module 7:"))
  }
];

export const assignableQuizModules = [
  ...quizModules,
  {
    id: "mixed",
    title: { en: "All Modules Quiz", si: "සියලුම මොඩියුල ප්‍රශ්නාවලිය" },
    questions: quizModules.flatMap((module) => module.questions)
  }
];

export default quizModules;
