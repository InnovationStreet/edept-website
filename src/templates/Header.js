import "../App.css";

function Header() {
  return (
    <header className="p-2 bg-white border-bottom shadow-sm" id="fixed">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="nav-brand me-md-auto">
            <a href="#" className="cu-lgo">
              <img
                src="img/edept.jpeg"
                alt="chandigharh University logo"
                width={210}
              />
            </a>
            {/* <a href="#" className="naac-logo mx-3">
            <img
              src="img/online-ugc-logo.webp"
              alt="Online UGC logo"
              width={100}
            />
          </a> */}
          </div>
          {/* <div className="my-md-0">
            <a
              id="btnApplyNow"
              className="btn btn-outline-primary applybtn mx-3"
              href="#signup"
            >
              Apply Now
            </a>
            <a
              id="btnLogin"
              className="btn btn-primary loginbtn"
              href="#signup"
            >
              Login
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
