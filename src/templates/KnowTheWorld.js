import "../App.css";

function KnowTheWorld() {
  return (
    <section className="news-sec p-80">
      <div className="container">
        <div className="main-heading text-center mb-5 text-black">
          <h2>
            Know what the world <br />
            talks about us
          </h2>
          <p>
            An internationally-recognized university, CU has been in limelight
            for numerous positive reasons.
          </p>
        </div>
        <div className="news slider row">
          <div className="news-item col-lg-4 col-sm-12">
            <div className="card news-card shadow border-0 position-relative">
              <img src="img/news-image-3.webp" alt="image" />
              <div className="card-body p-4 clearfix">
                <a
                  href="https://news.cuchd.in/2023/07/chandigarh-university-is-highest-ranked.html"
                  target="_blank"
                  className="stretched-link"
                >
                  Chandigarh University is the highest-ranked private university
                  in India
                </a>
                <p>
                  Chandigarh University (CU) achieved a significant milestone
                  and secured the first rank among Indiaâ€™s private
                  universities in the latest edition of the coveted Quacquarelli
                  Symonds (QS) World University Ranking
                </p>
              </div>
            </div>
          </div>
          <div className="news-item col-lg-4 col-sm-12">
            <div className="card news-card shadow border-0 position-relative">
              <img src="img/news-image-1.webp" alt="image" />
              <div className="card-body p-4 clearfix">
                <a
                  href="https://news.cuchd.in/2023/07/chandigarh-university-continues-its.html"
                  target="_blank"
                  className="stretched-link"
                >
                  Chandigarh University continues its success streak; bags 27th
                  rank among universities in NIRF 2023 ranking
                </a>
                <p>
                  Chandigarh University (CU) continued improving its performance
                  among the public and private universities of the country and
                  secured the 27th spot in the National Institutional Ranking
                  Framework (NIRF) 2023
                </p>
              </div>
            </div>
          </div>
          <div className="news-item col-lg-4 col-sm-12">
            <div className="card news-card shadow border-0 position-relative">
              <img src="img/news-image-2.webp" alt="image" />
              <div className="card-body p-4 clearfix">
                <a
                  href="https://news.cuchd.in/2023/07/annual-convocation-for-2023-batch-held.html"
                  target="_blank"
                  className="stretched-link"
                >
                  Annual Convocation for the 2023 batch held at Chandigarh
                  University; more than 1400 degrees awarded
                </a>
                <p>
                  Chandigarh University held its annual convocation of the 2023
                  batch on June 9 in which over 1400 students were awarded
                  undergraduate, postgraduate, and PhD degrees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowTheWorld;
