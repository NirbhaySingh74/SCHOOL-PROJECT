import aboutImg from "../assets/aboutus.png";
import contactusImg from "../assets/contactus.png";
import disclousreImg from "../assets/disclosure.png";
import tcImg from "../assets/tc.png";
import gallaryImg from "../assets/Gallery.png";
import roomImg from "../assets/room.jpeg";

const Gallary = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-300 my-3">
      {/* <h2 className="text-3xl font-bold mb-4">Gallery</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
        <div className="relative">
          <img
            src={roomImg}
            alt="admission"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            Admission
          </div>
        </div>
        <div className="relative">
          <img
            src={contactusImg}
            alt="Contact Us"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            Contact Us
          </div>
        </div>
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            About Us
          </div>
        </div>

        <div className="relative">
          <img
            src={disclousreImg}
            alt="Disclosure"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            Disclosure
          </div>
        </div>
        <div className="relative">
          <img
            src={gallaryImg}
            alt="Gallery"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            Gallery
          </div>
        </div>
        <div className="relative">
          <img
            src={tcImg}
            alt="TC"
            className="w-full h-auto rounded shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
            TC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
