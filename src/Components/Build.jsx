import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Smartphone,
  GitBranch,
} from "lucide-react";
import "./Build.css";

const services = [
  {
    number: "01",
    icon: <Layout size={25} />,
    title: "WEB INTERFACES",
    description:
      "I build clean, modern and responsive user interfaces with a strong focus on usability and visual design.",
    tech: "HTML • CSS • JavaScript • React",
  },
  {
    number: "02",
    icon: <Code2 size={25} />,
    title: "REACT APPLICATIONS",
    description:
      "I create interactive React applications using reusable components, modern UI patterns and smooth animations.",
    tech: "React • JavaScript • Framer Motion",
  },
  {
    number: "03",
    icon: <Server size={25} />,
    title: "FULL STACK APPS",
    description:
      "I develop complete web applications connecting frontend interfaces with backend APIs and databases.",
    tech: "Node.js • Express • Spring Boot",
  },
  {
    number: "04",
    icon: <Database size={25} />,
    title: "DATABASE SYSTEMS",
    description:
      "I work with structured and MySQL databases to manage application data efficiently.",
    tech: "MySQL • MongoDB",
  },
  {
    number: "05",
    icon: <Smartphone size={25} />,
    title: "RESPONSIVE DESIGN",
    description:
      "I design websites that provide a consistent experience across desktop, tablet and mobile devices.",
    tech: "CSS • Flexbox • Grid • Media Queries",
  },
  {
    number: "06",
    icon: <GitBranch size={25} />,
    title: "PROJECT DEVELOPMENT",
    description:
      "I turn ideas into functional projects with clean code, version control and a focus on continuous improvement.",
    tech: "Git • GitHub • VS Code",
  },
];

function Build() {
  return (
    <section className="what-build" id="what-i-build">

      <div className="what-build-container">

        {/* Header */}
        <motion.div
          className="what-build-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="what-build-label">
            <span></span>
            WHAT I BUILD
          </div>

          <div className="what-build-heading">

            <h2>
              Ideas into
              <br />
              <span>digital products.</span>
            </h2>

            <p>
              I build responsive and user-focused web
              applications using modern frontend and
              backend technologies.
            </p>

          </div>
        </motion.div>


        {/* Cards */}
        <div className="build-grid">

          {services.map((service, index) => (

            <motion.div
              className="build-card"
              key={service.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="build-top">

                <span className="build-number">
                  {service.number}
                </span>

                <div className="build-icon">
                  {service.icon}
                </div>

              </div>


              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>


              <div className="build-tech">
                {service.tech}
              </div>


              <div className="build-line"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Build;