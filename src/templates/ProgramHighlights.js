import "../App.css";

function ProgramHighlights() {
  return (
    <section className="cu-advantages p-80">
      <section
        className="next-section"
        style={{ backgroundImage: 'url("new-assets/images/next-gen-bg.webp")' }}
      >
        <div className="container">
          <div className="row">
              <div className="program-content">
                <div className="section-heading text-center mb-5">
                  <h2 className="text-white">Program Highlights</h2>
                </div>
                {/* <div className="schol-content mt-3 mb-5">
                  <p className="text-white">
                    Along with cutting-edge technology &amp; dynamic fraternity,
                    CU’s Online Learning programs stand out for multiple
                    reasons.{" "}
                  </p>
                </div> */}
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>UGC/AICTE Approved Course</h6>
                      <p>
                        Rest easy with our UGC/AICTE approved course. Yes, all
                        our courses are approved by UGC/AICTE. Your education
                        will meet recognized standards and qualifications,
                        enhancing your professional credentials and opening
                        doors to opportunities in the industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>Personalized Guidance</h6>
                      <p>
                        Our mentorship program offers personalized support. Your
                        assigned mentor will work closely with you, addressing
                        your needs, providing guidance, and ensuring you receive
                        the necessary assistance to excel in your studies.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>Top-Notch Instructors</h6>
                      <p>
                        Learn from esteemed instructors hailing from both KPMG
                        in India and Chandigarh University. Their extensive
                        real-world expertise enhances your educational
                        experience, offering invaluable insights that equip you
                        for success in your selected field.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>Internship & Placement Assistance</h6>
                      <p>
                        We assist you with internship opportunities and provide
                        dedicated support for placements. Our commitment to your
                        success will help to jumpstart your career, ensuring you
                        gain practical experience and find the perfect job
                        placement.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>Interactive Online Learning</h6>
                      <p>
                        Experience dynamic learning through live online classes.
                        Engage with instructors and fellow students in real
                        time, fostering a collaborative and enriching
                        educational experience from the comfort of your own
                        space.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="highlight-point">
                      <h6>Financial Assistance</h6>
                      <p>
                        We offer a range of financial assistance options to make
                        your education more accessible, ensuring your financial
                        situation won't limit your academic pursuits.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProgramHighlights;
