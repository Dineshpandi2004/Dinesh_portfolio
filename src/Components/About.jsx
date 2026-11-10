import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";
import dineshImg from "../assets/dinesh.jpeg";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT COLUMN - ARCHED IMAGE WITH FLOATING BADGE */}
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-decor"></div>

          <div className="about-image-card">
            <img src={dineshImg} alt="Dinesh Pandi" className="about-image" />
            <div className="about-image-glow"></div>
          </div>

          <div className="about-badge">
            <div className="badge-icon-box">
              <Award size={18} />
            </div>
            <div className="badge-text">
              <span className="badge-sub">DEVELOPER LEVEL</span>
              <span className="badge-title">Web Developer</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - CONTENT & 2-COLUMN CHECKLIST */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="section-label">
            <span></span>
            ABOUT ME
          </div>

          <h2>
            Turning ideas &amp; <span className="font">digital experiences.</span>
          </h2>

          <p className="about-intro">
            Hello! I'm <strong className="text-accent">Dinesh Pandi</strong>, an aspiring and passionate <strong className="text-bold">Web Development intern</strong> from Madurai, where I gain hands-on experience in developing modern, responsive, and user-friendly web applications.
          </p>

          <p className="about-description">
            I enjoy creating clean and interactive user interfaces, improving website responsiveness, and exploring real-world application workflows. I have practical experience working on CRM applications, landing pages, UI improvements, application testing, and debugging.
          </p>

          <div className="about-checklist">
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>Modern frontend development using HTML, CSS, JavaScript &amp; React.js</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>Website testing, bug identification, and UI improvements</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>Responsive and user-friendly interfaces using Tailwind CSS</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>Real-world CRM application development and workflow analysis</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>Interactive UI development and component-based architecture</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>AI-assisted development using ChatGPT and Antigravity</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* STATS */}
      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="stat">
          <strong>04+</strong>
          <span>PROJECTS</span>
        </div>

        <div className="stat">
          <strong>04+</strong>
          <span>TECHNOLOGIES</span>
        </div>

        <div className="stat">
          <strong>01+</strong>
          <span>YEAR SELF LEARNING</span>
        </div>

        <div className="stat">
          <strong>100%</strong>
          <span>PASSION</span>
        </div>
      </motion.div>

    </section>
  );
}

export default About;
