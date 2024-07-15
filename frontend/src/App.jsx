import "./App.css";
import AboutProfessor from "./components/AboutProfessior";
import BannerImage from "./components/BannerImage";
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
      </div>
    </>
  );
}

export default App;
