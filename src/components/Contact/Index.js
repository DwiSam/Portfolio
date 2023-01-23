import React, { useRef } from "react";
import "./Style.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9p7gtd",
        "template_mpx8yaf",
        form.current,
        "fPqcrL4Dtgwc5UTRQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact" id="Contact">
        <div className="c-text">
          <p>Have Questions?</p>
          <p style={{ color: "#b1aafe", marginTop: "0.5rem" }}>Contact Me</p>
        </div>
        <div className="c-form">
          <form>
            <input
              type="text"
              id="fName"
              className="c-user"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              className="c-user"
              placeholder="Your Email"
              required
            />
            <textarea
              id="textArea"
              rows="3"
              className="c-user"
              placeholder="Your Message"
              style={{ height: 80 }}
            ></textarea>
            <button onClick={sendEmail}>Send a Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
