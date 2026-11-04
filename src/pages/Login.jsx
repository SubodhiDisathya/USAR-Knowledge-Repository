import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import { useNavigate } from "react-router-dom";
import translations from "../i18n/translations";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import "./Login.css";

export default function Login() {
  const { currentUser, authLoading, signup, login, signInWithGoogle, resetPassword } = useAuth();
  const { locale, toggleLocale } = useLocale();
  const navigate = useNavigate();
  const t = translations[locale];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showReset, setShowReset] = useState(false);

  const getAuthError = (err) => {
    if (locale !== "si") return err.message;
    const messages = {
      "auth/invalid-email": "විද්‍යුත් තැපැල් ලිපිනය නිවැරදි නොවේ.",
      "auth/invalid-credential": "විද්‍යුත් තැපැල් ලිපිනය හෝ මුරපදය වැරදියි.",
      "auth/email-already-in-use": "මෙම විද්‍යුත් තැපැල් ලිපිනය සඳහා දැනටමත් ගිණුමක් ඇත.",
      "auth/weak-password": "වඩා ශක්තිමත් මුරපදයක් ඇතුළත් කරන්න.",
      "auth/too-many-requests": "උත්සාහයන් ගණන වැඩියි. ටික වේලාවකින් නැවත උත්සාහ කරන්න.",
      "auth/user-disabled": "මෙම ගිණුම අක්‍රිය කර ඇත.",
      "auth/popup-closed-by-user": "Google පිවිසුම් කවුළුව වසා දමන ලදී.",
      "auth/network-request-failed": "ජාල සම්බන්ධතාව පරීක්ෂා කර නැවත උත්සාහ කරන්න."
    };
    return messages[err.code] || "පිවිසීමට නොහැකි විය. ඔබගේ තොරතුරු පරීක්ෂා කර නැවත උත්සාහ කරන්න.";
  };

  useEffect(() => {
    if (!authLoading && currentUser) {
      navigate("/knowledge-hub", { replace: true });
    }
  }, [authLoading, currentUser, navigate]);

  if (authLoading || currentUser) {
    return <div className="flex items-center justify-center h-screen text-slate-300">{t.loading}</div>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        if (!displayName) {
          setError(locale === "si" ? "පෙන්වන නම ඇතුළත් කිරීම අවශ්‍යයි." : "Display name is required");
          setLoading(false);
          return;
        }
        await signup(email, password, displayName);
      } else {
        await login(email, password);
      }
      navigate("/knowledge-hub", { replace: true });
    } catch (err) {
      setError(getAuthError(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate("/knowledge-hub", { replace: true });
    } catch (err) {
      setError(getAuthError(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleReset() {
    if (!email) {
      setError(locale === "si" ? "කරුණාකර ඔබගේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න." : "Please enter your email");
      return;
    }
    try {
      await resetPassword(email);
      alert(t.resetEmailSent);
      setShowReset(false);
    } catch (err) {
      setError(getAuthError(err));
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <button type="button" className="login-language-toggle" onClick={toggleLocale}>
          {locale === "si" ? "English" : "සිංහල"}
        </button>
        <h1>{t.appTitle}</h1>
        <p className="subtitle">{t.usarKnowledge}</p>

        {error && <div className="error-message">{error}</div>}

        {showReset ? (
          <div className="reset-form">
            <h3>{t.forgotPassword}</h3>
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleReset} className="btn btn-primary">
              {t.sendReset || "Send Reset Email"}
            </button>
            <button onClick={() => setShowReset(false)} className="btn btn-secondary">
              {t.cancel}
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="login-form">
              {isRegister && (
                <div className="form-group">
                  <label htmlFor="displayName">{t.displayName}</label>
                  <input
                    id="displayName"
                    type="text"
                    placeholder={t.displayName}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    disabled={loading}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <div className="input-wrapper">
                  <Mail size={18} />
                  <input
                    id="email"
                    type="email"
                    placeholder={t.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">{t.password}</label>
                <div className="input-wrapper">
                  <Lock size={18} />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {!isRegister && (
                <div className="form-options">
                  <label>
                    <input type="checkbox" />
                    {t.rememberMe}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowReset(true)}
                    className="forgot-link"
                  >
                    {t.forgotPassword}
                  </button>
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {isRegister ? t.signup : t.login}
              </button>
            </form>

            <div className="divider">{t.orSignInWith}</div>

            <button onClick={handleGoogle} className="btn btn-google" disabled={loading}>
              Google
            </button>

            <p className="toggle-auth">
              {isRegister ? t.alreadyHaveAccount : t.dontHaveAccount}{" "}
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="toggle-link"
              >
                {isRegister ? t.login : t.signup}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
