import { knowledgeEntries } from "./mockKnowledge";

const questionTranslations = {
  "What are the main hazards during scene management?": "දර්ශන කළමනාකරණයේදී ඇතිවිය හැකි ප්‍රධාන අනතුරු මොනවාද?",
  "How is a surface search conducted?": "මතුපිට සෙවීම සිදු කරන්නේ කෙසේද?",
  "What are the basic shoring procedures?": "මූලික ශෝරින් ක්‍රියා පටිපාටි මොනවාද?",
  "What safety precautions should be followed during lifting operations?": "උස් කිරීමේ මෙහෙයුම්වලදී අනුගමනය කළ යුතු ආරක්ෂක පියවර මොනවාද?",
  "What should first responders do during the initial response?": "ආරම්භක ප්‍රතිචාරයේදී ප්‍රථම ප්‍රතිචාරකයින් කළ යුත්තේ කුමක්ද?"
};

export function searchKnowledge(query) {
  const normalizedQuery = (query || "").trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return knowledgeEntries.filter((entry) => {
    const entryKeywords = entry.keywords.map((keyword) => keyword.toLowerCase());
    const questionText = [
      entry.title.en,
      entry.title.si,
      ...entry.keywords,
      ...entry.sources.map((source) => `${source.en} ${source.si}`),
      ...(entry.relatedQuestions || [])
    ].join(" ").toLowerCase();

    return (
      entryKeywords.some((keyword) => normalizedQuery.includes(keyword)) ||
      questionText.includes(normalizedQuery)
    );
  });
}

export function generateResponse(query, locale = "en") {
  const englishQuery = locale === "si"
    ? Object.entries(questionTranslations).find(([, translated]) => translated === query.trim())?.[0] || query
    : query;
  const matches = searchKnowledge(englishQuery);

  if (!matches.length) {
    const fallbackAnswer = {
      en: "No relevant knowledge found for this query in the current mock dataset. Try a question about scene management, surface search, shoring, lifting safety, or the initial response.",
      si: "වත්මන් mock දැනුම් ගබඩාවේ මෙම ප්‍රශ්නයට අදාළ දැනුමක් හමු නොවිය. දර්ශන කළමනාකරණය, මතුපිට සෙවීම, ශෝරින්, උස්වීමේ ආරක්ෂාව හෝ ආරම්භක ප්‍රතිචාරය පිළිබඳ ප්‍රශ්නයක් අසන්න."
    };

    return {
      title: "No relevant knowledge found",
      answer: fallbackAnswer[locale] || fallbackAnswer.en,
      sources: [
        { en: "USAR Knowledge Assistant – Knowledge Repository", si: "USAR දැනුම් සහායක – දැනුම් ගබඩාව" },
        { en: "Operational Safety – Response Preparedness", si: "ක්‍රියාකාරී ආරක්ෂාව – ප්‍රතිචාර සූදානම" }
      ],
      matched: false,
      relatedQuestions: ([
        "What are the main hazards during scene management?",
        "How is a surface search conducted?",
        "What should first responders do during the initial response?"
      ]).map((question) => locale === "si" ? questionTranslations[question] : question)
    };
  }

  const bestMatch = matches[0];

  return {
    title: bestMatch.title[locale] || bestMatch.title.en,
    answer: bestMatch.answer[locale] || bestMatch.answer.en,
    sources: (bestMatch.sources || []).map((source) => ({
      en: source.en,
      si: source.si
    })),
    matched: true,
    relatedQuestions: (bestMatch.relatedQuestions || []).map((question) =>
      locale === "si" ? questionTranslations[question] || question : question
    )
  };
}

export function sendQuestion(query, locale = "en") {
  const result = generateResponse(query, locale);
  return {
    ...result,
    query,
    locale
  };
}
