import React from "react";
import CV from "../../components/assets/Files/CV - Dwi Samsiarto.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
