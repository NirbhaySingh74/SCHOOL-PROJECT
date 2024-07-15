import "./App.css";
import AboutProfessor from "./components/AboutProfessior";
import BannerImage from "./components/BannerImage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <BannerImage />
        <AboutProfessor />
      </div>
    </>
  );
}

export default App;
