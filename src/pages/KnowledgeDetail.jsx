import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, ShieldAlert } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import topics, { commonNote } from "../data/knowledgeData";

const relatedTopics = [
  ["first-response", "🚨 First Response", "පළමු ප්‍රතිචාරය"],
  ["disaster-environment", "🌍 Disaster Environment", "ආපදා පරිසරය"],
  ["incident-site-management", "⚠️ Incident Site Management", "සිද්ධි ස්ථාන කළමනාකරණය"],
  ["search-operations", "🔍 Search Operations", "සෙවුම් මෙහෙයුම්"],
  ["rescue-operations", "🦺 Rescue Operations", "ගලවා ගැනීමේ මෙහෙයුම්"]
];

function BilingualText({ primary, secondary, locale, className = "" }) {
  return (
    <p className={className}>{locale === "si" && secondary ? secondary : primary}</p>
  );
}

function InformationGrid({ heading, items, locale }) {
  return (
    <section className="detail-section">
      <div className="detail-section-heading">
        <span className="detail-section-line" />
        <h2>{heading}</h2>
      </div>
      <div className="information-grid">
        {items.map((item, index) => (
          <article className="information-card" key={`${item[1]}-${index}`}>
            <span className="information-icon">{item[0]}</span>
            <div>
              <h3>{locale === "si" && item[2] ? item[2] : item[1]}</h3>
              {locale === "en" && item[3] && <p>{item[3]}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessTimeline({ heading, steps, locale }) {
  return (
    <section className="detail-section">
      <div className="detail-section-heading">
        <span className="detail-section-line" />
        <h2>{heading}</h2>
      </div>
      <div className="process-timeline">
        {steps.map((step, index) => (
          <article className="process-step" key={`${step[1]}-${index}`}>
            <div className="process-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="process-body">
              <div className="process-title-row">
                <span className="process-icon">{step[0]}</span>
                <h3>{locale === "si" ? step[2] : step[1]}</h3>
              </div>
              {locale === "en" && <p>{step[3]}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function KnowledgeDetail() {
  const { slug } = useParams();
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;
  const topic = topics[slug];

  if (!topic) {
    return <Navigate to="/operational-guidelines" replace />;
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="knowledge-detail-main">
          <div className="detail-toolbar">
            <Link to="/operational-guidelines" className="back-link">
              <ArrowLeft size={16} />
              {t.backToHub}
            </Link>
            <nav className="detail-breadcrumb" aria-label="Breadcrumb">
              <Link to="/knowledge-hub">{t.knowledgeHub}</Link>
              <span>/</span>
              <Link to="/operational-guidelines">{t.operationalGuidelines}</Link>
              <span>/</span>
              <span>{topic.title}</span>
            </nav>
          </div>

          <header className="detail-hero">
            <img src={topic.heroImage} alt={topic.heroAlt} />
            <div className="detail-hero-overlay" />
            <div className="detail-hero-content">
              <span className="detail-kicker">USAR KNOWLEDGE REPOSITORY</span>
              <h1>{topic.icon} {topic.title}</h1>
              <p className="detail-sinhala-title">{locale === "si" ? topic.sinhalaTitle : topic.title}</p>
            </div>
          </header>

          <div className="detail-content">
            <section className="detail-introduction">
              <BilingualText primary={topic.description} secondary={topic.sinhalaDescription} locale={locale} />
            </section>

            {topic.keyInformation && (
              <InformationGrid locale={locale} heading={locale === "si" ? topic.keyHeading.split(" | ")[1] : topic.keyHeading.split(" | ")[0]} items={topic.keyInformation.map((item) => ["•", item[0], item[1]])} />
            )}

            {topic.processHeading && <ProcessTimeline locale={locale} heading={locale === "si" ? topic.processHeading.split(" | ")[1] : topic.processHeading.split(" | ")[0]} steps={topic.steps} />}

            {topic.groups?.map((group) => (
              <InformationGrid key={group.heading} locale={locale} heading={locale === "si" && group.heading.includes(" | ") ? group.heading.split(" | ")[1] : group.heading.split(" | ")[0]} items={group.items} />
            ))}

            {topic.safety && (
              <section className="safety-panel">
                <div className="safety-icon"><ShieldAlert size={24} /></div>
                <div>
                  <h2>{locale === "si" && topic.safety[0].includes(" | ") ? topic.safety[0].split(" | ")[1] : topic.safety[0].split(" | ")[0]}</h2>
                  <p>{locale === "si" ? topic.safety[2] : topic.safety[1]}</p>
                </div>
              </section>
            )}

            <section className="resource-panel">
              <div className="resource-icon"><FileText size={24} /></div>
              <div className="resource-copy">
                <span className="resource-label">{t.additionalResources}</span>
                <h2>{locale === "si" ? "ලේඛනය" : "Document"}</h2>
                <h3>{topic.resource}</h3>
                <p>{t.resourceDescription}</p>
              </div>
              {topic.resourceUrl ? (
                <a href={topic.resourceUrl} target="_blank" rel="noopener noreferrer" className="resource-button">
                  <ExternalLink size={16} />
                  {locale === "si" ? "ලේඛනය බලන්න" : "View Document"}
                </a>
              ) : (
                <span className="resource-button resource-unavailable">{t.resourceUnavailable || "Resource not available yet"}</span>
              )}
            </section>

            <section className="knowledge-note">
              <span className="note-pin">📌</span>
              <div>
                <h2>{commonNote.title}</h2>
                <p>{commonNote.body}</p>
                <p className="detail-secondary">{commonNote.sinhala}</p>
              </div>
            </section>

            <section className="related-section">
              <div className="detail-section-heading">
                <span className="detail-section-line" />
                <h2>{t.relatedTopics}</h2>
              </div>
              <div className="related-grid">
                {relatedTopics.filter(([relatedSlug]) => relatedSlug !== slug).map(([relatedSlug, title, sinhala]) => (
                  <Link to={`/knowledge/${relatedSlug}`} className="related-card" key={relatedSlug}>
                    <div>
                      <h3>{locale === "si" ? sinhala : title.replace(/^[^ ]+ /, "")}</h3>
                    </div>
                    <ArrowRight size={18} />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Embedded CSS Styles */}
      <style>{`
        .knowledge-detail-main {
          flex: 1;
          overflow-y: auto;
          padding: 24px 32px 56px;
          background: #0b0f19;
        }

        .detail-toolbar {
          max-width: 1120px;
          margin: 0 auto 18px;
        }

        .back-link,
        .detail-breadcrumb a {
          color: #f59e0b;
          text-decoration: none;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .back-link:hover,
        .detail-breadcrumb a:hover {
          color: #fbbf24;
        }

        .detail-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: #64748b;
          font-size: 12px;
        }

        .detail-breadcrumb span:last-child {
          color: #cbd5e1;
        }

        .detail-hero,
        .detail-content {
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }

        .detail-hero {
          min-height: 330px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: #111827;
        }

        .detail-hero img {
          width: 100%;
          height: 330px;
          display: block;
          object-fit: cover;
        }

        .detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7, 12, 22, 0.96) 0%, rgba(7, 12, 22, 0.72) 45%, rgba(7, 12, 22, 0.24) 100%);
        }

        .detail-hero-content {
          position: absolute;
          left: 36px;
          bottom: 34px;
          max-width: 650px;
        }

        .detail-kicker,
        .resource-label {
          color: #f59e0b;
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .detail-hero h1 {
          color: #fff;
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.1;
          margin: 12px 0 8px;
        }

        .detail-sinhala-title {
          color: #e2e8f0;
          font-size: 16px;
        }

        .detail-content {
          padding-top: 24px;
        }

        .detail-introduction {
          padding: 24px;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          color: #e2e8f0;
          line-height: 1.7;
        }

        .detail-introduction p:first-child {
          font-size: 17px;
        }

        .detail-secondary {
          color: #94a3b8 !important;
          margin-top: 7px;
        }

        .detail-section {
          margin-top: 34px;
        }

        .detail-section-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .detail-section-heading h2,
        .safety-panel h2,
        .resource-copy h2,
        .knowledge-note h2 {
          color: #f8fafc;
          font-size: 17px;
          letter-spacing: 0.2px;
        }

        .detail-section-line {
          width: 4px;
          height: 22px;
          border-radius: 2px;
          background: #f97316;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
        }

        .information-card,
        .related-card {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
        }

        .information-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px;
        }

        .information-card:hover,
        .related-card:hover {
          border-color: rgba(249, 115, 22, 0.45);
          transform: translateY(-2px);
          transition: 180ms ease;
        }

        .information-icon {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: rgba(249, 115, 22, 0.12);
          color: #fb923c;
          font-size: 18px;
        }

        .information-card h3,
        .related-card h3 {
          color: #f1f5f9;
          font-size: 14px;
          line-height: 1.45;
        }

        .information-card p,
        .related-card p,
        .process-body p,
        .resource-copy p,
        .knowledge-note p {
          color: #cbd5e1;
          font-size: 13px;
          line-height: 1.55;
          margin-top: 5px;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .process-step {
          display: flex;
          gap: 14px;
          padding: 20px;
          min-height: 150px;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
        }

        .process-marker {
          position: relative;
          flex: 0 0 34px;
        }

        .process-marker::after {
          content: "";
          position: absolute;
          top: 38px;
          bottom: -70px;
          left: 16px;
          width: 1px;
          background: rgba(249, 115, 22, 0.35);
        }

        .process-step:nth-last-child(-n + 2) .process-marker::after {
          display: none;
        }

        .process-marker span {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f97316;
          color: #111827;
          font: 700 12px monospace;
        }

        .process-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .process-icon {
          font-size: 18px;
        }

        .process-body h3 {
          color: #f8fafc;
          font-size: 15px;
        }

        .safety-panel,
        .resource-panel,
        .knowledge-note {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-top: 34px;
          padding: 22px;
          border-radius: 14px;
        }

        .safety-panel {
          background: rgba(127, 29, 29, 0.24);
          border: 1px solid rgba(248, 113, 113, 0.3);
        }

        .safety-icon {
          color: #f87171;
        }

        .safety-panel h2 {
          color: #fca5a5;
        }

        .resource-panel {
          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(96, 165, 250, 0.25);
        }

        .resource-icon {
          color: #60a5fa;
        }

        .resource-copy {
          flex: 1;
        }

        .resource-copy h2 {
          margin-top: 8px;
        }

        .resource-copy h3 {
          color: #f1f5f9;
          font-size: 15px;
          margin-top: 4px;
        }

        .resource-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          border: 1px solid rgba(96, 165, 250, 0.4);
          border-radius: 8px;
          background: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .resource-button:hover {
          background: rgba(96, 165, 250, 0.25);
          border-color: rgba(96, 165, 250, 0.7);
          color: #93c5fd;
        }

        .resource-unavailable {
          background: rgba(148, 163, 184, 0.1);
          border-color: rgba(148, 163, 184, 0.28);
          color: #94a3b8;
          cursor: not-allowed;
          opacity: 0.8;
        }

        .knowledge-note {
          background: rgba(217, 188, 97, 0.1);
          border: 1px solid rgba(217, 188, 97, 0.28);
        }

        .note-pin {
          font-size: 22px;
        }

        .knowledge-note h2 {
          color: #facc15;
        }

        .related-section {
          margin-top: 38px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .related-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px;
          color: #f59e0b;
          text-decoration: none;
        }

        .related-card p {
          color: #94a3b8;
        }

        @media (max-width: 760px) {
          .knowledge-detail-main {
            padding: 18px 16px 40px;
          }

          .detail-hero,
          .detail-hero img {
            min-height: 280px;
            height: 280px;
          }

          .detail-hero-content {
            left: 22px;
            right: 18px;
            bottom: 24px;
          }

          .process-timeline {
            grid-template-columns: 1fr;
          }

          .resource-panel {
            flex-wrap: wrap;
          }

          .resource-button {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}