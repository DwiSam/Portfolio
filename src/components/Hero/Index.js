import React from "react";
import "./Style.css";
import Fade from "react-reveal/Fade";
import pp from "../../assets/Images/pp.png";
import github from "../../assets/Images/github.png";
import linkedin from "../../assets/Images/linkedin.png";
import telegram from "../../assets/Images/telegram.png";
import CTA from "../../elements/Button/CTA";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <Fade top cascade>
        <div className="h-left">
          <div className="h-name">
            <p style={{ fontSize: "1.25rem" }}>Hello, there</p>
            <p className="name">I am Dwi Samsiarto</p>
            <p className="h-info">
              I am an final year student of informatics engineering in Institut
              Teknologi PLN - West Jakarta. I have a strong interest in UI/UX
              and Front End Developer.
            </p>

            <button>
              <CTA />
            </button>
          </div>
          <div className="h-connect">
            <a
              href="https://github.com/DwiSam"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logos"
                src={github}
                alt="github"
                height={70}
                width={70}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dwi-sam/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logos"
                src={linkedin}
                alt="linkedin"
                height={70}
                width={70}
              />
            </a>
            <a href="https://t.me/Doeysam" target="_blank" rel="noreferrer">
              <img
                className="logos"
                src={telegram}
                alt="telegram"
                height={64}
                width={64}
              />
            </a>
          </div>
        </div>
        <div className="h-right">
          <div className="h-box">
            <div>
              <img src={pp} alt="pp" height={400} width={400} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
