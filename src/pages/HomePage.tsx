import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';
import EmergencyBanner from '../components/EmergencyBanner';

const HomePage: React.FC = () => {
  return (
    <>
      <EmergencyBanner />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </>
  );
};

export default HomePage;