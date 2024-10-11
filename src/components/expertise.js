import React from 'react';

const expertiseItems = [
  {
    title: 'Healthcare Services',
    description: 'As a leading BPO and KPO brand, we manage a comprehensive range of healthcare services, ensuring quality, reliability, and accuracy for our clients.',
    icon: 'https://img.icons8.com/?size=96&id=AjSTXy58YYuf&format=png',
  },
  {
    title: 'Coding Aptitude',
    description: 'Our highly skilled software developers possess exceptional coding aptitude, enabling us to deliver innovative and efficient software solutions tailored to healthcare needs.',
    icon: 'https://img.icons8.com/?size=128&id=JDiIGQezdsjr&format=png',
  },
  {
    title: 'Process Outsourcing Services',
    description: 'We specialize in process outsourcing services, streamlining operations for healthcare providers to reduce costs and improve service quality.',
    icon: 'https://img.icons8.com/?size=96&id=11929&format=png',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-10 bg-light-green-50">
      <div className="container mx-auto text-center mb-2 font-serif">
        <h2 className="text-4xl font-semibold text-blue-800">Our Expertise</h2>
        <p className="text-lg text-gray-700 mt-4">Discover our core strengths and how we can help elevate your healthcare services.</p>
      </div>

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto font-serif">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="relative m-4 w-64 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Icon */}
            <img alt={item.title} className="h-16 w-16 mb-4" src={item.icon} />
            <h3 className="text-md font-semibold text-green-600">{item.title}</h3> {/* Updated font size and color */}
            <p className="text-gray-600 text-center mt-2">{item.description}</p> {/* Updated description styling */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
