import React from "react";
import secondimg from "../Assets/images/gallery1.png (1).png";
import zenith from "../Assets/images/zenith.svg.png";
import combinator from "../Assets/images/combinator.svg.png";
import jnci from "../Assets/images/inci.svg.png";
import venture from "../Assets/images/venture.svg.png";
import launch from "../Assets/images/developers.svg.png";
import tencent from "../Assets/images/tencent.svg.png";
import pri from "../Assets/images/private.svg.png";
import wti from "../Assets/images/wti.svg.png";
const Section5 = () => {
  return (
    <div>
      <div className="container py-4">
        <img className="img-fluid" src={secondimg} alt="" />
      </div>
      <div className="section6-div">
        <h2 className="partners text-center">Our Investors and Partners</h2>
        <p className="fs-2 text-center ">
          We're proudly backed by industry leading investors and Partners
        </p>

        <div>
          <div class="container text-center section4">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 section6">
              <div class="col">
                <div class="each-one">
                  <img src={tencent} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right">
                  <img src={combinator} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-one">
                  <img src={jnci} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right">
                  <img src={venture} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-one">
                  <img src={launch} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right">
                  <img src={zenith} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-one">
                  <img src={pri} alt="" />
                </div>
              </div>

              <div class="col">
                <div class="each-right">
                  <img src={wti} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
