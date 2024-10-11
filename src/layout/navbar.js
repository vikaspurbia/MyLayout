import React, { useState, useEffect } from 'react';

// Array of services and technologies
const services = [
  { name: 'Mobile App Development', icon: 'https://img.icons8.com/?size=160&id=pgP12qILVVdt&format=png' },
  { name: 'Cloud Services', icon: 'https://img.icons8.com/?size=96&id=aXgIQg8m0A4o&format=png' },
  { name: 'Web Development', icon: 'https://img.icons8.com/?size=96&id=0fGIa9F35rk7&format=png' },
  { name: 'AI and Machine Learning', icon: 'https://img.icons8.com/?size=96&id=fTkqveCX0blI&format=png' },
  { name: 'UI/UX Design', icon: 'https://img.icons8.com/?size=96&id=eTEIYjQS3aMT&format=png' },
  { name: 'Automation', icon: 'https://img.icons8.com/?size=160&id=ebqYqqDXkhky&format=png' },
  { name: 'Data Analytics', icon: 'https://img.icons8.com/?size=160&id=LMK9Z3QgHRpa&format=png' },
  { name: 'Data Mining', icon: 'https://img.icons8.com/?size=160&id=uXgMijzXD4lU&format=png' },
  // { name: 'Business Intelligence Analyst', icon: 'https://img.icons8.com/?size=160&id=4tUkCDZInPlg&format=png' },
  // { name: 'Data Processing', icon: 'https://img.icons8.com/?size=160&id=nu70plxQSMKj&format=png' },
];

const technologies = [
  { name: 'HTML', img: 'https://img.icons8.com/?size=96&id=20909&format=png' },
  { name: 'CSS', img: 'https://img.icons8.com/?size=96&id=7gdY5qNXaKC0&format=png' },
  { name: 'JavaScript', img: 'https://img.icons8.com/?size=96&id=108784&format=png' },
  { name: 'Java', img: 'https://img.icons8.com/?size=96&id=13679&format=png' },
  { name: 'C', img: 'https://img.icons8.com/?size=96&id=shQTXiDQiQVR&format=png' },
  { name: 'C++', img: 'https://img.icons8.com/?size=96&id=TpULddJc4gTh&format=png' },
  { name: 'Python', img: 'https://img.icons8.com/?size=96&id=l75OEUJkPAk4&format=png' },
  { name: 'C#', img: 'https://img.icons8.com/?size=96&id=45490&format=png' },
  { name: 'React', img: 'https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png' },
  { name: 'Bootstrap', img: 'https://img.icons8.com/?size=96&id=PndQWK6M1Hjo&format=png' },
  { name: 'Tailwind CSS', img: 'https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png' },
  { name: 'Next.js', img: 'https://img.icons8.com/?size=96&id=yUdJlcKanVbh&format=png' },
  // { name: 'Django', img: 'https://img.icons8.com/?size=160&id=XiUbqgjmy6MG&format=png' },
  // { name: 'MySQL', img: 'https://img.icons8.com/?size=96&id=UFXRpPFebwa2&format=png' },
  // { name: 'TypeScript', img: 'https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png' },
];
const solutions = [
  { name: 'HealthCare', icon: 'https://img.icons8.com/?size=96&id=AjSTXy58YYuf&format=png' },
  { name: 'Coding', icon: 'https://img.icons8.com/?size=128&id=JDiIGQezdsjr&format=png' },
  { name: 'Process', icon: 'https://img.icons8.com/?size=96&id=11929&format=png' },
];
const Navbar = () => {
  const [isHoveringSolutions, setIsHoveringSolutions] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const [isHoveringTechnology, setIsHoveringTechnology] = useState(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('bg-white');
    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-2 font-serif flex justify-between items-center shadow-md transition duration-300 ${bgColor}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-14 h-14 mr-2" />
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="flex justify-center space-x-6 list-none">
          {['Home', 'Solutions', 'Services', 'Technology', 'About'].map(item => (
            <li
              key={item}
              className={`relative transition duration-200 ease-in-out ${item === 'Get in Touch' ? 'bg-blue-600 text-white rounded-lg' : 'text-blue-600 hover:text-green-400'} flex items-center`}
              onMouseEnter={() => {
                if (item === 'Solutions') setIsHoveringSolutions(true);
                if (item === 'Services') setIsHoveringServices(true);
                if (item === 'Technology') setIsHoveringTechnology(true);
                if (item === 'About') setIsHoveringAbout(true);
              }}
              onMouseLeave={() => {
                if (item === 'Solutions') setIsHoveringSolutions(false);
                if (item === 'Services') setIsHoveringServices(false);
                if (item === 'Technology') setIsHoveringTechnology(false);
                if (item === 'About') setIsHoveringAbout(false);
              }}
            >
              <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="font-medium flex items-center justify-center h-full">{item}</a>
 {/* Dropdown for Solutions */}
 {item === 'Solutions' && isHoveringSolutions && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg  rounded-lg z-10 w-48"
                  onMouseEnter={() => setIsHoveringSolutions(true)}
                  onMouseLeave={() => setIsHoveringSolutions(false)}
                >
                  <div className="p-2 grid grid-cols-1 gap-2">
                    {solutions.map(solution => (
                      <div key={solution.name} className="flex items-center py-2 border-b border-gray-300 hover:bg-green-50 transition duration-200">
                        <img src={solution.icon} alt={solution.name} className="h-8 w-8 mr-2" />
                        <span className="text-blue-600 hover:text-green-500">{solution.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dropdown for Services */}
              {item === 'Services' && isHoveringServices && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg  rounded-lg z-10 w-96"
                  onMouseEnter={() => setIsHoveringServices(true)}
                  onMouseLeave={() => setIsHoveringServices(false)}
                >
                  <div className="p-4 grid grid-cols-2 gap-4">
                    {services.map(service => (
                      <div key={service.name} className="flex items-center py-2 border-b border-gray-300 hover:bg-green-50 transition duration-200">
                        <img src={service.icon} alt={service.name} className="h-8 w-8 mr-2" />
                        <span className="text-blue-600 hover:text-green-500">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dropdown for Technology */}
              {item === 'Technology' && isHoveringTechnology && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg z-10 w-64 "
                  onMouseEnter={() => setIsHoveringTechnology(true)}
                  onMouseLeave={() => setIsHoveringTechnology(false)}
                >
                  <div className="p-2 grid grid-cols-2 gap-2">
                    {technologies.map(technology => (
                      <div key={technology.name} className="flex items-center py-2 border-b border-gray-300 hover:bg-green-50 transition duration-200">
                        <img src={technology.img} alt={technology.name} className="h-8 w-8 mr-2" />
                        <span className="text-blue-600 hover:text-green-500">{technology.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dropdown for About */}
              {item === 'About' && isHoveringAbout && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg  rounded-lg z-10 w-36"
                  onMouseEnter={() => setIsHoveringAbout(true)}
                  onMouseLeave={() => setIsHoveringAbout(false)}
                >
                  <ul className="p-2">
                    {/* <li className="py-2 hover:bg-green-100 transition duration-200"><a href="#about-company" className="text-blue-600 hover:text-green-500">About Us</a></li> */}
                    <li className="py-2 hover:bg-green-100 transition duration-200"><a href="#our-team" className="text-blue-600 hover:text-green-500">Our Team</a></li>
                    <li className="py-2 hover:bg-green-100 transition duration-200"><a href="#testimonials" className="text-blue-600 hover:text-green-500">Career</a></li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Get in Touch Button */}
      <div className="ml-4">
        <a href="#contact" className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition duration-200">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;
