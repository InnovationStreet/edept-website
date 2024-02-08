import "../App.css";

function Header() {
  return (
    <>
      <header className="p-2 bg-white border-bottom shadow-sm fixed-top" id="fixed">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between"> {/* Modified */}
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
            <div>
              <div className=""> {/* Added */}
                <a className="btn btn-primary btn-sm" href="#top-invisible">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="top-invisible" className="content-wrapper"> {/* Adjust the padding-top value according to your header's height */}
        {/* Your content here */}
      </div>
    </>
  );
}

export default Header;
