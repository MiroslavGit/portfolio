import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "./MyWork.scss";

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
      initial={{ y: -500 }}
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
            <span className="pismeno">w</span>
            <span className="pismeno">o</span>
            <span className="pismeno">r</span>
            <span className="pismeno">k</span>
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <h2 className="popis">
          If this piece of my work impressed you a bit, then don't waste your
          time and contact me directly
        </h2>
      </div>

      <div>
        <div className="galleryContainer">

          <div className="card card0">
            <div className="border">
              <h2>Al Pacino</h2>
              <div className="icons">
                <button className="iconsButton">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="card card0">
            <div className="border">
              <h2>Al Pacino</h2>
              <div className="icons">
                <button className="iconsButton">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="card card0">
            <div className="border">
              <h2>Al Pacino</h2>
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
