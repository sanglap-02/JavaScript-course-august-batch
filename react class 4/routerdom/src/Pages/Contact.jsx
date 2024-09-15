import React from 'react';
import {Link,Outlet} from 'react-router-dom'

export default function Contact() {
  return (
    <div className=" bg-gray-100 flex flex-col">
    

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the contact form below.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Office</h2>
          <p className="text-lg text-gray-600 mb-4">1234 Street Name, City, State, 12345</p>
          <p className="text-lg text-gray-600 mb-4">Phone: (123) 456-7890</p>
          <p className="text-lg text-gray-600">Email: contact@myapp.com</p>
        </div>
      </div>

      <button className="mb-10 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"><Link to='phone'>get phone</Link></button>
      <button className="mb-10 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"><Link to='address'>get Address</Link></button>

      <Outlet></Outlet>
    </div>
  );
}
