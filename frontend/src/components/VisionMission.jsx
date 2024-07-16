import { useState, useEffect } from "react";
import axios from "axios";

const VisionMission = () => {
  const [missionStatement, setMissionStatement] = useState("");
  const [expanded, setExpanded] = useState(false);
  const getMissionText = async () => {
    // Fetch mission statement from backend

    try {
      const getText = await axios.get("/api/mission");
      setMissionStatement(getText.data.missionStatement);
    } catch (error) {
      console.error("Error fetching mission statement:", error);
    }
  };

  useEffect(() => {
    getMissionText();
  }, []);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full bg-gray-300 shadow-md rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          The Vision-Mission Statement of the Teachers
        </div>
        <p
          className={`text-gray-700 text-base ${
            expanded ? "block" : "truncate"
          }`}
        >
          {missionStatement}
        </p>
      </div>
      <div className="px-6 py-4">
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          onClick={toggleExpansion}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default VisionMission;
