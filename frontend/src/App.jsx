import "./App.css";
import AboutProfessor from "./components/AboutProfessior";
import AdmissionProcess from "./components/AdmissionProcess";
import BannerImage from "./components/BannerImage";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import VisionMission from "./components/VisionMission";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <BannerImage />
        <AboutProfessor />
        <VisionMission />
        <AdmissionProcess />
        <Gallary />
      </div>
    </>
  );
}

export default App;
