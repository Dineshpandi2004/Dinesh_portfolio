import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      {/* Floating particles */}
      <motion.span
        className="particle particle-one"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="particle particle-two"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Main Container */}
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span></span>
            HELLO, I'M
          </motion.div>


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          >
            DINESH PANDI <b>.,</b>            
          </motion.h1>


          {/* Role */}
          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
          >
            FULL STACK DEVELOPER
          </motion.h2>


          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
          >
            I build modern, responsive and user-friendly
            web applications using React, Java
            and modern web technologies.
          </motion.p>


          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >

            <motion.a
              href="#contact"
              className="hero-primary-btn"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              HIRE ME
              <ArrowDownRight size={17} />
            </motion.a>


            <motion.a
              href="/resume.pdf"
              className="hero-secondary-btn"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
            >
              DOWNLOAD CV
              <Download size={17} />
            </motion.a>

          </motion.div>


          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
            }}
          >
            <a
              href="https://github.com/Dineshpandi2004/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://cdn.simpleicons.org/github/777777" alt="GitHub" style={{ width: 15, height: 15 }} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dineshpandi-s/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: 15, height: 15, filter: "grayscale(100%) opacity(0.7)" }} />
              LinkedIn
            </a>
          </motion.div>

        </div>


        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src="/hero-graphic.jpg" alt="Technology Orbit" className="hero-graphic-image" />
        </motion.div>

      </div>


      {/* Scroll */}
      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        SCROLL TO EXPLORE
        <ArrowDownRight size={15} />
      </motion.div>

    </section>
  );
}

export default Hero;