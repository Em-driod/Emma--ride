import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaSignInAlt } from 'react-icons/fa';
import SignInModal from './SignInModal'; // Import the modal component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Sign In modal

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="fixed bg-white shadow-lg w-full z-10 top-0">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:text-blue-500 transition duration-200 ease-in-out">
          UrbanTorque
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center mx-4 relative"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
          <button
            type="submit"
            className="absolute left-2 text-gray-400 hover:text-blue-500 transition duration-200 ease-in-out"
          >
            <FaSearch />
          </button>
        </form>

        {/* Hamburger Menu Icon */}
        <button
          className="text-2xl md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/car-news" className="hover:text-blue-500 transition duration-200 ease-in-out">
            Car News
          </Link>
          <Link to="/research" className="hover:text-blue-500 transition duration-200 ease-in-out">
            Research & Review
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition duration-200 ease-in-out">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-200 ease-in-out">
            Contact
          </Link>
          <button
            onClick={() => setIsModalOpen(true)} // Open Sign In modal
            className="hover:text-blue-500 transition duration-200 ease-in-out flex items-center"
          >
            <FaSignInAlt className="mr-2" /> Sign In
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          {/* Search Bar in Dropdown */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center mx-4 relative mt-4"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <button
              type="submit"
              className="absolute left-2 text-gray-400 hover:text-blue-500 transition duration-200 ease-in-out"
            >
              <FaSearch />
            </button>
          </form>

          <nav className="flex flex-col space-y-4 p-4">
          
            <Link
              to="/research"
              className="hover:text-blue-500 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Research & Review
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/car-news"
              className="hover:text-blue-500 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Car News
            </Link>
            <button
              onClick={() => {
                setIsModalOpen(true); // Open Sign In modal
                setIsMenuOpen(false); // Close dropdown
              }}
              className="hover:text-blue-500 transition duration-200 ease-in-out flex items-center"
            >
              <FaSignInAlt className="mr-2" /> Sign In
            </button>
          </nav>
        </motion.div>
      )}

      {/* Modal for Sign In */}
      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbar;
