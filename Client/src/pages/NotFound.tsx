import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./NotFound.scss";

function NotFound() {
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    addShowClassToLetters();
  }, []);

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

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.8 } }}
      className="childPage"
    >
      <div className="notFoundDiv">
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="pismeno">N</span>
            <span className="pismeno">o</span>
            <span className="pismeno">t</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="pismeno">F</span>
            <span className="pismeno">o</span>
            <span className="pismeno">u</span>
            <span className="pismeno">n</span>
            <span className="pismeno">d</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="pismeno">4</span>
            <span className="pismeno">0</span>
            <span className="pismeno">4</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFound;
