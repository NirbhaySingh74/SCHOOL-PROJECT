import professorImg from "../assets/professorGroupPic.webp";

const AboutProfessor = () => {
  return (
    <div
      className="relative w-full overflow-hidden md:px-4"
      style={{ height: "40vh" }}
    >
      <img
        src={professorImg}
        alt="Professor Group"
        className="w-full h-full object-cover"
        style={{ objectPosition: "top center" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-opacity-45 p-4">
        <h2 className="text-2xl md:text-4xl font-bold animate-fade-in-down text-center">
          Our team of dedicated, skilled and passionate teachers.
        </h2>
        <h4 className="mt-2 md:mt-4 text-lg md:text-2xl text-center animate-fade-in-up">
          Besides preparing students for academic achievement, we aim at
          empowering them with knowledge, attitudes, values and skills to face
          the realities of life.
        </h4>
      </div>
    </div>
  );
};

export default AboutProfessor;
