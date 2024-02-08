import "../App.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Faculty() {
  const mentorDetails = [
    {
      id: 1,
      name: "Dilip Balasubramanian",
      position: "Consultant - & Consultant",
      organization: "KPMG India",
      imageSrc: "img/Dilip Balasubramanian.png",
      description:
        "Dilip offers training on Data Analytics Programs as part of the Business Excellence practice at KPMG in India. His team delivers advanced courses in Analytics, Machine Learning, Artificial Intelligence, and Deep Learning models. They provide Data Analytics training to institutional, corporate, and public sector clients...",
    },
    {
      id: 2,
      name: "Amit Kumar",
      position: "Assistant Manager",
      organization: "KPMG in India",
      imageSrc: "img/Amit Kumar.png",
      description:
        "Amit offers advisory services and provides training in advanced areas, including Analytics, Machine Learning, Artificial Intelligence, and Deep Learning models. His clientele includes institutional, corporate, and public sector organizations. His core skills encompass Python programming for data analytics, Text Analytics, Data Visualizations with Tableau, Data Scraping and Wrangling...",
    },
    {
      id: 3,
      name: "Kaushik Swaroop",
      position: "Analyst, Advisory",
      organization: "KPMG",
      imageSrc: "img/Kaushik Swaroop.png",
      description:
        "Kaushik provides Data Analytics solutions as part of the Business Excellence practice at KPMG in India. This practice delivers advanced courses in Analytics, Machine Learning, Artificial Intelligence, and Data Visualization. He has a track record of working on projects related to Text Analytics, Marketing Analytics, Financial Analytics, and HR Analytics. Proficient in tools like Python, R...",
    },
    {
      id: 4,
      name: "Varsha Pai K",
      position: "Senior Consultant, Advisory",
      organization: "KPMG",
      imageSrc: "img/Varsha Pai K.png",
      description:
        "A highly knowledgeable and skilled Learning and Development Specialist, Varsha has excellent interpersonal skills and strong abilities in designing, conducting, and implementing training and educational programs. She has superior technical writing skills and thorough knowledge of Adult Learning Theory and best training program practices...",
    },
  ];
  return (
    <section
      className="program-outcomes p-80"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="container">
        <div className="main-heading text-center mb-5 text-black">
          <h2>Faculty</h2>
          {/* <p>
            It's important to know how your institution is viewed and evaluated
            because this not only confirms its reputation but also enhances the
            value of your degree.
          </p> */}
        </div>

        {/* <div className="row my-4">
          
          <div className="col-md-6 mb-4 ">
              <div className="card d-flex flex-column h-100 ">
                <div className="row position-relative">
                  <div className="col-md-4 text-center text-md-start position-relative">
                    <img
                      className="img-fluid lazyload"
                      src="img/Dilip Balasubramanian.png"
                      alt="Mentor Image"
                    />
                  </div>
                  <div className="col-md-8 text-center text-md-start">
                    <div className="card-body mt-0 p-0 ps-xl-3">
                      <h5 className="text-danger">Dilip Balasubramanian</h5>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "normal",
                          color: "#666",
                        }}
                      >
                        Consultant - &amp; Consultant
                      </span>
                      <p>KPMG India</p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "#666",
                        }}
                      >
                        Dilip offers training on Data Analytics Programs as part
                        of the Business Excellence practice at KPMG in India. His
                        team delivers advanced courses in Analytics, Machine
                        Learning, Artificial Intelligence, and Deep Learning
                        models. They provide Data Analytics training to
                        institutional, corporate, and public sector clients. Dilip
                        also advises clients and conducts training programs in R
                        and Python Scripting for data analytics, Text Analytics,
                        Data Visualizations using tools such as Tableau, R,
                        Python, PowerBI, Data Scraping and Wrangling, Exploratory
                        Data Analysis (EDA), and Advanced Unstructured Data
                        Analytics. His focus is on driving measurable improvements
                        in organizations' business objectives through the
                        application of Data Analytics.
                      </p>
                    </div>
                  </div>
                </div>
            
            </div>
            </div>

            <div className="col-md-6 mb-4">
              
                
                <div className="card  d-flex flex-column h-100">
                  <div className="row position-relative">
                    <div className="col-md-4 text-center text-md-start position-relative">
                      <img
                        className="img-fluid lazyload"
                        src="img/Amit Kumar.png"
                        alt="Mentor Image"
                      />
                    </div>
                    <div className="col-md-8 text-center text-md-start">
                      <div className="card-body mt-0 p-0 ps-xl-3">
                        <h5 className="text-danger">Amit Kumar</h5>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          Assistant Manager
                        </span>
                        <p>KPMG in India</p>
                        
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          Amit offers advisory services and provides training in
                          advanced areas, including Analytics, Machine Learning,
                          Artificial Intelligence, and Deep Learning models. His
                          clientele includes institutional, corporate, and public
                          sector organizations. His core skills encompass Python
                          programming for data analytics, Text Analytics, Data
                          Visualizations with Tableau, Data Scraping and Wrangling,
                          Exploratory Data Analysis (EDA), and Advanced Unstructured
                          Data Analytics. With over 10 years of experience, Amit has
                          a track record of defining and implementing Quality
                          Management Systems for various organizations. He has
                          successfully consulted with more than 30 organizations to
                          establish strategic quality management systems that
                          promote a culture of continuous improvement. Additionally,
                          he has been involved in projects related to Lean and Six
                          Sigma principles for reducing full-time equivalents (FTE),
                          enhancing productivity, and achieving Service Level
                          Agreement (SLA) compliance in transactional work. Amit’s
                          overarching goal is to drive measurable improvements in
                          the business objectives of organizations by applying Data
                          Analytics, Lean Six Sigma, and CMMI implementations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>

            <div className="col-md-6 mb-4">
            
                
                <div className="card d-flex flex-column h-100">
                  <div className="row position-relative">
                    <div className="col-md-4 text-center text-md-start position-relative">
                      <img
                        className="img-fluid lazyload"
                        src="img/Kaushik Swaroop.png"
                        alt="Mentor Image"
                      />
                    </div>
                    <div className="col-md-8 text-center text-md-start">
                      <div className="card-body mt-0 p-0 ps-xl-3">
                        <h5 className="text-danger">Kaushik Swaroop</h5>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          Analyst, Advisory
                        </span>
                        <p>KPMG</p>
                        
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          Kaushik provides Data Analytics solutions as part of the
                          Business Excellence practice at KPMG in India. This
                          practice delivers advanced courses in Analytics, Machine
                          Learning, Artificial Intelligence, and Data Visualization.
                          He has a track record of working on projects related to
                          Text Analytics, Marketing Analytics, Financial Analytics,
                          and HR Analytics. Proficient in tools like Python, R,
                          Tableau, Power BI, and Excel, he excels in various Data
                          Analysis techniques, including Predictive Modeling,
                          Exploratory Data Analysis, Data Wrangling, and
                          Unstructured Data Analytics. His primary focus is on
                          leveraging his data skills to make a meaningful impact on
                          the business objectives of the organization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>

            <div className="col-md-6 mb-4">
            
                
                <div className="card d-flex flex-column h-100">
                  <div className="row position-relative">
                    <div className="col-md-4 text-center text-md-start position-relative">
                      <img
                        className="img-fluid lazyload"
                        src="img/Varsha Pai K.png"
                        alt="Mentor Image"
                      />
                    </div>
                    <div className="col-md-8 text-center text-md-start">
                      <div className="card-body mt-0 p-0 ps-xl-3">
                        <h5 className="text-danger">Varsha Pai K</h5>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          Senior Consultant, Advisory
                        </span>
                        <p>KPMG</p>
                        
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#666",
                          }}
                        >
                          A highly knowledgeable and skilled Learning and
                          Development Specialist, Varsha has excellent interpersonal
                          skills and strong abilities in designing, conducting, and
                          implementing training and educational programs. She has
                          superior technical writing skills and thorough knowledge
                          of Adult Learning Theory and best training program
                          practices. She has developed evaluation, critical
                          thinking, active listening, and decision-making skills as
                          well as a strong attention to small details. Varsha has
                          with a proven ability to succeed under pressure, deliver
                          excellence, and establish genuine relationships.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
        </div> */}

        <MDBCarousel showControls fade>
          {mentorDetails.map((mentor) => (
            <MDBCarouselItem itemId={mentor.id}>
              {/* <div key={mentor.id}>
                <div className="row mx-0">
                  <div className="col-md-12 mb-4">
                    <div className="card d-flex flex-column h-100">
                      <div className="row position-relative">
                        <div className="col-md-4 text-center text-md-start position-relative">
                          <img
                            width={50}
                            height={50}
                            className="img-fluid lazyload rounded-3"
                            src={mentor.imageSrc}
                            alt={`Mentor ${mentor.id} Image`}
                          />
                        </div>
                        <div className="col-md-8 text-center text-md-start">
                          <div className="card-body mt-0 p-0 ps-xl-3">
                            <h2 className="text-danger ">{mentor.name}</h2>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "normal",
                                color: "#666",
                              }}
                            >
                              {mentor.position}
                            </span>
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                              }}
                            >
                              {mentor.organization}
                            </p>
                            <p
                              style={{
                                fontSize: "18px",
                                fontWeight: "normal",
                                color: "#666",
                              }}
                            >
                              {mentor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div key={mentor.id}>
  <div className="row mx-0">
    <div className="col-md-12 mb-4">
      <div className="card d-flex flex-column h-100 position-relative">
        <div className="golden-strip"></div> {/* Add this line for the golden strip */}
        <div className="row position-relative">
          <div className="col-md-4 text-center text-md-start position-relative">
            <img
                style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }}

              width={50}
              height={50}
              className="img-fluid lazyload rounded-3"
              src={mentor.imageSrc}
              alt={`Mentor ${mentor.id} Image`}
            />
          </div>
          <div className="col-md-8 text-center text-md-start">
            <div className="card-body mt-0 p-0 ps-xl-3">
              <h2 className="text-danger">{mentor.name}</h2>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#666',
                }}
              >
                {mentor.position}
              </span>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'normal',
                }}
              >
                {mentor.organization}
              </p>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 'normal',
                  color: '#666',
                }}
              >
                {mentor.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </MDBCarouselItem>
          ))}
        </MDBCarousel>
      </div>
    </section>
  );
}

export default Faculty;
