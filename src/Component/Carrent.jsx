import React, { useState } from "react";
import { motion } from "framer-motion";

const Carrent = () => {
  const [filter, setFilter] = useState(""); // State to track search input
  const [typeFilter, setTypeFilter] = useState("all"); // State to filter by type

  // Sample rental car data
  const rentalCars = [
    { id: 1, name: "BMW 3 Series", image: "/9.jpg", type: "sedan", price: 80 },
    { id: 2, name: "Ford Explorer", image: "/10.jpg", type: "SUV", price: 100 },
    { id: 3, name: "Chevrolet Camaro", image: "/11.jpg", type: "sports", price: 120 },
    { id: 4, name: "Mazda CX-5", image: "/12.jpg", type: "SUV", price: 90 },
    { id: 5, name: "Toyota Corolla", image: "/13.jpg", type: "sedan", price: 70 },
    { id: 6, name: "Kia Soul", image: "/14.jpg", type: "hatchback", price: 60 },
    { id: 7, name: "Volkswagen Jetta", image: "/15.jpg", type: "sedan", price: 75 },
    { id: 8, name: "Dodge Charger", image: "/18.jpg", type: "sports", price: 110 },
  ];

  // Filtered rental car data
  const filteredRentalCars = rentalCars.filter((car) => {
    return (
      (typeFilter === "all" || car.type === typeFilter) &&
      car.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Car Rentals</h2>
      <p className="text-center text-gray-600 mb-8">Choose from a variety of rental cars for your needs.</p>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <input
          type="text"
          placeholder="Search cars..."
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="flex gap-2">
          {["all", "sedan", "SUV", "sports"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-2 rounded border ${
                typeFilter === type ? "bg-blue-600 text-white" : "border-gray-300"
              }`}
              onClick={() => setTypeFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Rental Car Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredRentalCars.map((car) => (
          <motion.div
            key={car.id}
            className="relative border rounded-lg shadow-md bg-white p-4 transition-transform hover:shadow-xl"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="font-semibold text-lg mt-4 text-gray-800">{car.name}</h3>
            <p className="text-gray-500 capitalize">{car.type}</p>
            <p className="text-green-600 font-bold">${car.price}/day</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-green-700"
            >
              Rent Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Links */}
      <div className="mt-8 flex justify-between items-center text-sm text-blue-600">
        <motion.a
          href="/premium-rentals"
          className="hover:underline"
          whileHover={{ scale: 1.1 }}
        >
          View premium rentals
        </motion.a>
        <motion.a
          href="/all-rentals"
          className="hover:underline"
          whileHover={{ scale: 1.1 }}
        >
          Browse all rentals
        </motion.a>
      </div>
    </div>
  );
};

export default Carrent;

