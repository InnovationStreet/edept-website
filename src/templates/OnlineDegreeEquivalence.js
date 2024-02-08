import React from "react";
import "../App.css";

function OnlineDegreeEquivalence() {
  return (
    <section
      className="px-3 px-md-5 py-5"
      style={{ backgroundColor: "#E2E2E2" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="equal-recognition col-lg-6 text-left text-xs-center">
            <div className="section-heading mb-4">
              <h2 className="text-black">
                ONLINE DEGREE
                <br />
                <span
                  className="equivalence font-weight-bold "
                  style={{ fontSize: "1.3em" }}
                >
                  EQUIVALENCE
                </span>
              </h2>
            </div>
            <hr
              className="my-4 d-block d-md-none"
              style={{ borderTop: "2px solid #000" }}
            />
            <p className="mt-4">
              The degree obtained through online mode is equivalent to the
              degree offered through conventional mode as per the Regulations 22
              of UGC, 2020 (University Grants Commission)
            </p>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="text-center mb-1">
              <h3 className="text-center font-weight-bold text-black">
                UNIVERSITY GRANTS COMMISSION
              </h3>
              
            </div>
            <div className="text-center p-2">
              <img
                src="img/public-notice-1.png"
                alt="University Grants Commission"
                className="img-fluid p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineDegreeEquivalence;
