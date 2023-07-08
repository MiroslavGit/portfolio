import { BrowserRouter as Router } from "react-router-dom";

import VerticalNav from "./VerticalNav";
import AnimatedRoutes from "./AnimatedRoutes";

import "./backgroundAnimation.css";

const RouterComponent = () => {
  return (
    <div className="container">
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
        <VerticalNav />
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default RouterComponent;
