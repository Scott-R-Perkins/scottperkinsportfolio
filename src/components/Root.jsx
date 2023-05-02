import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./ContactInfo";
import ICLTaskManagement from "./projects/ICLTaskManagement";
import DemonBreach from "./projects/DemonBreach";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -200, opacity: 0 },
  transition: { duration: 2 },
};

const Root = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/home"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div {...pageTransition}>
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/projects/icltaskmanagement"
          element={
            <motion.div {...pageTransition}>
              <ICLTaskManagement />
            </motion.div>
          }
        />
        <Route
          path="/projects/demonbreach"
          element={
            <motion.div {...pageTransition}>
              <DemonBreach />
            </motion.div>
          }
        />
        {/* Add other project components here as needed */}
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </Box>
  );
};

export default Root;
