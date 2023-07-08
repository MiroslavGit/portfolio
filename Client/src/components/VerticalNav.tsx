import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./verticalNav.css";
import logo from "../assets/logo_1.png";

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
                &nbsp;&nbsp;&nbsp;&nbsp; Home &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/mywork") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; My Work &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline" ></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/myskills") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; My Skills &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/contact") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Contact &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline" aria-hidden="true"></span>
                <span className={`animation-mask ${animationMaskClass}`}></span>
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/social") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Social &nbsp;&nbsp;&nbsp;&nbsp;
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

          </div>
        </div>
      </section>
    </>
  );
}

export default VerticalNav;
