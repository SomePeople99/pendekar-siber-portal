import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CyberSafetyModule from "./pages/CyberSafetyModule"
import CyberSecurityCareer from "./pages/CyberSecurityCareer"
import Dashboard from "./pages/Dashboard"
import PersonalityTest from "./pages/PersonalityTest"
import Quiz from "./pages/Quiz"
import DiscussionForum from "./pages/DiscussionForum"
import Project from "./pages/Project"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/projects" element={<Project />}/>
      <Route path="/cybersafetymodule" element={<CyberSafetyModule />}/>
      <Route path="/cybersecuritycareer" element={<CyberSecurityCareer />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/personalitytest" element={<PersonalityTest />}/>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/forum" element={<DiscussionForum />}/>

    </Routes>
    </BrowserRouter>
      )
}
