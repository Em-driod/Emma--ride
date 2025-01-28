import React, { useState } from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <div className="relative bg-gray-100">
      {/* Background Image and Overlay */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url('/16.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 text-white space-y-2 md:space-y-4">
          <motion.h1
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {activeTab === "sale"
              ? "The easiest way to Get your car"
              : "Find the perfect car for rent"}
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {activeTab === "sale"
              ? "Receive an Instant Offer in a few clicks."
              : "Browse through a wide range of rental cars for every need."}
          </motion.p>
        </div>
      </div>

      {/* Tabbed Section */}
      <div className="bg-white shadow-md">
        <div className="flex justify-around border-b border-gray-300">
          <button
            onClick={() => setActiveTab("sale")}
            className={`w-1/2 md:w-auto px-4 md:px-6 py-3 font-medium ${
              activeTab === "sale"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Shop cars for sale
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`w-1/2 md:w-auto px-4 md:px-6 py-3 font-medium ${
              activeTab === "rent"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Car for rent
          </button>
        </div>

        {/* Conditional Rendering for Tabs */}
        {activeTab === "sale" ? (
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6">
            <div className="flex flex-col w-full sm:w-[48%] md:w-1/5">
              <label className="text-sm text-gray-600 mb-1">Make</label>
              <select className="border border-gray-300 p-2 rounded">
                <option>All makes</option>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[48%] md:w-1/5">
              <label className="text-sm text-gray-600 mb-1">Model</label>
              <select className="border border-gray-300 p-2 rounded">
                <option>All models</option>
                <option>Corolla</option>
                <option>Civic</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[48%] md:w-1/5">
              <label className="text-sm text-gray-600 mb-1">Distance</label>
              <select className="border border-gray-300 p-2 rounded">
                <option>30 miles</option>
                <option>50 miles</option>
                <option>100 miles</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[48%] md:w-1/5">
              <label className="text-sm text-gray-600 mb-1">ZIP</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="ZIP"
              />
            </div>
            <button className="w-full sm:w-[48%] md:w-1/5 bg-purple-600 text-white py-3 px-4 rounded hover:bg-purple-700">
              Show 10,000+ matches
            </button>
          </div>
        ) : (
          <div className="p-4 md:p-6">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Explore Cars for Rent
              </h3>
              <p className="text-sm md:text-gray-600">
                Find a wide range of cars for short-term and long-term rentals.
                Whether you're looking for economy cars, luxury vehicles, or
                SUVs, we have you covered.
              </p>
              <button className="w-full sm:w-1/3 bg-purple-600 text-white py-3 px-4 rounded hover:bg-purple-700">
                Browse Rental Cars
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Herosection;




