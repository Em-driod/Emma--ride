import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 top-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We'd love to hear from you! Whether you have a question, feedback, or need support, we're here to help.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* WhatsApp Contact */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700">Contact via WhatsApp</h3>
          <p className="text-gray-600 mt-4">
            Chat with us directly for instant support or inquiries.
          </p>
          <a
            href="https://wa.me/07016969298"
            className="inline-block mt-6 bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Email Contact */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700">Email Us</h3>
          <p className="text-gray-600 mt-4">
            Drop us an email, and we’ll respond within 24 hours.
          </p>
          <p className="text-gray-800 mt-6 font-medium">support@urbantorque.com</p>
        </div>

        {/* Physical Location */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700">Visit Our Office</h3>
          <p className="text-gray-600 mt-4">
            UrbanTorque HQ, <br />
            123 Torque Street, <br />
            New York, NY 10001.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Get In Touch</h2>
          <form className="mt-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
