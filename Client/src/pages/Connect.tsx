import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import "./Connect.scss";

function Cotact() {
  const dataFetchedRef = useRef(false);

  const [fullnameValue, setFullnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);



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

  const handleSend = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
  }

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
            <span className="pismeno">C</span>
            <span className="pismeno">o</span>
            <span className="pismeno">n</span>
            <span className="pismeno">n</span>
            <span className="pismeno">e</span>
            <span className="pismeno">c</span>
            <span className="pismeno">t</span>
          </div>
        </div>
      </div>

      <div className="popis-div">
        <hr className="hr" />
        <h2 className="popis">
          Let's Connect !
          <br /><br />
          I believe in the power of collaboration and building meaningful connections within the web development community.
          <br /><br />
          Feel free to connect with me on any of these platforms. Whether you have a project idea, career opportunity, or simply want to say hello, I'm here to listen and respond promptly.
        </h2>
      </div>

      <div className="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>My profiles</h2>
            <div className="links">
              <div className="link">
                <a><LinkedInIcon className="icon" /> </a>
              </div>
              <div className="link">
                <a><GitHubIcon className="icon" /></a>
              </div>
              <div className="link">
                <a><InstagramIcon className="icon" /></a>
              </div>
              <div className="link">
                <a><EmailIcon className="icon" /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ textAlign: "center" }}
            >
              <div className="form-item">
                <TextField
                  id="outlined-basic"
                  label="Fullname"
                  variant="filled"
                  helperText="Looks fine!"
                  error={false}
                  required={true}
                  fullWidth
                  value={fullnameValue}
                  onChange={(e) => setFullnameValue(e.target.value)}
                />
              </div>
              <div className="form-item">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  helperText="Looks fine!"
                  error={false}
                  required={true}
                  fullWidth
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
              <div className="form-item">
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="filled"
                  helperText="Looks fine!"
                  multiline
                  rows={3}
                  error={false}
                  required={true}
                  fullWidth
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                />
              </div>
              <LoadingButton
                onClick={(e) => handleSend(e)}
                endIcon={<SendIcon />}
                loading={isLoading}
                loadingPosition="end"
                variant="contained"
              >
                <span>Send</span>
              </LoadingButton>
            </Box>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Cotact;
