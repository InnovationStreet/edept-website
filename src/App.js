import logo from "./logo.svg";
import "./App.css";
// import PostgraduatePrograms from "./templates/PostgraduatePrograms";
// import UndergraduatePrograms from "./templates/UndergraduatePrograms";
import OurPrograms from "./templates/OurPrograms";
import ProgramOutcomes from "./templates/ProgramOutcomes";
import Advantages from "./templates/Advantages";
import AboutKPMG from "./templates/AboutKPMG";
import AboutEdept from "./templates/AboutEdept";
import ProgramHighlights from "./templates/ProgramHighlights";
import NationalAndInternationalBodies from "./templates/NationalAndInternationalBodies";
import Faculty from "./templates/Faculty";
import KnowTheWorld from "./templates/KnowTheWorld";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import TopBanner from "./templates/TopBanner";
import OurNumbers from "./templates/OurNumbers";
import WhyStudyOnline from "./templates/WhyStudyOnline";
import TrainerProfile from "./templates/TrainersProfile";
// import SocialLinks from "./templates/SocialLinks";
// import AttendCampus from "./templates/AttendCampus";

function App() {
  return (
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBT7X59"
        height="0" width="0" style="display: none; visibility: hidden"
        &gt;&lt;/iframe &gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Header />
      <main>
        <TopBanner />
        <OurPrograms />
        <WhyStudyOnline />
        {/* <Advantages /> */}
        <AboutKPMG />
        {/* <AboutEdept /> */}
        <ProgramOutcomes />
        <ProgramHighlights />
        <NationalAndInternationalBodies />
        <Faculty />
        {/* <AttendCampus /> */}
        <KnowTheWorld />
        {/* <TrainerProfile/> */}
        <OurNumbers />
        {/* <SocialLinks /> */}
        <Footer />
        <div className="footer-fixed-bar">
          <p>#ONLINECU</p>
          <a href="#home" target="_blank">
            Apply Online
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
