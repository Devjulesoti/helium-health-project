import React, { useRef } from "react";
import map from "../images/map@2x.png.png";
import dropDown from "../images/a.png";
import "../Styles/Section1.css";
import Navbar1 from "./Navbar1";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <Navbar1 />
        <div className="general-wrap">
          <div className="wrap1">
            <div className="text1">
              <h1>THE #1 HEALTHTECH PROVIDER IN AFRICA</h1>
            </div>
            <div className="image">
              <img src={map} alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et volutpat ultricies
                sed aliquam enim elit sagittis senectus. Enim sagittis fermentum
                eget justo pharetra neque pellentesque. Fringilla sed facilisi
                nec urna cursus. Gravida est suscipit nisi est ullamcorper
                placerat convallis.
              </p>
              <div className="btn-1">
                <button>FIND OUT MORE</button>
              </div>
            </div>
          </div>
          <div className="wrap2">
            <div className="image2">
              <img src={map} alt="" />
            </div>
          </div>
        </div>
        <div>
          <a href="#footer">
            <img src={dropDown} alt="img-dropdown" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
