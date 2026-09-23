import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LocaleProvider } from "./context/LocaleContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import KnowledgeSection from "./pages/KnowledgeSection";
import KnowledgeDetail from "./pages/KnowledgeDetail";
import FirstAidMedical from "./pages/FirstAidMedical";
import Experiences from "./pages/Experiences";
import ViewExperience from "./pages/ViewExperience"; 
import AfterRescue from "./pages/AfterRescue"; 
import Admin from "./pages/Admin"; 
import AdminRescue from "./pages/Admin_Rescue";
import Search from "./pages/Search";
import "./index.css";

function Protected({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

function App() {
  return (
    <AuthProvider>
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/knowledge-hub" replace />} />
            <Route path="/knowledge-hub" element={<Protected><Dashboard /></Protected>} />
            
            {/* Operational Guidelines Route */}
            <Route path="/operational-guidelines" element={<Protected><KnowledgeSection section="operational" /></Protected>} />
            
            {/* SOPs Route එක මෙතැනට අලුතින් එකතු කරන ලදී */}
            <Route path="/sops" element={<Protected><KnowledgeSection section="sops" /></Protected>} />

            <Route path="/knowledge/:slug" element={<Protected><KnowledgeDetail /></Protected>} />
            <Route path="/first-aid-medical" element={<Protected><FirstAidMedical /></Protected>} />
            <Route path="/knowledge/medical/:topicSlug" element={<Protected><FirstAidMedical /></Protected>} />
            
            {/* අත්දැකීම් සහ නිලධාරියාගේ විස්තර පෙන්වන Routes */}
            <Route path="/experiences" element={<Protected><Experiences /></Protected>} />
            <Route path="/view-story/:id" element={<Protected><ViewExperience /></Protected>} />

            {/* After Rescue පෝරමයට අදාළ Route එක */}
            <Route path="/after-rescue" element={<Protected><AfterRescue /></Protected>} />

            {/* Admin පැනලයට අදාළ Routes */}
            <Route path="/admin" element={<Protected><Admin /></Protected>} />
            <Route path="/admin/rescue-reports" element={<Protected><AdminRescue /></Protected>} />

            <Route path="/emergency-contacts" element={<Protected><KnowledgeSection section="contacts" /></Protected>} />
            <Route path="/others" element={<Protected><KnowledgeSection section="others" /></Protected>} />
            <Route path="/search" element={<Protected><Search /></Protected>} />
            <Route path="*" element={<Navigate to="/knowledge-hub" replace />} />
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </AuthProvider>
  );
}

export default App;