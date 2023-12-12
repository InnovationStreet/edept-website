import "../App.css";

function ProgramOutcomes() {
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
        <div className="row justify-content-center mb-5">
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
        </div>
      </div>
    </section>
  );
}

export default ProgramOutcomes;
