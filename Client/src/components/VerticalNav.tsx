import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import logo from "../assets/logo_1.png";
import jaFeed from "../assets/ja_feed.png";

import "./verticalNav.scss";

function VerticalNav() {
  const navigate = useNavigate();

  const [navClass, setnavClass] = useState("");
  const [hamburgerClass, setnhamburgerClass] = useState("");

  const [sectionClass, setSelectionCLass] = useState("");
  const [animationMaskClass, setAnimationMaskClass] = useState("");

  const setClasses = () => {
    navClass === "openMenu" ? setnavClass("") : setnavClass("openMenu");
    navClass === "openMenu" ? setnhamburgerClass("") : setnhamburgerClass("activatehamburger");
    sectionClass === "openSection" ? setSelectionCLass("") : setSelectionCLass("openSection");
    navClass === "openMenu" ? setAnimationMaskClass("") : setAnimationMaskClass("animation-mask-color-after");
  };

  return (
    <>
      <nav className={navClass}>
        <span className={`btn_container ${hamburgerClass}`} onClick={setClasses}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <img
          src={logo}
          onClick={() => { setClasses(), navigate("/") }}
          alt="Miroslav Hanisko"
          className="logo"
        />
        <div className="ulContainer">
          <ul className="parent">
            <li
              onClick={() => { setClasses(), navigate("/") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Introduction &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/mywork") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Projects &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline" ></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/myskills") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Abilities &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/contact") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Get in Touch &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline" aria-hidden="true"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/social") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Connect &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline" aria-hidden="true"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
          </ul>
        </div>
      </nav >

      <section
        className={sectionClass}
        onClick={() => { setClasses() }}
      >
        <div className="sectionContent">
          <div className="socialIcons">

            <div className="hover column">
              <div>
                <figure><img src={jaFeed} /></figure>
              </div>
              <div>
                <figure><img src={jaFeed} /></figure>
              </div>
              <div>
                <figure><img src={jaFeed} /></figure>
              </div>
              <div>
                <figure><img src={jaFeed} /></figure>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default VerticalNav;
