import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Project.css";
import spotifyImg from "../assets/spotify.png";
import hotelImg from "../assets/hotel.jpg";
import smartJobImg from "../assets/smart job.jpg";
import glitchImg from "../assets/GLITCH.png";

const projects = [
     {
    number: "01",
    title: "SPOTIFY CLONE",
    category: "Web Application",
    description:
     "A Spotify clone that allows users to explore and play music, featuring a responsive design and interactive user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dineshpandi2004/Spotify_Clone",
    live: "https://spotify-clone-orpin-ten-73.vercel.app//",
    image: spotifyImg,
  },
  {
    number: "02",
    title: "HOTEL BOOKING",
    category: "Web Application",
    description:
      "A modern hotel booking platform where users can explore hotels, check room details and make reservations through a responsive interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dineshpandi2004/Hotel%20booking",
    live: "https://hotel-booking-orpin-ten-73.vercel.app/",
    image: hotelImg,
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
    image: smartJobImg,
  },
  {
    number: "04",
    title: "E-COMMERCE APPLICATION",
    category: "Web Application",
    description:
      "A responsive e-commerce application with product browsing, cart management, authentication and checkout functionality.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/Dineshpandi2004/E-Commerce-App",
    live: "https://e-commerce-app.vercel.app/",
    image: glitchImg,
  },
];

function ProjectVisual({ project }) {
  const containerRef = useRef(null);
  const animIdRef = useRef(null);
  const isInteractingRef = useRef(false);

  const startScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 15) return;

    isInteractingRef.current = false;
    cancelAnimationFrame(animIdRef.current);

    const startPos = el.scrollTop;
    const distance = maxScroll - startPos;
    if (distance <= 0) return;

    const duration = Math.max(3500, (distance / 60) * 1000);
    const startTime = performance.now();

    const step = (now) => {
      if (isInteractingRef.current) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      el.scrollTop = startPos + distance * ease;

      if (progress < 1) {
        animIdRef.current = requestAnimationFrame(step);
      }
    };

    animIdRef.current = requestAnimationFrame(step);
  };

  const stopScroll = () => {
    cancelAnimationFrame(animIdRef.current);
    const el = containerRef.current;
    if (!el) return;
    const startPos = el.scrollTop;
    if (startPos <= 0) return;

    const duration = 600;
    const startTime = performance.now();

    const stepBack = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.scrollTop = startPos * (1 - ease);

      if (progress < 1) {
        animIdRef.current = requestAnimationFrame(stepBack);
      }
    };

    animIdRef.current = requestAnimationFrame(stepBack);
  };

  const handleManualInteract = () => {
    isInteractingRef.current = true;
    cancelAnimationFrame(animIdRef.current);
  };

  return (
    <div
      className="project-visual"
      ref={containerRef}
      onMouseEnter={startScroll}
      onMouseLeave={stopScroll}
      onWheel={handleManualInteract}
      onTouchStart={handleManualInteract}
    >
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="project-visual-link"
        aria-label={`View live demo of ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay" />
      </a>
    </div>
  );
}

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
            My Strongest Works
          </div>

          <div className="projects-heading-row">

            <h2>
              Project <span>works.</span>
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
              <ProjectVisual project={project} />

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
         

          <div></div>
        </motion.div>

      </div>

    </section>
  );
}

export default Projects;