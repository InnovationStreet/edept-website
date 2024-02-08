import "../App.css";

function WhyStudyOnline() {
  return (
    <>
      <section className="program-outcomes p-80 bg-danger">
        <div className="container">
          <div
            className="main-heading text-center text-white"
            style={{ maxWidth: "702px" }}
          >
            <h2>
              Why study online <br />
              with Chandigarh University?
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "20px" }}>
              UGC &amp; AICTE recognized Chandigarh University, with top-class
              technology, imparts world-class curricula curated by experienced
              subject matter experts for undergraduate &amp; postgraduate
              programs.
              <br />
              <br />
              <h6>
                <i>
                  <b>Get the flexibility to study any time and from anywhere</b>
                </i>
              </h6>
            </p>
          </div>

          <section id="" className="py-2 rank-section text-white">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="border mt-4 rounded-4 tab-content">
                    <div
                      className="active tab-pane"
                      id="nirf-tab-content"
                      role="tabpanel"
                      aria-labelledby="nirf-tab"
                      tabIndex={0}
                    >
                      <div className="blaze-slider">
                        <div className="blaze-container">
                          <div className="blaze-track-container">
                            <div className="blaze-track rankings-slider row">
                              <div className="qs-ranking__content col-12 col-md-2 mb-3">
                                <span>Ranked</span>
                                <div className="top-no">
                                  27 <sup>th</sup>
                                </div>
                                <p>
                                  <span>amongst the top </span>Universities in
                                  the NIRF Rankings 2023 released by the
                                  ministry of education, Government of India
                                </p>
                              </div>
                              <div className="qs-ranking__content  col-12 col-md-2 mb-3">
                                <span>Ranked</span>
                                <div className="top-no">
                                  1 <sup>st</sup>
                                </div>
                                <p>
                                  <span>among the all </span>Private
                                  universities in India as per the QS World
                                  University Rankings 2024
                                </p>
                              </div>
                              <div className="qs-ranking__content  col-12 col-md-2 mb-3">
                                <span>Ranked</span>
                                <div className="top-no">
                                  A+<sup></sup>
                                </div>
                                <p>
                                  <span>grade </span>by the National Assessment
                                  and Accreditation Council (NAAC)
                                </p>
                              </div>
                              <div className="qs-ranking__content  col-12 col-md-2 mb-3">
                                <span>Ranked</span>
                                <div className="top-no">
                                  A+ <sup></sup>
                                </div>
                                <p>
                                  <span>amongst </span>Top 5% Institutions of
                                  India for receiving NAAC
                                </p>
                              </div>
                              <div className="qs-ranking__content  col-12 col-md-2 mb-3">
                                <span>Ranked</span>
                                <div className="top-no">
                                  36 <sup>th</sup>
                                </div>
                                <p>
                                  <span>among The Best</span>Institutions For
                                  Management Studies In India By NIRF Rankings
                                  2023
                                </p>
                              </div>
                              <div className="qs-ranking__content  col-12 col-md-2 mb-3">
                                <span>With</span>
                                <div className="top-no">13,000+</div>
                                <p>
                                  <span>of the</span>Total student strength
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="center slider row d-flex justify-content-center text-white">
            <div className="sl-item col col-lg-12 col-sm-12">
              <div className="text-center">
                <p className="fw-bold">
                  Chandigarh University has notable alumni working in top MNC's
                  like Google and Reliance Industries.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="down-arrow text-center">
        <img src="img/down-arrow-icon.svg" alt="icon" />
      </div> */}
        </div>
      </section>
      <div
        className="placement-logos-container px-5"
      >
        <img
          className="img-fluid rounded-3"
          src="img/placement-logos.png"
          alt="placement logos"
        />
      </div>
    </>
  );
}

export default WhyStudyOnline;
