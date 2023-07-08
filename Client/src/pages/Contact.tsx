import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./me.css";

function Cotact() {
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
      initial={{ y: -500 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.8 } }}
      className="childPage"
    >
      <div style={{ display: "flex", marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span className="pismeno">C</span>
            <span className="pismeno">o</span>
            <span className="pismeno">n</span>
            <span className="pismeno">t</span>
            <span className="pismeno">a</span>
            <span className="pismeno">c</span>
            <span className="pismeno">t</span>
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <h2 className="popis">
          Currently Part-time developer but soon Full stack developer ;)
        </h2>
      </div>
    </motion.div>
  );
}

export default Cotact;
