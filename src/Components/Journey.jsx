import { motion } from "framer-motion";
import "./Journey.css";

const journey = [
  {
    year: "2025",
    title: "BE ECE GRADUATE",
    description:
      "Completed my Bachelor of Engineering in Electronics and Communication Engineering and started exploring opportunities in software development.",
  },
  {
    year: "2025",
    title: "NON- IT BACKGROUND",
    description:
      "Transitioned from a non-IT background to the world of web development, learning programming languages and frameworks to build web applications.",},
  {
    year: "2026",
    title: "SELF-LEARNING",
    description:
      "Dedicated time to self-learning web development through online courses, tutorials and hands-on practice, focusing on front-end and back-end technologies.",},
  {
    year: "2026",
    title: "JAVA FULL STACK DEVELOPMENT COURSE COMPLETE IN IDM TECHPARK-COIMBATORE",
    description:
      "Completed a comprehensive Java Full Stack Development course at IDM Techpark, Coimbatore, gaining practical experience in building web applications using Java, Spring Boot, and related technologies.",},
  {
    year: "NOW",
    title: "WEB DEVELOPEMENT INTERN IN ASK EVA, MADURAI",
    description:
      "Currently working as a Web Development Intern at Ask Eva, Madurai, gaining hands-on experience in real-world web development projects.",},
];

function Journey() {
  return (
    <section className="journey" id="experience">

      <div className="journey-container">

        {/* Header */}
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }} >
        
          <div className="journey-label">
            <span></span>
            DEVELOPMENT JOURNEY
          </div>

          <h2>
            From learning
            <br />
            <span>to building.</span>
          </h2>

          <p>
            My journey from an ECE graduate to an aspiring
            Full Stack Developer, learning continuously
            through technology and real-world projects.
          </p>
        </motion.div>


        {/* Timeline */}
        <div className="journey-timeline">

          {journey.map((item, index) => (
            <motion.div
              className="journey-item"
              key={item.year + item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* Year */}
              <div className="journey-year">
                {item.year}
              </div>


              {/* Dot */}
              <div className="journey-dot">
                <span></span>
              </div>


              {/* Content */}
              <div className="journey-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;