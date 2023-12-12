import "../App.css";

function OurPrograms() {
  return (
    <section className="ugpg-programs position-relative p-80" id="programs">
      <div className="container ugpg-programs-content" >
        {/* <div className="main-heading text-center mb-5">
          <h2>
            All-inclusive <br />
            Online UG &amp; PG Programs
          </h2>
          <p>
            Choose an internationally-recognized online undergraduate or
            postgraduate program of your choice.
          </p>
        </div> */}
        <div className="program-list">
          <div className="prog-heading">
            <h3 className="d-inline-block m-0 py-3">Our Programs</h3>
          </div>
          <div className="row">
            {/* <div className="col-xl-3 d-none d-xl-block">
              <div className="card program-card border-0 overflow-hidden student-bg-2 h-100" />
            </div> */}
            <div className="col-xl-9">
              <div className="row gy-4">
                <div className="col-lg-4 col-sm-6 equal-height">
                  <div className="card program-card border-0 overflow-hidden">
                    <div className="card-body">
                      <div className="h-60">
                        <h4>
                          3 Years Online BBA Program with specialization in
                          Business Analytics
                        </h4>
                      </div>
                      <ul className="p-0 m-0">
                        <li>
                          Eligibility:
                          <span> 10+2 with minimum 50% (Recognized Board)</span>
                        </li>
                        <li>
                          Duration:<span> 3 years (6 semesters)</span>
                        </li>
                        <li className="fw-bold mt-2">
                          Highlights:
                          <ul className="p-0 m-0 ">
                            <li> Live lectures by KPMG in India</li>
                            <li> Internship and Job placement assistance</li>
                            <li>
                              Learn top analytical tools like Tableau, My SQL,
                              Python, any many more
                            </li>
                          </ul>
                        </li>
                        {/* <li className="totalFee">
                      <span className="del">INR 32500</span>
                      <span className="animate-text">
                        After 30% Early Bird Discount on Programme Sem Fee
                      </span>
                    </li> */}
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="row g-0 d-flex align-items-center">
                        <div className="col-7" style={{ paddingLeft: "15px" }}>
                          <img src="img/prize-tag.svg" alt="tag" />
                          <span>
                            <b>xyx</b>/Sem
                          </span>
                        </div>
                        <div
                          className="col-5"
                          style={{ background: "#333333" }}
                        >
                          <a
                            href="#signup"
                            className="d-block h-100 text-center btnApply"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="card program-card border-0 overflow-hidden">
                    <div className="card-body">
                      <div className="h-60">
                        <h4>
                          2 Years Online MBA Program with specialization in
                          Business Analytics
                        </h4>
                      </div>
                      <ul className="p-0 m-0">
                        <li>
                          Eligibility:
                          <span> : Bachelors (Recognized)</span>
                        </li>
                        <li>
                          Duration:<span> 2 years</span>
                        </li>
                        <li className="fw-bold mt-2">
                          Highlights:
                          <ul className="p-0 m-0">
                            <li> Live lectures by KPMG in India</li>
                            <li> Internship and Job placement assistance</li>
                            <li>
                              Learn top analytical tools like Tableau, My SQL,
                              Python, any many more
                            </li>
                          </ul>
                          <br />
                        </li>
                        {/* <li className="totalFee">
                      <span className="del">INR 32500</span>
                      <span className="animate-text">
                        After 30% Early Bird Discount on Programme Sem Fee
                      </span>
                    </li> */}
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="row g-0 d-flex align-items-center">
                        <div className="col-7" style={{ paddingLeft: "15px" }}>
                          <img src="img/prize-tag.svg" alt="tag" />
                          <span>
                            <b>xyx</b>/Sem
                          </span>
                        </div>
                        <div
                          className="col-5"
                          style={{ background: "#333333" }}
                        >
                          <a
                            href="#signup"
                            className="d-block h-100 text-center btnApply"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <UndergraduatePrograms />
            <PostgraduatePrograms /> */}
      </div>
    </section>
  );
}

export default OurPrograms;
