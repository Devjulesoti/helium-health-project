import React from "react";
import "../styles/section1.css";

const Section1 = () => {
  return (
    <div className="container text-start section1 text-light d-sm-flex p-5 gap-3">
      <div>
        <h4>470+</h4>
        <p>Facilities Live as of Mar 2021</p>
      </div>
      <div>
        <h4>7,000+</h4>
        <p>Medical Professionals as of Mar 2021</p>
      </div>
      <div>
        <h4>290,000+</h4>
        <p>Patient Encounters Per Month as of Mar 2021</p>
      </div>
    </div>
  );
};

export default Section1;
