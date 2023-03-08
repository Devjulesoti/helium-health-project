import React from "react";
import Image from "../Assets/images/div.png";
import "../Styles/Lsection4.css";

const Lsection4 = () => {
  return (
    <div className="section4">
      <div className="image">
        <img src={Image} alt="" />
      </div>
      <div className="section4-text">
        <p style={{ color: "#454545" }}>
          Lorem ipsum dolor sit amet consectetur. Feugiat pretium libero
          accumsan congue ullamcorper. Nam massa commodo gravida lectus.
          Phasellus commodo quis eleifend nulla.egestas sollicitudin at
          risus aliquet libero nullam. Lorem nunc eros proin.
        </p>
        <h6>DR. AMUNIKE, ORTHOPAEDIC SURGEON</h6>
        <p className="p1" style={{ color: "#D14C45" }}>
          Centre For Advanced Specialty Surgery
        </p>
      </div>
    </div>
  );
};

export default Lsection4;
