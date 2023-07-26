import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "./Projects.scss";

function MyWork() {
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
      <div style={{ marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span className="pismeno">P</span>
            <span className="pismeno">r</span>
            <span className="pismeno">o</span>
            <span className="pismeno">j</span>
            <span className="pismeno">e</span>
            <span className="pismeno">c</span>
            <span className="pismeno">t</span>
            <span className="pismeno">s</span>
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <h2 className="popis">
          If you find any of my work intriguing, don't hesitate to reach out and connect with me.
          <br /><br />
          I'm always ready to collaborate on exciting projects and bring new ideas to life.
          <br /><br />
          Let's create something amazing together!
        </h2>
      </div>

      <div>
        <div className="galleryContainer">

          <div className="card card0">
            <div className="border">
              <h2>TeeeBase</h2>
              <div className="icons">
                <button className="iconsButton">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="card card1">
            <div className="border">
              <h2>TeeeBase</h2>
              <div className="icons">
                <button className="iconsButton">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="card card2">
            <div className="border">
              <h2>TeeeBase</h2>
              <div className="icons">
                <button className="iconsButton">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </motion.div>
  );
}

export default MyWork;
