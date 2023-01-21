import React from "react";
import "./Style.css";
import pp from "../assets/Images/pp.png";
import github from "../assets/Images/github.png";
import linkedin from "../assets/Images/linkedin.png";
import telegram from "../assets/Images/telegram.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="h-left">
        <div className="h-name">
          <p style={{ fontSize: "1.25rem" }}>Hello, there</p>
          <p className="name">I am Dwi Samsiarto</p>
          <p className="h-info">
            I am an undergraduate student in Institut Teknologi PLN - Jakarta I
            <br />
            have a strong interest in UI/UX and Front End Developer
          </p>
          <button>Download CV</button>
        </div>
        <div className="h-connect">
          <a
            href="https://github.com/DwiSam"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "15px" }}
          >
            <img src={github} alt="github" height={40} width={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/dwi-sam/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "5px" }}
          >
            <img src={linkedin} alt="linkedin" height={60} width={60} />
          </a>
          <a href="https://t.me/Doeysam" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" height={70} width={70} />
          </a>
        </div>
      </div>
      <div className="h-right">
        <div className="h-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 725 990"
          >
            <path
              fill="#1b1f3a"
              stroke="#1b1f3a"
              d="M209.5 0H725v934.5L8 218.5q-3.5-4-2-13l2-4L209.5 0z"
            ></path>
          </svg>
        </div>
        <div className="h-box">
          <div>
            <img src={pp} alt="pp" height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
