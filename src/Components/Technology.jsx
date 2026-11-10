import { motion } from "framer-motion";
import "./Technology.css";

const technologies = [
  {
    category: "FRONTEND",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    category: "BACKEND",
    items: ["Java", "Node.js", "Express.js"],
  },
  {
    category: "DATABASE",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "TOOLS",
    items: ["GitHub", "VS Code", "Antigravity"],
  },
];

function Technology() {
  return (
    <section className="technology" id="skills">

      <div className="technology-container">

        {/* Heading */}
        <motion.div
          className="technology-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="technology-label">
            <span></span>
            TECH STACK
          </div>

          <h2>
            Tools & 
            <span> build the web.</span>
          </h2>

          <p>
            A collection of technologies and tools I use
            to create modern, responsive and scalable
            web applications.
          </p>
        </motion.div>


        {/* Technology Groups */}
        <div className="technology-list">

          {technologies.map((group, index) => (
            <motion.div
              className="technology-group"
              key={group.category}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <div className="technology-category">
                {group.category}
              </div>


              <div className="technology-items">

                {group.items.map((item, itemIndex) => (
                  <motion.div
                    className="technology-card"
                    key={item}
                    whileHover={{
                      y: -6,
                      borderColor: "#00e5ff",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <span className="tech-number">
                      0{itemIndex + 1}
                    </span>

                    <span className="tech-name">
                      {item}
                    </span>

                    <span className="tech-arrow">
                      ↗
                    </span>

                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Technology;