import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./verticalNav.css";
import logo from "../assets/logo_1.png";

function VerticalNav() {
  const navigate = useNavigate();

  const [navClass, setnavClass] = useState("");
  const [sectionClass, setSelectionCLass] = useState("");
  const [animationMaskClass, setAnimationMaskClass] = useState("");

  const setClasses = () => {
    navClass == "openMenu" ? setnavClass("") : setnavClass("openMenu");
    sectionClass == "openSection"
      ? setSelectionCLass("")
      : setSelectionCLass("openSection");
    navClass == "openMenu"
      ? setAnimationMaskClass("")
      : setAnimationMaskClass("animation-mask-color-after");
  };

  return (
    <>
      <nav className={navClass}>
        <span id="tag" className="btn_container" onClick={setClasses}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul className="parent">
          <img
            src={logo}
            onClick={() => {
              navigate("/");
            }}
            alt="Miroslav Hanisko"
          />
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp; Home &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" aria-hidden="true"></span>
              <span
                className={`animation-mask ${animationMaskClass}`}
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li
            onClick={() => {
              navigate("/mywork");
            }}
          >
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp; My Work &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" aria-hidden="true"></span>
              <span
                className={`animation-mask ${animationMaskClass}`}
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li
            onClick={() => {
              navigate("/myskills");
            }}
          >
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp; My Skills &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" aria-hidden="true"></span>
              <span
                className={`animation-mask ${animationMaskClass}`}
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp; Contact &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" aria-hidden="true"></span>
              <span
                className={`animation-mask ${animationMaskClass}`}
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li
            onClick={() => {
              navigate("/social");
            }}
          >
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp; Social &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" aria-hidden="true"></span>
              <span
                className={`animation-mask ${animationMaskClass}`}
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </ul>
      </nav>

      <section className={sectionClass}></section>
    </>
  );
}

export default VerticalNav;
