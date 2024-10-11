import React from 'react';
import Navbar from './layout/navbar';
import ClientFeedback from './components/ClientFeedback';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Services from './components/Services';
import Technology from './components/Technology';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Expertise from './components/expertise';

const App = () => {
  return (
    <div>
      <Navbar />
         <Hero />
      <Services />
      <Technology />
      <Expertise/>
      <WhyWorkWithUs />
      <ClientFeedback />
      <Footer />
    </div>
  );
};

export default App;
