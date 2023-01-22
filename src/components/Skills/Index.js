import React from "react";
import "./Style.css";
import Cards from "../Cards/Skills";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="s-info">
        <div className="s-head">
          <p>
            My{" "}
            <span style={{ color: "#B1AAFE", marginTop: "0.5rem" }}>
              SkillSet
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="s-card">
        <Cards
          header={"Frontend Developer"}
          l1={"HTML"}
          w1={"80%"}
          l2={"CSS"}
          w2={"70%"}
          l3={"Javascript"}
          w3={"65%"}
          l4={"React"}
          w4={"60%"}
        />

        <Cards
          header={" UI/UX Designer"}
          l1={"UI Design"}
          w1={"90%"}
          l2={"Prototyping"}
          w2={"60%"}
          l3={"UX Design"}
          w3={"45%"}
        />
      </div>
      <ParallaxProvider>
        <Parallax speed={-30}>
          <div className="s-innerWordCloud">
            <p>CSS3</p>
            <p>Figma</p>
            <p>Adobe</p>
            <p>NodeJS</p>
            <p>Blender</p>
            <p>Javascript</p>
            <p>php</p>
            <p>HTML5</p>
            <p>Bootstrap</p>
            <p>Rract JS</p>
            <p>Laravel</p>
            <p>Chakra-UI</p>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Skills;
