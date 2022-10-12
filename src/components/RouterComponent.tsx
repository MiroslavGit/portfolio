import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Me from "../pages/Me";
import MyWork from "../pages/MyWork";
import MySkills from "../pages/MySkills";
import Contact from "../pages/Contact";
import Social from "../pages/Social";

import "./backgroundAnimation.css";

const RouterComponent = () => {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
