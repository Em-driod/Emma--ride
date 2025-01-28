import React from 'react';

const Newss = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">News & Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative">
          <img
            src="/one (2).jpg"
            alt="Ford Bronco"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
            <p>149,000+ Ford Broncos Recalled for Failing Shock Absorbers</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative">
          <img
            src="17.jpg"
            alt="Jeep Wagoneer"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
            <p>2024 Jeep Wagoneer S Review: Quick, Luxurious, and Maybe Just a Little Too Late?</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative">
          <img
            src="3.jpg"
            alt="Car Heater"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
            <p>Why Does My Car Heater Blow Cold Air?</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="relative">
          <img
            src="12.jpg"
            alt="2025 Ram 1500"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
            <p>How Much Is a 2025 Ram 1500?</p>
          </div>
        </div>
      </div>
      <button className="mt-6 text-blue-600 underline">See all news</button>
    </div>
  );
};

export default Newss;
