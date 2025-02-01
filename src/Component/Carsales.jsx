import React, { useState } from "react";
import { motion } from "framer-motion";

const Carsales = () => {
  const [filter, setFilter] = useState(""); // State to track filters

  // Sample car data
  const cars = [
    { id: 1, name: "Jeep wagooner", image: "/1.jpg", type: "Limited" },
    { id: 2, name: "Ferrari s conda", image: "/2.jpg", type: "Out of stock" },
    { id: 3, name: "Nissan Leaf", image: "/3.jpg", type: "available" },
    { id: 4, name: "Tesla Model Y", image: "/4.jpg", type: "available" },
    { id: 5, name: "Ford Mustang Mach-E", image: "/5.jpg", type: "available" },
    { id: 6, name: "AMG F-150 Lightning", image: "/6.jpg", type: "electric" },
    { id: 7, name: "Range Rover i3", image: "/7.jpg", type: "electric" },
    { id: 8, name: "Mercedes Benz ID.4", image: "/8.jpg", type: "electric" },
  ];

  // Filtered car data
  const filteredCars = filter
    ? cars.filter((car) => car.name.toLowerCase().includes(filter.toLowerCase()))
    : cars;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Explore the Best CARS</h2>
      <p className="text-center text-gray-600 mb-8">
        Discover cutting-edge with luxirious and electric vehicles that match your style and performance needs.
      </p>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search cars..."
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Car Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredCars.map((car) => (
          <motion.div
            key={car.id}
            className="relative border rounded-lg shadow-md bg-white p-4 hover:shadow-xl transition"
            variants={cardVariants}
            whileHover={{
              scale: 1.15,
              y: -10, // Moves the card slightly up
            }}
          >
            <motion.img
              src={car.image}
              alt={car.name}
              className="h-48 w-full object-cover rounded-lg"
              whileHover={{
                rotateY: 360, // Rotates the image front-to-back
                transition: { duration: 4, ease: "easeInOut" },
              }}
            />
            <h3 className="font-bold text-lg mt-4 text-gray-800">{car.name}</h3>
            <p className="text-gray-500 capitalize">{car.type}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-blue-700"
            >
              Shop Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Links */}
      <div className="mt-8 flex justify-between items-center text-sm text-blue-600">
        <motion.a
          href="/electric-cars"
          className="hover:underline"
          whileHover={{ scale: 1.1 }}
        >
          See more electric cars
        </motion.a>
        <motion.a
          href="/all-cars"
          className="hover:underline"
          whileHover={{ scale: 1.1 }}
        >
          Shop all cars
        </motion.a>
      </div>
    </div>
  );
};

export default Carsales;
