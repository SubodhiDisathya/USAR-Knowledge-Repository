import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

export default function PageBackButton({ fallback = "/knowledge-hub", label }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { locale } = useLocale();

  function goBack() {
    if (location.key === "default") {
      navigate(fallback, { replace: true });
      return;
    }

    navigate(-1);
  }

  return (
    <button type="button" className="page-back-button" onClick={goBack}>
      <ArrowLeft size={17} />
      {label || (locale === "si" ? "ආපසු යන්න" : "Go back")}
    </button>
  );
}
