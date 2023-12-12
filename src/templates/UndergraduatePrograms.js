import "../App.css";

function UndergraduatePrograms() {
  return (
    <div className="program-list mb-5">
      <div className="prog-heading">
        <h3 className="d-inline-block m-0 py-3">Undergraduate Programs</h3>
      </div>
      <div className="row gy-4">
        <div className="col-xl-3 col-md-4 d-none d-xl-block">
          <div className="card program-card border-0 overflow-hidden student-bg h-100" />
        </div>
        <div className="col-xl-9">
          <div className="row gy-4">
            <div className="col-lg-4 col-sm-6">
              <div className="card program-card border-0 overflow-hidden">
                <div className="card-body">
                  <div className="h-60">
                    <h4>
                      Bachelor of <br />
                      Arts-Journalism &amp; Mass Communication
                    </h4>
                  </div>
                  <ul className="p-0 m-0">
                    <li>
                      Eligibility:<span> 10+2 (Recognized Board)</span>
                    </li>
                    <li>
                      Duration:<span> 3 years</span>
                    </li>
                    <li className="totalFee">
                      <span className="del">INR 22500</span>
                      <span className="animate-text">
                        After 30% Early Bird Discount on Programme Sem Fee
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-7" style={{ paddingLeft: "15px" }}>
                      <img src="./img/prize-tag.svg" alt="tag" />
                      <span>
                        <b>₹15750</b>/Sem
                      </span>
                    </div>
                    <div className="col-5" style={{ background: "#333333" }}>
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
                      Bachelor of Business <br />
                      Administration
                    </h4>
                  </div>
                  <ul className="p-0 m-0">
                    <li>
                      Eligibility:<span> 10+2 (Recognized Board)</span>
                    </li>
                    <li>
                      Duration:<span> 3 years</span>
                    </li>
                    <li className="totalFee">
                      <span className="del">INR 26000</span>
                      <span className="animate-text">
                        After 25% Early Bird Discount on Programme Sem Fee
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-7" style={{ paddingLeft: "15px" }}>
                      <img src="img/prize-tag.svg" alt="tag" />
                      <span>
                        <b>₹19500</b>/Sem
                      </span>
                    </div>
                    <div className="col-5" style={{ background: "#333333" }}>
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
                      Bachelor of Computer
                      <br />
                      Applications
                    </h4>
                  </div>
                  <ul className="p-0 m-0">
                    <li>
                      Eligibility:<span> 10+2 (Recognized Board)</span>
                    </li>
                    <li>
                      Duration:<span> 3 years</span>
                    </li>
                    <li className="totalFee">
                      <span className="del">INR 27500</span>
                      <span className="animate-text">
                        After 25% Early Bird Discount on Programme Sem Fee
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-7" style={{ paddingLeft: "15px" }}>
                      <img src="img/prize-tag.svg" alt="tag" />
                      <span>
                        <b>₹20625</b>/Sem
                      </span>
                    </div>
                    <div className="col-5" style={{ background: "#333333" }}>
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
            {/*<div class="col-lg-4 col-sm-6">
                          <div class="card program-card border-0 overflow-hidden">
                              <div class="card-body">
                                  <div class="h-60">
                                      <h4>Bachelor of Business <br> Administration with ACCA</h4>
                                  </div>
                                  <ul class="p-0 m-0">
                                      <li>Eligibility:<span> 10+2 (Recognized Board)</span></li>
                                      <li>Duration:<span> 3 years</span></li>
                                      <li><span class="animate-text">ACCA Certified</span></li>
                                  </ul>
                              </div>
                              <div class="card-footer">
                                  <div class="row g-0 d-flex align-items-center">
                                      <div class="col-7" style="padding-left: 15px">
                                          <img src="img/prize-tag.svg" alt="tag">
                                          <span><b>&#8377;4,00,000</b></span>
                                      </div>
                                      <div class="col-5" style="background: #333333;">
                                          <a href="#signup" class="d-block h-100 text-center btnApply">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UndergraduatePrograms;
