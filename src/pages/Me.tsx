import { useState, useEffect, useRef } from "react";

import VerticalNav from "../components/VerticalNav";

import "./me.css";

function Me() {
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
    <div className="body-page">
      <VerticalNav />

      <div className="bouncing-div">
        <div>
          <span className="pismeno">H</span>
          <span className="pismeno">i</span>
          <span className="pismeno">,</span>
        </div>
        <div>
          <span className="pismeno">I</span>
          <span className="pismeno">'</span>
          <span className="pismeno">m</span>
          <span className="pismeno "> </span>
          <span className="pismeno ">M</span>
          <span className="pismeno ">i</span>
          <span className="pismeno ">r</span>
          <span className="pismeno ">o</span>
          <span className="pismeno ">s</span>
          <span className="pismeno ">l</span>
          <span className="pismeno ">a</span>
          <span className="pismeno ">v</span>
          <span className="pismeno ">,</span>
        </div>
        <div>
          <span className="pismeno ">w</span>
          <span className="pismeno ">e</span>
          <span className="pismeno ">b</span>
          <span className="pismeno "> </span>
          <span className=" pismeno ">d</span>
          <span className=" pismeno ">e</span>
          <span className=" pismeno ">v</span>
          <span className=" pismeno ">e</span>
          <span className=" pismeno ">l</span>
          <span className=" pismeno ">o</span>
          <span className=" pismeno ">p</span>
          <span className=" pismeno ">e</span>
          <span className=" pismeno ">r</span>
        </div>
      </div>
    </div>
  );
}

export default Me;
