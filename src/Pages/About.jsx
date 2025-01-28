import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About UrbanTorque</h1>
          <p className="mt-4 text-lg">
            Discover our story, mission, and the people behind UrbanTorque.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At UrbanTorque, we aim to revolutionize the car rental and sales industry by offering a seamless and customer-centric experience. Whether you’re looking to buy your dream car or rent one for your next adventure, we’re here to make it happen with ease and transparency.
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Journey</h2>
          <p className="mt-4 text-center text-gray-600">
            UrbanTorque was founded with a vision to simplify car sales and rentals. From our humble beginnings to becoming a trusted name in the industry, we’ve grown because of our commitment to excellence and innovation.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700">2015</h3>
              <p className="text-gray-600 mt-2">UrbanTorque was established, driven by a passion for cars and customer satisfaction.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700">2020</h3>
              <p className="text-gray-600 mt-2">Expanded to multiple cities, offering both car sales and rental options.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700">2025</h3>
              <p className="text-gray-600 mt-2">Continuing our journey to provide innovative solutions for car enthusiasts worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-center text-gray-600">
            Our team is dedicated to delivering exceptional service and ensuring your car needs are met with expertise and care.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">Jane Smith</h3>
              <p className="text-gray-600">Head of Sales</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">Mike Brown</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
