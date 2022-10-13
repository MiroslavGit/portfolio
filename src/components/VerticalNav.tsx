import { useState, useEffect } from "react";
import "./verticalNav.css";

function VerticalNav() {
  const [navClass, setnavClass] = useState("");
  const [sectionCLass, setSelectionCLass] = useState("");

  const setClasses = () => {
    navClass == "openMenu" ? setnavClass("") : setnavClass("openMenu");
    sectionCLass == "openSection"
      ? setSelectionCLass("")
      : setSelectionCLass("openSection");
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
          <h1>Nav menu</h1>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">sigup</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
        </ul>
      </nav>

      <section className={sectionCLass}></section>
    </>
  );
}

export default VerticalNav;
