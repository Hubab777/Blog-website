"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && message) {
      // Handle message submission logic here (e.g., sending to a server or API)
      // For now, we just display the success message
      setSuccessMessage("Message sent successfully!");

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");

      // Log the submitted message to the console
      console.log("Submitted message:", { name, email, message });
    } else {
      setSuccessMessage("Please fill out all fields.");
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto mt-4 sm:mt-6 bg-slate-100">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-yellow-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-yellow-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-yellow-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {successMessage && (
              <p className="mt-4 text-green-600 font-bold">{successMessage}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-yellow-600 text-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
            <p className="text-white mb-4">
              Have any questions or inquiries? Feel free to reach out to us using the contact details below.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-center">
                <span className="material-icons mr-4 text-black">Phone:</span>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-4 text-black">Email:</span>
                <span>info@northernblog.com</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-4 text-black">Location:</span>
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 md:mt-10 flex space-x-4">
              <a
                href="#"
                className="text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
