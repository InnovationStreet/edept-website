import "../App.css";
import React from "react";

function ProgramOutcomes() {
  const itemList = [
    {
      id: 1,
      imageSrc: "img/icon1.png",
      heading: "Enhanced Analytical Abilities:",
      description: "Develop strong analytical and problem-solving skills.",
    },
    {
      id: 2,
      imageSrc: "img/icon2.png",
      heading: "Interpret Data:",
      description: "Learn to interpret data and provide valuable insights.",
    },
    {
      id: 3,
      imageSrc: "img/icon3.png",
      heading: "Tools:",
      description:
        "Utilize tools such as Excel, Power BI, Tableau, SPSS, MySQL, Python, and Orange.",
    },
    {
      id: 4,
      imageSrc: "img/icon4.png",
      heading: "Increased Job Market Value:",
      description: "Enhance your value in the job market.",
    },
    {
      id: 5,
      imageSrc: "img/icon5.png",
      heading: "Industry Relevancy:",
      description: "Applicable in finance, marketing, healthcare, and more.",
    },
    {
      id: 6,
      imageSrc: "img/icon6.png",
      heading: "High Demand:",
      description: "Business Analytics Professionals in high demand.",
    },
    {
      id: 7,
      imageSrc: "img/icon7.png",
      heading: "Case Study Learning:",
      description: "Acquire transferable skills for a diverse career.",
    },
  ];

  return (
    <section className="program-outcomes p-80">
      <div className="container">
        <div className="main-heading text-center mb-5 text-black">
          <h2>Program Outcomes</h2>
          <p>
            Our educational programs are closely linked to academic research,
            significant innovations, and high-quality educational opportunities.
            <br />
            <br /> They can empower you to:
          </p>
        </div>
        {/* <div className="row justify-content-center mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="card text-center d-flex align-items-center mb-3">
              <img src="img/po-icon-1.svg" alt="icon" />
              <p>
                Enhanced Analytical Abilities : The program will help you
                develop strong analytical and problem-solving skills. You'll
                learn to interpret data and provide valuable insights with the
                help of tools like Excel, Power BI, Tableau, SPSS, My SQL,
                Python, Orange. This will perhaps increase your value in the job
                market.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card text-center d-flex align-items-center mb-3">
              <img src="img/po-icon-2.svg" alt="icon" />
              <p>
                Industry Relevancy : Business analytics is applicable in various
                industries, including finance, marketing, healthcare, and more.
                The demand of a Business Analytics Professional is at an all
                time high in the current job market. The case study based
                learning that we provide will help you with the skills to
                acquire a transferable and diverse career.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="container mt-5">
          {itemList.map((item) => (
            <div key={item.id} className="row mb-4">
              <div className="col-md-1">
                <img
                  src={item.imageSrc}
                  alt={`Item ${item.id}`}
                  className="img-fluid"
                  style={{ maxWidth: "50px" }}
                />
              </div>

              <div className="col-md-11">
                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-0 text-secondary">{item.heading}</p>
                  </div>
                  <div className="col-md-12">
                    <h5>{item.description}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="container mt-5 pl-4">
          <div className="row">
            {itemList.map((item) => (
              <div key={item.id} className="col-md-6 mb-4">
                {/* First Column with Image */}
                <div className="row">
                  <div className="col-md-1">
                    <img
                      src={item.imageSrc}
                      alt={`Item ${item.id}`}
                      className="img-fluid"
                      style={{ maxWidth: "50px" }}
                    />
                  </div>

                  {/* Second Column with Title and Description */}
                  <div className="col-md-6">
                    <div>
                      <p className="mb-0 text-secondary">{item.heading}</p>
                    </div>
                    <div>
                      <h5>{item.description}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramOutcomes;
