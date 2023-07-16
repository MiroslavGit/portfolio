import { Routes, Route, useLocation } from "react-router-dom";

import Introduction from "../pages/Introduction";
import Projects from "../pages/Projects";
import Abilities from "../pages/Abilities";
import GetInTouch from "../pages/GetInTouch";
import Connect from "../pages/Connect";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Introduction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/abilities" element={<Abilities />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
