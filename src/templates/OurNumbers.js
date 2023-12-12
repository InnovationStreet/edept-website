import "../App.css";

function OurNumbers() {
  return (
    <section className="top-numbers pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <h2>
              <span className="count">478</span>
            </h2>
            <h6>
              International <br />
              Collaborations
            </h6>
          </div>
          <div className="col-md-3 col-6">
            <h2>
              <span className="count">2400</span>+
            </h2>
            <h6>Patents</h6>
          </div>
          <div className="col-md-3 col-6">
            <h2>
              <span className="count">10</span>K
            </h2>
            <h6>
              Research <br />
              Publications
            </h6>
          </div>
          <div className="col-md-3 col-6">
            <h2>
              <span className="count">146</span>
            </h2>
            <h6>Startups</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurNumbers;
