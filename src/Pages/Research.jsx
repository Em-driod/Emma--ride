import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStar, FaCar, FaCalculator, FaBolt, FaRegFileAlt } from 'react-icons/fa';

const Research = () => {
  return (
    <div className="mt-10">
      {/* Hero Section */}
      <div 
  className="bg-[url('12.jpg')] bg-cover bg-center text-white py-16"
>
  <div className="bg-black bg-opacity-50 py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Empower Your Choices: Uncover In-Depth Car Research & Reviews
      </motion.h1>
      <p className="text-lg mb-8">
        Your ultimate resource for expert opinions, performance stats, pricing insights, and ownership experiences.
      </p>
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg shadow text-white">
          Start Research
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg shadow text-blue-900">
          Compare Models
        </button>
      </motion.div>
    </div>
  </div>
</div>


      {/* Search & Filter Section */}
      <div className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car model, brand, or type..."
              className="w-full border border-gray-300 rounded-lg pl-12 py-3 pr-4 shadow focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="mt-4 flex space-x-4">
            <select className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500">
              <option value="">Car Brand</option>
              <option value="toyota">Toyota</option>
              <option value="mercedes">Mercedes</option>
              <option value="ferrari">Ferrari</option>
              <option value="honda">Honda</option>
            </select>
            <select className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500">
              <option value="">Type</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="coupe">Coupe</option>
            </select>
            <select className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500">
              <option value="">Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Brands */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: 'Toyota', tagline: 'Reliability redefined' },
            { name: 'Ferrari', tagline: 'Power meets luxury' },
            { name: 'Mercedes-Benz', tagline: 'Engineering excellence' },
            { name: 'Honda', tagline: 'Affordable innovation' },
            { name: 'Lamborghini', tagline: 'Unmatched speed and style' },
            { name: 'Ford', tagline: 'Strength in every model' },
          ].map((brand, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaCar className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold">{brand.name}</h3>
              <p className="text-gray-500">{brand.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expert Reviews Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Expert Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Toyota Camry 2025',
                rating: 5,
                summary: 'Affordable luxury with great mileage.',
              },
              {
                title: 'Ferrari SF90 Stradale',
                rating: 4,
                summary: 'Blazing speed with a hybrid engine.',
              },
              {
                title: 'Tesla Model S',
                rating: 5,
                summary: 'Futuristic tech and unmatched range.',
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-500">{review.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-[url('14.jpg')] bg-cover bg-center text-white bg-black opacity-1/2 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 bg-black opacity-70">Subscribe to our newsletter for the latest reviews and updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md mx-auto rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg shadow text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Research;
