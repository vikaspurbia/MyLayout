// src/WhyWorkWithUs.js
import React from 'react';

const WhyWorkWithUs = () => {
  return (
    <section id="why-work" className="py-10 bg-light-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5 font-serif">Why Work With Us</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://www.outsourceaccelerator.com/wp-content/uploads/2019/06/KPO-services.png" // Health-related image URL
              alt="Health Services"
              className="mx-auto w-64 h-64 object-cover" // Increased width and height
            />
          </div>

          <div className="md:w-1/2 font-serif text-left px-4">
            <p className="text-lg text-gray-700 mb-4">
              At our company, we are dedicated to providing exceptional health services, ensuring the well-being of our clients through innovative solutions and personalized care.
            </p>
            <ul className="list-disc text-gray-600 mb-4">
              <li className="mb-2"> Experienced professionals in healthcare technology.</li>
              <li className="mb-2"> Comprehensive solutions for health management systems.</li>
              <li className="mb-2">Commitment to data security and patient confidentiality.</li>
              <li className="mb-2">Tailored services to meet the unique needs of healthcare providers.</li>
              <li className="mb-2"> Continuous support and updates for evolving healthcare challenges.</li>
            </ul> 
            <p className="text-lg text-gray-700">
              Partner with us to experience a dedicated approach to your health service needs. Your success is our priority!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
