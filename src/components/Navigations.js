import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiExtension } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#qualifications"
        onClick={() => {
          setActiveNav("#qualifications");
        }}
        className={activeNav === "#qualifications" ? "active" : ""}
      >
        <BiExtension />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActiveNav("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
