import React, { useState } from "react";

const VisionMission = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full my-4 bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          The Vision-Mission Statement of the Teachers
        </div>
        <p
          className={`text-gray-700 text-base ${
            expanded ? "block" : "truncate"
          }`}
        >
          Our positive mission is to combat the roots of societal issues by
          addressing illiteracy, which is often considered the creator of all
          evils. We are dedicated to achieving this goal by imparting
          qualitative, logical, and value-based modern education. Our vision
          aligns with nurturing liberal rational humanism, empathy, and
          togetherness in the new generations, fostering a community that values
          education and understands the importance of shared humanity for an
          honest prosperity of both mind and matter.
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
