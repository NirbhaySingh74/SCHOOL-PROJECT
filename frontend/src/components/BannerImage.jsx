import Slider from "react-slick";
import firstImg from "../assets/firstCarousel.webp";
import secondImg from "../assets/secondCarousel.webp";
import thirdImg from "../assets/thirdCarousel.webp";
import fourthImg from "../assets/fourthCarousel.webp";
import fifthImg from "../assets/fifthCarousel.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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
    <div className="container mx-auto my-4 px-0 md:px-4 rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings}>
        {images.map((imageURL, index) => (
          <div key={index} className="h-80 md:h-96 w-full">
            <img
              src={imageURL}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerImage;
