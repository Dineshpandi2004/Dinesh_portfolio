import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  const footerLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Top */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Brand */}
          <div className="footer-brand">

            <a href="#home">
              DINESH PANDI<span>.</span>
            </a>

            <p>
              WEB DEVELOPER
            </p>

          </div>


          {/* Footer Navigation */}
          <div className="footer-navigation">

            <span className="footer-title">
              NAVIGATION
            </span>

            <div className="footer-links">

              {footerLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                >
                  {item.name}
                </a>
              ))}

            </div>

          </div>


          {/* Social */}
          <div className="footer-social">

            <span className="footer-title">
              CONNECT
            </span>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
              <ArrowUpRight size={14} />
            </a>

            <a href="mailto:yourmail@gmail.com">
              EMAIL
              <ArrowUpRight size={14} />
            </a>

          </div>

        </motion.div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 DINESH PANDI. ALL RIGHTS RESERVED.
          </p>

          <a href="#home">
            BACK TO TOP
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;