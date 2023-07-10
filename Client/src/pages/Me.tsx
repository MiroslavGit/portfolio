import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import logo from "../assets/logo_1.png";

import "./me.scss";

function Me() {
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
      <div style={{ marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span className="pismeno vacsiePismeno">H</span>
            <span className="pismeno vacsiePismeno">i</span>
            <span className="pismeno vacsiePismeno">,</span>
          </div>
          <div style={{ display: "flex" }}>
            <span className="pismeno" >I</span>
            <span className="pismeno" >'</span>
            <span className="pismeno" >m</span>
            <span className="pismeno" > &nbsp;</span>
            <span className="pismeno" >M</span>
            <span className="pismeno" >i</span>
            <span className="pismeno" >r</span>
            <span className="pismeno" >o</span>
            <span className="pismeno" >s</span>
            <span className="pismeno" >l</span>
            <span className="pismeno" >a</span>
            <span className="pismeno" >v</span>
            <span className="pismeno" >,</span>
          </div>
          <div style={{ display: "flex" }}>
            <span className="pismeno" >w</span>
            <span className="pismeno" >e</span>
            <span className="pismeno" >b</span>
            <span className="pismeno" >&nbsp; </span>
            <span className="pismeno" >d</span>
            <span className="pismeno" >e</span>
            <span className="pismeno" >v</span>
            <span className="pismeno" >e</span>
            <span className="pismeno" >l</span>
            <span className="pismeno" >o</span>
            <span className="pismeno" >p</span>
            <span className="pismeno" >e</span>
            <span className="pismeno" >r</span>
          </div>
        </div>

        <div className="gradient-ring">
          <div className="outer-ring center"></div>
          <div className="inner-ring center">
            <img className="gradient-ring-logo" src={logo} />
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <h2 className="popis">
          Currently a Part-time Developer and Student, soon to become a Full-time Web Developer & Full Stack Enthusiast ;&#41;
        </h2>
      </div>

      <h2 className="popis" style={{ marginTop: "100px" }}>
        Feel free to explore my skills and discover what I have accomplished so far.
        <br />
        Check out my projects below.
      </h2>
      <a
        className="button"
        onClick={() => navigate("/myWork")}
      >
        <span>Projects</span>
        <div className="icon ">
          <i className="fa fa-remove">{"->"}</i>
        </div>
      </a>
    </motion.div>
  );
}

export default Me;
