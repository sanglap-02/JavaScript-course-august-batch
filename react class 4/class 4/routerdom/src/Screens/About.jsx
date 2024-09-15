import React from 'react';

export default function About() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-md mb-8">
            We are dedicated to providing the best experience for our users. Our team is passionate about building innovative solutions to meet your needs. Learn more about our mission and values.
          </p>

          {/* Image or Additional Content */}
          <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg shadow-lg mb-8" />
          
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
}
