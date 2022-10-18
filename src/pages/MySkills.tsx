import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MySkills() {
  return (
    <motion.div
      initial={{ y: -500 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.8 } }}
      className="body-page"
    >
      <h1>My skills</h1>
    </motion.div>
  );
}

export default MySkills;
