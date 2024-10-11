// src/ClientFeedback.js
import React from 'react';

// Sample client feedback data
const feedbacks = [
  {
    text: "The service was outstanding! Highly recommended!",
    clientName: "John Doe",
    company: "Tech Innovations",
    image: "https://via.placeholder.com/150", // Replace with actual client image URL
  },
  {
    text: "I loved working with this team.",
    clientName: "Jane Smith",
    company: "Creative Solutions",
    image: "https://via.placeholder.com/150", // Replace with actual client image URL
  },
  // Add more feedback entries as needed
];

const ClientFeedback = () => {
  return (
    <section id="feedback" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800 font-serif">Happy Clients</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <blockquote className="text-center italic text-gray-600 mb-4">
              "{feedback.text}"
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src={feedback.image}
                alt={feedback.clientName}
                className="w-16 h-16 rounded-full mr-3"
              />
              <div className="text-left font-serif">
                <p className="font-semibold text-blue-800">{feedback.clientName}</p>
                <p className="text-green-600">{feedback.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientFeedback;
