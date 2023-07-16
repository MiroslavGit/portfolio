import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
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

  const [fullnameValue, setFullnameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ fullname: boolean; email: boolean; message: boolean }>({
    fullname: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    addShowClassToLetters();
  }, []);

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validInputs = () => {
    const hasErrors =
      fullnameValue.trim() === '' ||
      !validateEmail(emailValue) ||
      messageValue.trim() === '';

    setErrors({
      fullname: fullnameValue.trim() === '',
      email: !validateEmail(emailValue),
      message: messageValue.trim() === '',
    });

    return !hasErrors;
  };

  const handleSend = (e: any) => {
    e.preventDefault();

    const validIpnuts = validInputs();

    if (validIpnuts) {
      setIsLoading(true);
    }
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
          I believe in the power of collaboration and building meaningful connections within the web development community.
          <br /><br />
          Feel free to connect with me on any of these platforms. Whether you have a project idea, career opportunity, or simply want to say hello, I'm here to listen and respond promptly.
        </h2>
      </div>

      <div className="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>Let's Connect !</h2>
            <div className="links">
              <div className="link">
                <a href="https://www.linkedin.com/in/miroslav-hanisko-b1abb8223"><LinkedInIcon className="icon" /> </a>
              </div>
              <div className="link">
                <a href="https://github.com/MiroslavGit"><GitHubIcon className="icon" /></a>
              </div>
              <div className="link">
                <a href="https://www.instagram.com/ten_mirek_"><InstagramIcon className="icon" /></a>
              </div>
              <div className="link">
                <a href="mailto:miroslav2022@gmail.com"><EmailIcon className="icon" /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <Box
              component="form"

              sx={{ textAlign: "center" }}
            >
              <TextField
                id="outlined-basic"
                label="Fullname"
                variant="filled"
                helperText={errors.fullname ? 'Please enter your fullname' : 'Looks fine!'}
                error={errors.fullname}
                required={true}
                fullWidth
                value={fullnameValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFullnameValue(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="filled"
                helperText={errors.email ? 'Invalid email address' : 'Looks fine!'}
                error={errors.email}
                required={true}
                fullWidth
                value={emailValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Message"
                variant="filled"
                helperText={errors.message ? 'Please enter your message' : 'Looks fine!'}
                multiline
                rows={3}
                error={errors.message}
                required={true}
                fullWidth
                value={messageValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMessageValue(e.target.value)}
              />
              <LoadingButton
                onClick={handleSend}
                endIcon={<SendIcon />}
                loading={isLoading}
                loadingPosition="end"
                variant="contained"
              >
                <span> {isLoading ? "Sending" : "Send"}</span>
              </LoadingButton>
            </Box>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Cotact;
