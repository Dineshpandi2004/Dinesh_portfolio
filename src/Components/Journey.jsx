import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, GraduationCap, X, ExternalLink } from "lucide-react";
import certificateImg from "../assets/certificate.jpg";
import "./Journey.css";

const workExperience = [
  {
    year: "NOW",
    title: "Web Development Intern, ASKEVA Communications, MADURAI",
    description:
      "Currently working as a Web Development Intern at Ask Eva, Madurai, gaining hands-on experience in real-world web development projects.",
  },
  {
    year: "2025",
    title: "Junior Design Engineer, WABCO-ZF CVCS, Chengalpattu",
    description:
      "Cross-Functional& Quality on Collaborated with production and quality teams on prototype validation,root cause analysis to resolve fitment issues.",
  },
   {
    year: "2024",
    title: "Web Development Intern, Precision Informatic Pvt Ltd, Chennai",
    description:
      "Developed and styled responsive web pages using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and mobile-friendly layouts."
  },

  
];

const educationAndCertificates = [
  {
    year: "2026",
    title: "JAVA FULL STACK DEVELOPMENT COURSE COMPLETE IN IDM TECHPARK-COIMBATORE",
    description:
      "Completed a comprehensive Java Full Stack Development course at IDM Techpark, Coimbatore, gaining practical experience in building web applications using Java, Spring Boot, and related technologies.",
    certificate: {
      title: "TN Skill Corporation Certificate of Recognition",
      role: "Junior Software Developer - IT-ITeS",
      organization: "TN Skill Corporation / Vinsys IT Services",
      image: certificateImg,
    },
  },
  {
    year: "2026",
    title: "SELF-LEARNING",
    description:
      "Dedicated time to self-learning web development through online courses, tutorials and hands-on practice, focusing on front-end and back-end technologies.",
  },
  {
    year: "2025",
    title: "BE ECE GRADUATE",
    description:
      "Completed my Bachelor of Engineering in Electronics and Communication Engineering and started exploring opportunities in software development.",
  },
];

function Journey() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const displayedItems =
    activeTab === "experience" ? workExperience : educationAndCertificates;

  return (
    <section className="journey" id="experience">
      <div className="journey-container">
        {/* Header */}
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="journey-label">
            <span></span>
            PROFESSIONAL JOURNEY
          </div>

          <h2>
            From learning <span>to building.</span>
          </h2>

          <p>
            My journey from an ECE graduate to an aspiring Full Stack Developer, learning continuously through technology and real-world projects.
          </p>
        </motion.div>

        {/* Tab Filter Buttons */}
        <div className="journey-tabs">
          <button
            type="button"
            className={`journey-tab ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase size={16} />
            WORK EXPERIENCE
          </button>

          <button
            type="button"
            className={`journey-tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap size={16} />
            EDUCATION & CERTIFICATES
          </button>
        </div>

        {/* Timeline */}
        <div className="journey-timeline" key={activeTab}>
          {displayedItems.map((item, index) => (
            <motion.div
              className="journey-item"
              key={item.year + item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Year */}
              <div className="journey-year">{item.year}</div>

              {/* Dot */}
              <div className="journey-dot">
                <span></span>
              </div>

              {/* Content */}
              <div className="journey-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {item.certificate && (
                  <button
                    type="button"
                    className="verify-cert-btn"
                    onClick={() => setSelectedCert(item.certificate)}
                  >
                    <Award size={15} />
                    VERIFY CERTIFICATE
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="cert-modal-backdrop"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div className="cert-modal-info">
                  <div className="cert-modal-icon-badge">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4>{selectedCert.title}</h4>
                    <p>
                      {selectedCert.role} • {selectedCert.organization}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="cert-modal-body">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                />
              </div>

              <div className="cert-modal-footer">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-action-btn"
                >
                  VIEW FULL IMAGE
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Journey;