import "../App.css";

function Footer() {
  return (
    <footer className="pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="ft-logo">
              <img src="img/logo.webp" alt="image" width={213} />
            </div>
            {/* <div className="stuFes">
            <a href="StudentFacilitation.aspx">Student Facilitation</a>
          </div> */}
          </div>
          <div className="col-md-6 col-12">
            <div className="footer-ft-data ft-data d-flex justify-content-end">
              <img src="img/location-icon.svg" alt="icon" />
              <div className="ft-add">
                <p>
                  <b style={{ display: "block" }}>Chandigarh University</b>
                  Address: NH-05 Chandigarh-Ludhiana <br />
                  Highway, Mohali, Punjab (INDIA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="ft-social pt-3 mt-3">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="m-0">
                © 2023 Chandigarh University. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="allNotification">
      <button type="button" className="allNotification__icon">
        <i className="fa-regular fa-bell" />
      </button>
      <div className="allNotification__list">
        <ul className="list-unstyled p-0 m-0">
          <li className="shadow">
            <p id="demo" />
            <a
              href="https://apply.onlinecu.in/index.aspx?type=onlinecu"
              target="_blank"
            >
              <h6>
                <b>
                  <span style={{ color: "#e0181e" }}>
                    {" "}
                    FEW SEATS LEFT!
                  </span>
                  <br />
                  Admission Closing on 20th October.
                </b>
              </h6>
              <span className="btn btn-md text-link">Apply Now</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div> */}
    </footer>
  );
}

export default Footer;
