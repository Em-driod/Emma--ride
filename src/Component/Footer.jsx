import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Buying & Selling</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Financing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Find a Car</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Find a Dealer</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Listings by City</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certified Pre-Owned</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Car Payment Calculators</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Car Reviews & Ratings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Compare Side by Side</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Fraud Awareness</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Sell Your Car</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore Our Brand</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">NewCars.com</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">DealerRater</a></li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-4">For Dealer Partners</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Platform Log-In</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Cars Commerce Overview</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Investor Relations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Licensing & Reprints</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Site Map</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Feedback</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mobile App</h3>
            <div className="flex space-x-4 mb-6">
            <FaGooglePlay size={20} color='green' />
            <FaApple size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4"><FaFacebook size={40} color='blue' />
            <FaInstagramSquare size={40} color='purple' />
            <FaXTwitter size={40} />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
          © 2025 YourCompanyName. All rights reserved. | Terms & Conditions | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

