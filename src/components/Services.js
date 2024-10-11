import React from 'react';

// Array of services with names, icon image URLs, and descriptions
const services = [
  {
    name: 'Mobile App Development',
    icon: 'https://img.icons8.com/?size=160&id=pgP12qILVVdt&format=png',
    description: 'Creating user-friendly mobile applications for iOS and Android platforms.',
  },
  {
    name: 'Cloud Services',
    icon: 'https://img.icons8.com/?size=96&id=aXgIQg8m0A4o&format=png',
    description: 'Providing scalable cloud solutions for data storage and management.',
  },
  {
    name: 'Web Development',
    icon: 'https://img.icons8.com/?size=96&id=0fGIa9F35rk7&format=png',
    description: 'Building responsive and dynamic websites tailored to your business needs.',
  },
  {
    name: 'AI and Machine Learning',
    icon: 'https://img.icons8.com/?size=96&id=fTkqveCX0blI&format=png',
    description: 'Implementing AI solutions to enhance decision-making and automation.',
  },
  {
    name: 'UI/UX Design',
    icon: 'https://img.icons8.com/?size=96&id=eTEIYjQS3aMT&format=png',
    description: 'Designing intuitive interfaces and user experiences for applications.',
  },
  {
    name: 'Automation',
    icon: 'https://img.icons8.com/?size=160&id=ebqYqqDXkhky&format=png',
    description: 'Streamlining business processes through automated workflows and tools.',
  },
  {
    name: 'Data Analytics',
    icon: 'https://img.icons8.com/?size=160&id=LMK9Z3QgHRpa&format=png',
    description: 'Analyzing data to uncover insights and drive business strategies.',
  },
  {
    name: 'Data Mining',
    icon: 'https://img.icons8.com/?size=160&id=uXgMijzXD4lU&format=png',
    description: 'Extracting valuable patterns and information from large datasets.',
  },
  {
    name: 'Business Intelligence Analyst',
    icon: 'https://img.icons8.com/?size=160&id=4tUkCDZInPlg&format=png',
    description: 'Transforming data into actionable insights to support business decisions.',
  },
  {
    name: 'Data Processing',
    icon: 'https://img.icons8.com/?size=160&id=nu70plxQSMKj&format=png',
    description: 'Organizing and analyzing data for improved accuracy and accessibility.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-light-green-50"> {/* Changed background color */}
      <div className="container mx-auto text-center mb-4 bg-blue-00 ">
        <h2 className="text-4xl font-semibold text-blue-800 font-sarif">Our Services</h2> {/* Adjusted text color */}
        <p className="text-lg text-gray-700 mt-4 font-sarif">
          Explore the wide range of services we offer to help your business thrive.
        </p>
      </div>

      <div className="flex flex-wrap font-sarif justify-center max-w-6xl mx-auto">
        {services.map(service => (
          <div
            key={service.name}
            className="relative m-2 w-64 h-48 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Service icon */}
            <img alt={service.name} className="h-12 w-12 mb-2" src={service.icon} />
            <h3 className="text-md font-semibold text-green-600">{service.name}</h3> {/* Adjusted text color */}
            <p className="text-center text-gray-600 mt-2">{service.description}</p> {/* Added description */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
