import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./abilities.scss";

function MySkills() {
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

  /* Accordion */
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.8 } }}
      className="childPage"
    >
      <div style={{ display: "flex", marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span className="pismeno">A</span>
            <span className="pismeno">b</span>
            <span className="pismeno">i</span>
            <span className="pismeno">l</span>
            <span className="pismeno">i</span>
            <span className="pismeno">t</span>
            <span className="pismeno">i</span>
            <span className="pismeno">e</span>
            <span className="pismeno">s</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="popis-div">
          <hr className="hr" />
          <h2 className="popis">
            As a web developer, I possess a diverse set of skills and expertise that allow me to create dynamic and engaging web applications.
            <br />
            Here are some of the key areas I specialize in:
          </h2>

          <div className="accordions">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#EEEEEE !important' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Front-end Development</Typography>
                {expanded !== 'panel1' && <Typography sx={{ color: '#EEEEEE' }}> I have a strong foundation in HTML, CSS, and ...</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I have a strong foundation in HTML, CSS, and JavaScript. I am proficient in modern front-end frameworks such as React.js and have experience in building responsive and user-friendly interfaces.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#EEEEEE !important' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Back-end Development</Typography>
                {expanded !== 'panel2' && <Typography sx={{ color: '#EEEEEE' }}>  I am well-versed in server-side programming lan ...</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I am well-versed in server-side programming languages like Node.js and have experience working with databases such as MongoDB and MySQL. I can handle server-side logic and create robust APIs to support web applications.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#EEEEEE !important' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>UI/UX Design</Typography>
                {expanded !== 'panel3' && <Typography sx={{ color: '#EEEEEE' }}> I have a keen eye for design and strive to create ...</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I have a keen eye for design and strive to create visually appealing and intuitive user interfaces. I focus on delivering seamless user experiences by incorporating best practices in usability and accessibility.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#EEEEEE !important' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Responsive Design</Typography>
                {expanded !== 'panel4' && <Typography sx={{ color: '#EEEEEE' }}>  I am skilled in developing websites that are optimized for  ...</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I am skilled in developing websites that are optimized for various devices and screen sizes. I prioritize responsive design principles to ensure that the user experience remains consistent across different platforms.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#EEEEEE !important' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Version Control</Typography>
                {expanded !== 'panel5' && <Typography sx={{ color: '#EEEEEE' }}>  I am proficient in using Git for version control and  ...</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I am proficient in using Git or SVN for version control and collaboration. I have experience working with Git and SVN repositories and using branching strategies to manage code changes effectively.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>

        <div className="skills-diagram">
          <div className="item skill-1 ">SVN</div>
          <div className="item skill-2">Git</div>
          <div className="item skill-3">C#</div>
          <div className="item skill-4">Javascript</div>
          <div className="item skill-5">UI/UX</div>
          <div className="item skill-6">CSS3</div>
          <br />
          <div className="item skill-7 shine">HTML5</div>
          <div className="item skill-8">C</div>
          <div className="item skill-9 shine">React.js</div>
          <div className="item skill-10"><span style={{ fontSize: ".8em" }}>Node.js</span></div>
          <br />
        </div>
      </div>

    </motion.div >
  );
}

export default MySkills;
