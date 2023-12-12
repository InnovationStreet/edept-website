import "../App.css";

function Advantages() {
  return (
    <section className="cu-advantages p-80">
      <div className="container">
        {/* <div className="main-heading text-center mb-5">
          <h2>Advantages you will get</h2>
          <p>
            Envisioned to engage you through blended pedagogies for the
            requisite professional and life skills, our curriculum at par with
            the best regular programs.
          </p>
        </div> */}
        <div className="center slider row d-flex justify-content-center">
          <div className="sl-item col col-lg-12 col-sm-12">
            <div className="card adv-card text-center">
              <span className="d-flex align-content-center mx-auto">
                <img src="img/adv-icon-1.svg" alt="icon" className="mx-auto" />
              </span>
              {/* <h3>Best-in-class Learning</h3> */}
              <p>
                Ranked amongst the top 27 universities in the NIRF Rankings 2023
                released by the ministry of education, Government of India.
                <br />
                With the total student strength of 13,000+
                <br />
                Chandigarh University has notable alumni working in top MNC's
                like Google and Reliance Industries.
                <br />
                1st among the all private universities in India as per the QS
                World University Rankings 2024
                <br />
                A+ grade by the National Assessment and Accreditation Council
                (NAAC).
                <br />
                Ranked amongst Top 5% institutions of India for receiving NAAC
                A+ Rating
              </p>
            </div>
          </div>
          {/* <div className="center slider row d-flex justify-content-center">
          <div className="sl-item col col-lg-3 col-sm-12">
            <div className="card adv-card text-center">
              <span className="d-flex align-content-center mx-auto">
                <img src="img/adv-icon-1.svg" alt="icon" className="mx-auto" />
              </span>
              <h3>Best-in-class Learning</h3>
              <p>
                Learn from University Professors
                <br />
                Latest industry-relevant curriculum
                <br />
                200+ hours of online videos
                <br />
                200+ ebooks
              </p>
            </div>
          </div> */}
          {/* <div className="sl-item col col-lg-3 col-sm-12">
            <div className="card adv-card text-center">
              <span className="d-flex align-content-center mx-auto">
                <img src="img/adv-icon-2.svg" alt="icon" className="mx-auto" />
              </span>
              <h3>Career Assistance</h3>
              <p>
                Resume Support
                <br />
                Interview Preparation
                <br />
                Personality Development Sessions
                <br />
                Spoken English Classes
                <br />
              </p>
            </div>
          </div> */}
          {/* <div className="sl-item col col-lg-3 col-sm-12">
            <div className="card adv-card text-center">
              <span className="d-flex align-content-center mx-auto">
                <img src="img/adv-icon-3.svg" alt="icon" className="mx-auto" />
              </span>
              <h3>Learner Support</h3>
              <p>
                24*7 Doubt Clarification
                <br />
                Dedicated Student Mentor
                <br />
                Easy EMI/financing options
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
