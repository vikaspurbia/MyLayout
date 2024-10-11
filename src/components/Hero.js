import React, { useState, useEffect } from 'react';

const Hero = ({ isHovered }) => {
  const images = ['DSC_0049.jpeg', 'DSC_0001.jpeg', 'DSC_0046.jpg'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative flex flex-col justify-end items-center h-screen w-full transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Transparent overlay with adjusted opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust this opacity as needed */}

      <div className="relative z-10 text-center mb-40">
        {/* Conditionally hide content when a dropdown is open */}
        {!isHovered && (
          <>
            <h1 className="text-lime-400 text-4xl font-bold mb-2 drop-shadow-lg transition-all duration-1000">
              IT Solutions for Your Business
            </h1>
            <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-4 rounded-3xl transition duration-300 ease-in-out shadow-lg">
              Explore Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
