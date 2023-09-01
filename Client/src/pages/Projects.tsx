import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

import Project from "../components/Project";

import teebase from "../assets/projects/teebase/dashboard.png";
import teebase_1 from "../assets/projects/teebase/login.png";
import teebase_2 from "../assets/projects/teebase/registration.png";
import teebase_3 from "../assets/projects/teebase/dashboard.png";
import teebase_4 from "../assets/projects/teebase/drawing.png";
import teebase_5 from "../assets/projects/teebase/adding_notes.png";
import teebase_6 from "../assets/projects/teebase/map.png";
import teebase_7 from "../assets/projects/teebase/profile.png";

import domis_therapy from "../assets/projects/domis_therapy/home.png";
import domis_therapy_1 from "../assets/projects/domis_therapy/home.png";
import domis_therapy_2 from "../assets/projects/domis_therapy/klasicka masaz.png";
import domis_therapy_3 from "../assets/projects/domis_therapy/maderoterapia_tela.png";
import domis_therapy_4 from "../assets/projects/domis_therapy/maderoterapia_tvare.png";
import domis_therapy_5 from "../assets/projects/domis_therapy/brazilska_maderoterapia.png";
import domis_therapy_6 from "../assets/projects/domis_therapy/kontakt.png";
import domis_therapy_7 from "../assets/projects/domis_therapy/recenzie.png";

import dobromed from "../assets/projects/dobromed/home.png";
import dobromed_1 from "../assets/projects/dobromed/home.png";
import dobromed_2 from "../assets/projects/dobromed/ubytovanie.png";
import dobromed_3 from "../assets/projects/dobromed/vcelarstvo.png";
import dobromed_4 from "../assets/projects/dobromed/agrosluzby.png";
import dobromed_5 from "../assets/projects/dobromed/rez.png";
import dobromed_6 from "../assets/projects/dobromed/kontakt.png";

import misekova from "../assets/projects/misekova/home.png";
import misekova_1 from "../assets/projects/misekova/home.png";
import misekova_2 from "../assets/projects/misekova/sluzby.png";
import misekova_3 from "../assets/projects/misekova/blog.png";
import misekova_4 from "../assets/projects/misekova/contact.png";

import gym_mshop from "../assets/projects/gym_mshop/home.png";

import miroslav_web_dev from "../assets/projects/miroslav_web_dev/home.png";
import miroslav_web_dev_1 from "../assets/projects/miroslav_web_dev/home.png";
import miroslav_web_dev_2 from "../assets/projects/miroslav_web_dev/about.png";
import miroslav_web_dev_3 from "../assets/projects/miroslav_web_dev/portfolio.png";
import miroslav_web_dev_4 from "../assets/projects/miroslav_web_dev/skills.png";

import "./Projects.scss";
interface ProjectTypes {
  direction: string;
  title: string;
  problem: string;
  solution: string;
  imgPath: string;
  childrenPhotos: string[];
  childrenDescription: string[];
  tags: string[];
}
interface PickerTagTypes {
  title: string;
}

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

  const [selectedTags, setSelectedTags] = useState([]);

  const projects: ProjectTypes[] = [
    {
      direction: "left",
      title: "TeeBase",
      problem: "Students on college struggle to find a platform that will enable them to easily draw and share their notes or research",
      solution: "Built a react application that will enable students to saving their notes and share it with other students",
      imgPath: teebase,
      childrenPhotos: [teebase_1, teebase_2, teebase_3, teebase_4, teebase_5, teebase_6, teebase_7],
      childrenDescription: ["Login", "Registration", "Dashboard", "Drawing", "Adding notes", "Map", "Profile"],
      tags: ["React", "Redux", "Typescript", "NodeJS", "Express", "MongoDB", "JWT", "Bcrypt", "Mui"]
    },
    {
      direction: "right",
      title: "Domis Therapy",
      problem: "Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations.",
      solution: "Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.",
      imgPath: domis_therapy,
      childrenPhotos: [domis_therapy_1, domis_therapy_2, domis_therapy_3, domis_therapy_4, domis_therapy_5, domis_therapy_6, domis_therapy_7],
      childrenDescription: ["Home", "Klasická masáž", "Maderoterapia tela", "Maderoterapia tváre", "Brazílska maderoterapia", "Kontakt", "Recenzie"],
      tags: ["React", "Bootstrap"]
    },
    {
      direction: "left",
      title: "Dobromed",
      problem: "Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations.",
      solution: "Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.",
      imgPath: dobromed,
      childrenPhotos: [dobromed_1, dobromed_2, dobromed_3, dobromed_4, dobromed_5, dobromed_6],
      childrenDescription: ["Home", "Ubytovanie", "Včelárstvo", "Agroslužby", "Rez", "Kontakt"],
      tags: ["Wordpress", "Elementor"]
    },
    {
      direction: "right",
      title: "Misekova",
      problem: "Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations.",
      solution: "Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.",
      imgPath: misekova,
      childrenPhotos: [misekova_1, misekova_2, misekova_3, misekova_4],
      childrenDescription: ["Home", "Služby", "Blog", "Kontakt"],
      tags: ["Wordpress", "Elementor"],
    },
    {
      direction: "left",
      title: "Gym Mshop",
      problem: "Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations.",
      solution: "Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.",
      imgPath: gym_mshop,
      childrenPhotos: [],
      childrenDescription: [],
      tags: ["PHP", "Html", "CSS", "JavaScript", "MySQL"],
    },
    {
      direction: "right",
      title: "Miroslav Web Dev",
      problem: "Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations.",
      solution: "Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.",
      imgPath: miroslav_web_dev,
      childrenPhotos: [miroslav_web_dev_1, miroslav_web_dev_2, miroslav_web_dev_3, miroslav_web_dev_4],
      childrenDescription: ["Home", "About", "Portfolio", "Skills"],
      tags: ["PHP", "Html", "CSS", "JavaScript", "MySQL"],
    },
  ];

  const pickerTags: PickerTagTypes[] = [
    { title: 'React' },
    { title: 'Redux' },
    { title: 'Typescript' },
    { title: 'NodeJS' },
    { title: 'Express' },
    { title: 'MongoDB' },
    { title: 'JWT' },
    { title: 'Bcrypt' },
    { title: 'Mui' },
    { title: 'Bootstrap' },
    { title: 'Wordpress' },
    { title: 'Elementor' },
    { title: 'PHP' },
    { title: 'Html' },
    { title: 'CSS' },
    { title: 'JavaScript' },
    { title: 'MySQL' },
  ];

  const handleTagSelect = (event: any, tags: any) => {
    setSelectedTags(tags);
  };

  const filteredProjects = projects.filter((project: ProjectTypes) =>
    selectedTags.every((tag: PickerTagTypes) => project.tags.includes(tag.title))
  );

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
          <br />
          I'm always ready to collaborate on exciting projects and bring new ideas to life.
          <br />
          Let's create something amazing together!
        </h2>
      </div>

      <div>
        <Autocomplete
          className="multiPicker"
          multiple
          id="checkboxes-tags-demo"
          options={pickerTags}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          onChange={handleTagSelect}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} className="input" label="Specify project" />
          )}
        />
      </div>

      <div className="gallery">
        {filteredProjects.map((project: ProjectTypes, index: number) => (
          <Project
            key={index}
            direction={project.direction}
            title={project.title}
            problem={project.problem}
            solution={project.solution}
            imgPath={project.imgPath}
            childrenPhotos={project.childrenPhotos}
            childrenDescription={project.childrenDescription}
            tags={project.tags}
          />
        ))}
        {/* <Project
          direction="left"
          title="TeeBase"
          problem="Students on college struggle to find a platform that will enable them to easily draw and share their notes or research"
          solution="Built a react application that will enable students to saving their notes and share it with other students"
          imgPath={teebase}
          childrenPhotos={[teebase_1, teebase_2, teebase_3, teebase_4, teebase_5, teebase_6, teebase_7]}
          childrenDescription={["Login", "Registration", "Dashboard", "Drawing", "Adding notes", "Map", "Profile"]}
          tags={["React", "Redux", "Typescript", "NodeJS", "Express", "MongoDB", "JWT", "Bcrypt", "Mui"]}
        />
        <Project
          direction="right"
          title="Domis Therapy"
          problem="Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations."
          solution="Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer."
          imgPath={domis_therapy}
          childrenPhotos={[domis_therapy_1, domis_therapy_2, domis_therapy_3, domis_therapy_4, domis_therapy_5, domis_therapy_6, domis_therapy_7]}
          childrenDescription={["Home", "Klasická masáž", "Maderoterapia tela", "Maderoterapia tváre", "Brazílska maderoterapia", "Kontakt", "Recenzie"]}
          tags={["React", "Bootstrap"]}
        />
        <Project
          direction="left"
          title="Dobromed"
          problem="Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations."
          solution="Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer."
          imgPath={dobromed}
          childrenPhotos={[dobromed_1, dobromed_2, dobromed_3, dobromed_4, dobromed_5, dobromed_6]}
          childrenDescription={["Home", "Ubytovanie", "Včelárstvo", "Agroslužby", "Rez", "Kontakt"]}
          tags={["Wordpress", "Elementor"]}
        />
        <Project
          direction="right"
          title="Misekova"
          problem="Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations."
          solution="Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer."
          imgPath={misekova}
          childrenPhotos={[misekova_1, misekova_2, misekova_3, misekova_4]}
          childrenDescription={["Home", "Služby", "Blog", "Kontakt"]}
          tags={["Wordpress", "Elementor"]}
        />
        <Project
          direction="left"
          title="Gym Mshop"
          problem="Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations."
          solution="Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer."
          imgPath={gym_mshop}
          childrenPhotos={[]}
          childrenDescription={[]}
          tags={["PHP", "Html", "CSS", "JavaScript", "MySQL"]}
        />
        <Project
          direction="right"
          title="Miroslav Web Dev"
          problem="Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations."
          solution="Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer."
          imgPath={miroslav_web_dev}
          childrenPhotos={[miroslav_web_dev_1, miroslav_web_dev_2, miroslav_web_dev_3, miroslav_web_dev_4]}
          childrenDescription={["Home", "About", "Portfolio", "Skills"]}
          tags={["PHP", "Html", "CSS", "JavaScript", "MySQL"]}
        />*/}
      </div>
    </motion.div>
  );
}

export default MyWork;
