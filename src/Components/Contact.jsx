import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react"; 
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const form = e.target;
    
    fetch("https://formsubmit.co/ajax/b034e6889ea2e3c4c70dc3d370721e25", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      })
    })
    .then(response => response.json())
    .then(() => {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(""), 5000);
    })
    .catch(error => {
      console.log(error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have a project idea, job opportunity or just
            want to connect? Feel free to reach out.
          </p>
        </motion.div>


        {/* Main Contact Area */}
        <div className="contact-grid">

          {/* Left Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:yourmail@gmail.com">
                  Dineshrajeshmdu@gmail.com
                </a>
              </div>
            </div> 

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>

    <div>
      <span>PHONE</span>

      <a href="tel:+91XXXXXXXXXX">
        +91 8438809244
      </a>
    </div>
  </div>


            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>LOCATION</span>

                <p>Madurai, Tamil Nadu</p>
              </div>
            </div>


            {/* Social */}
          

          </motion.div>


          {/* Form */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label>YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="form-group">
              <label>SUBJECT</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {status === "success" && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-error">
                Failed to send message. Please try again.
              </div>
            )}

            <button type="submit" className="send-btn" disabled={status === "sending"}>
              <span>{status === "sending" ? "SENDING..." : "SEND MESSAGE"}</span>
              <ArrowUpRight size={18} />
            </button>

          </motion.form>

        </div>


        {/* Bottom */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>AVAILABLE FOR OPPORTUNITIES</span>

          <div></div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;