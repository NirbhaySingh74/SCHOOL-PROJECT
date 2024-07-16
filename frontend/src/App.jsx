import "./App.css";
import AboutProfessor from "./components/AboutProfessior";
import AdmissionProcess from "./components/AdmissionProcess";
import BannerImage from "./components/BannerImage";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import Notice from "./components/Notice";
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
        <Notice />
      </div>
      <Footer />
    </>
  );
}

export default App;
