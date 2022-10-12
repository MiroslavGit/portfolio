import { useState, useEffect } from "react";

import VerticalNav from "../components/VerticalNav";

import "./me.css";

function Me() {
  return (
    <div className="body-page">
      <VerticalNav />
      <div className="main">Me</div>
    </div>
  );
}

export default Me;
