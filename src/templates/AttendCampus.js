import "../App.css";

function AttendCampus() {
  return (
    <section className="path-sec p-80">
      <div className="container">
        <div className="main-heading text-center mb-5 text-black">
          <h2>Attend our Online campus</h2>
          <p>
            Get 24X7 learning access to the university with high-quality online
            education at an affordable cost.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="img/oc-icon-1.svg" alt="image" />
            <span>1</span>
            <h3>Find your Course</h3>
          </div>
          <div className="col-md-4 text-center">
            <img src="img/oc-icon-2.svg" alt="image" />
            <span>2</span>
            <h3>Talk to our expert guides</h3>
          </div>
          <div className="col-md-4 text-center">
            <img src="img/oc-icon-3.svg" alt="image" />
            <span>3</span>
            <h3>Apply online</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttendCampus;
