import "../App.css";

function OnlineMBAProgram() {
  const points = [
    "Innovation & Creativity",
    "Strategy Planning & Execution",
    "Business Plan Development",
    "Performance Measurement",
    "Diversity, Inclusion & Belonging",
    "Decision Making",
    "Ethics at Work",
    "Presentation Skills",
    "Team Management",
    "Digital Intelligence",
  ];

  return (
    <section className="program-outcomes p-3 p-md-5">
      <div className="container">
        <div className="row pt-3 pt-md-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-3 mb-lg-0">
            <div className="text-center text-lg-start mb-4">
              <h3 className="mb-3">
                Online MBA Program Comprises Harvard Manage Mentor Modules
                Provided by HBPE
              </h3>
              <p>
                Gain elite business education with an online MBA program
                featuring Harvard Manage Mentor modules facilitated by HBPE.
              </p>
            </div>
            <div className="row">
              {points.map((item, index) => {
                // Checking if the index is even or odd to determine column placement
                const columnClass =
                  index % 2 === 0 ? "col-lg-6" : "col-lg-6 pl-lg-4";
                return (
                  <div className={`points-box ${columnClass}`} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <div className="image-container">
              <div className="image-box p-2">
                <img
                  src="img/certificate-1.png"
                  alt="Certificate"
                  className="img-fluid inner-border-certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineMBAProgram;
