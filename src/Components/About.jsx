import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span></span>
            ABOUT ME
          </div>

          <h2>
            Turning ideas into
            <br />
            <span>digital experiences.</span>
          </h2>

          <p className="about-intro">
            I'm Dinesh Pandi, a passionate Web and Application Developer
            focused on building modern, responsive and scalable
            web applications.
          </p>


          <a href="#contact" className="about-link">
            LET'S WORK TOGETHER
            <ArrowUpRight size={17} />
          </a>
        </motion.div>


        {/* RIGHT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* CARD 1 */}
          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-card-icon">
              <Code2 size={22} />
            </div>

            <div>
              <h3>FRONTEND</h3>

              <p>
                React, JavaScript, HTML, CSS and
                responsive UI development.
              </p>
            </div>
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-card-icon">
              <Layers3 size={22} />
            </div>

            <div>
              <h3>BACKEND & DATABASE</h3>

              <p>
                JAVA, NODE.js, REST APIs,
                MySQL and Data management.
              </p>
            </div>
          </motion.div>


          {/* CARD 3 */}
          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-card-icon">
              <Rocket size={22} />
            </div>

            <div>
              <h3>DEVELOPMENT</h3>

              <p>
                Building clean, responsive and
                user-friendly web applications.
              </p>
            </div>
          </motion.div>

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
          <strong>4+</strong>
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