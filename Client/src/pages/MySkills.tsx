import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import "./me.scss";

function MySkills() {
  const navigate = useNavigate();

  const dataFetchedRef = useRef(false);

  const addShowClassToLetters = () => {
    const allLetters = Array.from(document.getElementsByClassName("pismeno"));

    setTimeout(() => {
      Array.from(allLetters).forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.toggle("show");
        }, index * 170);
      });
    }, 1000);
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    addShowClassToLetters();
  }, []);

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.8 } }}
      className="childPage"
    >
      <div style={{ display: "flex", marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span className="pismeno">M</span>
            <span className="pismeno">y</span>
            <span className="pismeno">&nbsp;</span>
            <span className="pismeno">s</span>
            <span className="pismeno">k</span>
            <span className="pismeno">i</span>
            <span className="pismeno">l</span>
            <span className="pismeno">l</span>
            <span className="pismeno">s</span>
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <a
          className="button"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <span>Contact Me</span>
          <div className="icon ">
            <i className="fa fa-remove">{"->"}</i>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default MySkills;
