// import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
// import firstImg from "../assets/firstCarousel.webp";
// import secondImg from "../assets/secondCarousel.webp";
// import thirdImg from "../assets/thirdCarousel.webp";
// import fourthImg from "../assets/fourthCarousel.webp";
// import fifthImg from "../assets/fifthCarousel.webp";

// const BannerImage = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const Images = [firstImg, secondImg, thirdImg, fourthImg, fifthImg];

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % Images.length);
//   };

//   const prevImage = () => {
//     console.log("clicked");
//     setCurrentImage((prev) => (prev - 1 + Images.length) % Images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 3000);
//     return () => clearInterval(interval);
//   }, [currentImage]);

//   return (
//     <div className="container mx-auto px-4 rounded-lg shadow-lg overflow-hidden">
//       <div className="h-56 md:h-72 w-full relative">
//         {/** Navigation buttons for desktop and tablet */}
//         <div className="absolute z-20 h-full w-full flex items-center justify-between px-4 md:px-8 text-3xl text-white">
//           <button
//             onClick={prevImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition hidden md:block"
//           >
//             <FaAngleLeft />
//           </button>
//           <button
//             onClick={nextImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition hidden md:block"
//           >
//             <FaAngleRight />
//           </button>
//         </div>

//         {/** Image slider */}
//         <div
//           className="flex h-full w-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentImage * 100}%)` }}
//         >
//           {Images.map((imageURL, index) => (
//             <div className="w-full h-full flex-shrink-0 relative" key={index}>
//               <img
//                 src={imageURL}
//                 alt={`Slide ${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/** Dots indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {Images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentImage ? "bg-white" : "bg-gray-400"
//               } transition-colors duration-300`}
//             ></div>
//           ))}
//         </div>

//         {/** Navigation buttons for mobile */}
//         <div className="md:hidden absolute inset-0 flex items-center justify-between px-4 text-3xl text-white">
//           <button
//             onClick={prevImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition"
//           >
//             <FaAngleLeft />
//           </button>
//           <button
//             onClick={nextImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition"
//           >
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerImage;

import Slider from "react-slick";
import firstImg from "../assets/firstCarousel.webp";
import secondImg from "../assets/secondCarousel.webp";
import thirdImg from "../assets/thirdCarousel.webp";
import fourthImg from "../assets/fourthCarousel.webp";
import fifthImg from "../assets/fifthCarousel.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerImage = () => {
  const images = [firstImg, secondImg, thirdImg, fourthImg, fifthImg];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaAngleRight size={30} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaAngleLeft size={30} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto px-4 rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings}>
        {images.map((imageURL, index) => (
          <div key={index} className="h-56 md:h-72 w-full">
            <img
              src={imageURL}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerImage;
