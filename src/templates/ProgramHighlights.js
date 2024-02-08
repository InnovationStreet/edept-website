import "../App.css";

function ProgramHighlights() {

  const programList = [
      {
        id: 1,
        heading: "UGC/AICTE Approved Course",
        description: "Our UGC/AICTE approved courses will help to enhance your professional credentials and industry opportunities.",
      },
      {
        id: 2,
        heading: "Personalized Guidance",
        description: "Our mentorship program provides personalized support, with your assigned mentor offering guidance and assistance to help you excel in your studies",
      },
      {
        id: 3,
        heading: "Top-Notch Instructors",
        description:
          "Learn from experienced instructors from KPMG in India and Chandigarh University, gaining valuable real-world insights for success in your chosen field.",
      },
      {
        id: 4,
        heading: "Internship & Placement Assistance",
        description: "We offer internship support and dedicated placement assistance. We commit to your success by jumpstarting your career and ensuring practical experience and job placement success.",
      },
      {
        id: 5,
        heading: "Interactive Online Learning",
        description: "Engage in dynamic live online classes, collaborating with instructors and peers for an enriching educational experience, all from the comfort of your space.",
      },
      {
        id: 6,
        heading: "Financial Assistance",
        description: "We offer a range of financial assistance options to make your education more accessible, ensuring your financial situation won't limit your academic pursuits.",
      },
  ];

  return (
    <section className="p-80" style={{ backgroundColor: "#E2E2E2" }}>
      <section
        className="next-section"
        // style={{ backgroundImage: 'url("new-assets/images/next-gen-bg.webp")' }}
      >
        <div className="section-heading text-center mb-5">
          <h2 className="text-black">Program Highlights</h2>
        </div>
        {/* <div className="schol-content mt-3 mb-5">
          <p className="text-white">
            Along with cutting-edge technology &amp; dynamic fraternity,
            CU’s Online Learning programs stand out for multiple
            reasons.{" "}
          </p>
        </div> */}

        <div className="container mt-5">
          <div className="row">
            {programList.map((item) => (
              <div key={item.id} className="news-item col-lg-4 col-sm-12">
              <div className="card news-card shadow border-0 position-relative">
                <div className="card-body p-4 clearfix">
                  <a
                    className="stretched-link"
                  >
                    {item.heading}
                  </a>
                  <p>
                  {item.description}
                  </p>
                </div>
              </div>
            </div>
            ))}

            

            {/* Repeat for other cards */}
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProgramHighlights;
