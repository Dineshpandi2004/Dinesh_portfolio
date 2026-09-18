import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Project.css";

const projects = [
     {
    number: "01",
    title: "SPOTIFY CLONE",
    category: "WEB APPLICATION",
    description:
     "A Spotify clone that allows users to explore and play music, featuring a responsive design and interactive user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dineshpandi2004/Spotify_Clone",
    live: "https://spotify-clone-orpin-ten-73.vercel.app//",
  },
  {
    number: "02",
    title: "HOTEL BOOKING",
    category: "FULL STACK WEB APPLICATION",
    description:
      "A modern hotel booking platform where users can explore hotels, check room details and make reservations through a responsive interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dineshpandi2004/Hotel%20booking",
    live: "https://hotel-booking-orpin-ten-73.vercel.app/",
  },
  {
    number: "03",
    title: "SMART JOB PORTAL",
    category: "Web Application",
    description:
      "A job portal designed to connect job seekers and recruiters with job listings, applications and user management features.",
    tech: ["React","MySQL", "Tailwind"],
    github: "https://github.com/Dineshpandi2004/Smart-Job-Portal",
    live: "https://smart-job-portal.vercel.app/",
  },
  {
    number: "04",
    title: "E-COMMERCE APP",
    category: "FULL STACK APPLICATION",
    description:
      "A responsive e-commerce application with product browsing, cart management, authentication and checkout functionality.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/Dineshpandi2004/E-Commerce-App",
    live: "https://e-commerce-app.vercel.app/",
  },
  {
    number: "05",
    title: "CRM WEBSITE",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A modern personal portfolio website focused on clean UI, responsive design and smooth animations.",
    tech: ["React", "JavaScript", "CSS", "Framer Motion"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-label">
            <span></span>
            FEATURED PROJECTS
          </div>

          <div className="projects-heading-row">

            <h2>
              Projects <span>work.</span>
            </h2>

          </div>
        </motion.div>


        {/* Project List */}
        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.number}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              {/* Number */}
              <div className="project-number">
                {project.number}
              </div>


              {/* Main Content */}
              <div className="project-content">

                <div className="project-category">
                  {project.category}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="project-tech">

                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>


                {/* Links */}
                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE DEMO
                    <ArrowUpRight size={15} />
                  </a>

                </div>

              </div>


              {/* Project Visual */}
              <div className="project-visual">

                <div className="project-visual-inner">

                  <span>
                    {project.title}
                  </span>

                  <ArrowUpRight size={30} />

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* Bottom */}
        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            MORE PROJECTS COMING SOON
          </span>

          <div></div>
        </motion.div>

      </div>

    </section>
  );
}

export default Projects;