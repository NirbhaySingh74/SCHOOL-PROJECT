import { useEffect, useState } from "react";
import studentFirstImg from "../assets/studentImg1.jpg";
import studentSecondImg from "../assets/studentImg2.png";
import axios from "axios";

const AdmissionProcess = () => {
  const [admissionText, setAdmissionText] = useState("");

  const getAdmissionText = async () => {
    const getText = await axios.get("/api/admissiontext");
    console.log(getText.data.admissionProcessText);
    setAdmissionText(getText.data.admissionProcessText);
  };

  useEffect(() => {
    getAdmissionText();
  }, []);

  return (
    <div className="flex flex-col items-center p-6 py-3 bg-gray-300">
      <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
      <p className="text-center mb-6">{admissionText}</p>
      <div className="flex justify-center space-x-4">
        <img
          src={studentFirstImg}
          alt="Student 1"
          className="w-48 h-auto rounded shadow-md"
        />
        <img
          src={studentSecondImg}
          alt="Student 2"
          className="w-48 h-auto rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default AdmissionProcess;
