import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-44 gap-4">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <ul>
              <li className="flex items-center mb-2">
                <MdEmail className="h-5 w-5 mr-2" />
                <span>Email: hsacademy@rediffmail.com</span>
              </li>
              <li className="flex items-center mb-2">
                <FaPhoneSquareAlt className="h-5 w-5 mr-2" />
                <span>Phone: 9119823653, 7703004336</span>
              </li>
              {/* Address adjustments based on screen size */}
              <li className="flex items-center mb-2 md:hidden">
                <FaLocationDot className="h-5 w-5 mr-2" />
                <span>Harihar Singh Academy</span>
              </li>
              <li className="flex items-center mb-2 md:hidden">
                <span>Tisaura, Cholapur, Varanasi</span>
              </li>
            </ul>
            {/* Full address visible on medium and larger screens */}
            <div className="hidden md:block">
              <FaLocationDot className="h-5 w-5 inline mr-2" />
              <span>Harihar Singh Academy, Tisaura, Cholapur, Varanasi</span>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-2">Useful Links</h4>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Cancellation and Refund</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
            </ul>
          </div>

          {/* Line separator for small screens */}
          <hr className="mt-8 md:hidden" />

          {/* Credits */}
          <div className="text-center md:text-left">
            <p>&copy; Harihar Singh Academy 2024, All Rights Reserved</p>
            <p>
              POWERED BY:{" "}
              <a href="https://anshuman.cloud" className="underline">
                anshuman.cloud
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
