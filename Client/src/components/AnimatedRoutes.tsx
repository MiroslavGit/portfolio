import { Routes, Route, useLocation } from "react-router-dom";

import Me from "../pages/Me";
import MyWork from "../pages/MyWork";
import MySkills from "../pages/MySkills";
import Contact from "../pages/Contact";
import Social from "../pages/Social";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Me />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/myskills" element={<MySkills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
