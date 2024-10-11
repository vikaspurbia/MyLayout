import React from 'react';

const technologies = [
  { name: 'HTML', img: 'https://img.icons8.com/?size=96&id=20909&format=png' },
  { name: 'CSS', img: 'https://img.icons8.com/?size=96&id=7gdY5qNXaKC0&format=png' },
  { name: 'JS', img: 'https://img.icons8.com/?size=96&id=108784&format=png' },
  { name: 'JavA', img: 'https://img.icons8.com/?size=96&id=13679&format=png' },
  { name: 'C', img: 'https://img.icons8.com/?size=96&id=shQTXiDQiQVR&format=png' },
  { name: 'C++', img: 'https://img.icons8.com/?size=96&id=TpULddJc4gTh&format=png' },
  { name: 'PYTHON', img: 'https://img.icons8.com/?size=96&id=l75OEUJkPAk4&format=png' },
  { name: 'C#', img: 'https://img.icons8.com/?size=96&id=45490&format=png' },
  { name: 'REACT', img: 'https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png' },
  { name: 'BOOTSTRAP', img: 'https://img.icons8.com/?size=96&id=PndQWK6M1Hjo&format=png' },
  { name: 'TAILWIND CSS', img: 'https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png' },
  { name: 'NEXTJS', img: 'https://img.icons8.com/?size=96&id=yUdJlcKanVbh&format=png' },
  { name: 'Django', img: 'https://img.icons8.com/?size=160&id=XiUbqgjmy6MG&format=png' },
  { name: 'MYSQL', img: 'https://img.icons8.com/?size=96&id=UFXRpPFebwa2&format=png' },
  { name: 'TS', img: 'https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png' },
];

const Technology = () => {
  return (
    <section id="technology" className="py-10 ">
      <div className="container mx-auto text-center mb-6 font-serif">
        <h2 className="text-4xl font-semibold text-blue-800">Technologies We Use</h2>
        <p className="text-lg text-gray-600 mt-2">We work with the latest and most trusted technologies in the industry.</p>
      </div>
      
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="m-4 p-6 w-32 h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg"
          >
            {/* Name shown above the logo */}
           
            <img src={tech.img} alt={tech.name} className="w-16 h-16 transition-transform duration-300 transform hover:scale-125" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
