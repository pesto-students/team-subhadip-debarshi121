import "./styles.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import SkillsPage from "./pages/Skills";
import ProjectDetailsPage from "./pages/ProjectDetails";
import ErrorPage from "./pages/Error";
import BlogsPage from "./pages/Blogs";
import BlogDetailsPage from "./pages/BlogDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
