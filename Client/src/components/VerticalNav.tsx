import { useState } from "react";
import { useNavigate } from "react-router";

import Card from "./Card";

import logo from "../assets/logo_1.png";
import meFeed1 from "../assets/me_feed_1.jpg";
import meFeed2 from "../assets/me_feed_2.jpg";
import meFeed3 from "../assets/me_feed_3.jpg";
import meFeed4 from "../assets/me_feed_4.jpg";

import "./verticalNav.scss";

function VerticalNav() {
  const navigate = useNavigate();

  const [navClass, setnavClass] = useState("");
  const [hamburgerClass, setnhamburgerClass] = useState("");
  const [sectionClass, setSelectionCLass] = useState("");

  const setClasses = () => {
    navClass === "openMenu" ? setnavClass("") : setnavClass("openMenu");
    navClass === "openMenu" ? setnhamburgerClass("") : setnhamburgerClass("activatehamburger");
    sectionClass === "openSection" ? setSelectionCLass("") : setSelectionCLass("openSection");
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
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/projects") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Projects &nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/abilities") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Abilities &nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li
              onClick={() => { setClasses(), navigate("/connect") }}
            >
              <a>
                &nbsp;&nbsp;&nbsp;&nbsp; Connect &nbsp;&nbsp;&nbsp;&nbsp;
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
          <div className="wrapper">
            <div id="app" className="CardContainer">
              <Card
                dataImage={meFeed2}
                header="Frontedn"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <Card
                dataImage={meFeed1}
                header="Backend"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <Card
                dataImage={meFeed4}
                header="UI/UX"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default VerticalNav;
