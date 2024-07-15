import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/hsa_logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="School Logo" className="h-12 object-cover" />
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoMdMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav
          className={`md:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black md:bg-blue-900 md:static md:w-auto md:space-x-8`}
        >
          <div className="flex flex-col items-center md:flex-row md:space-x-8 md:items-center">
            <a
              href="#home"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              Home
            </a>
            <a
              href="#admission"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              Admission
            </a>
            <a
              href="#tc"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              TC
            </a>
            <a
              href="#gallery"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              Gallery
            </a>
            <a
              href="#disclosure"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              Mandatory Disclosure
            </a>
            <a
              href="#about"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 hover:text-yellow-400 transition duration-300 text-center"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
