import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Gallery from '../../components/Gallery/Gallery';
import Testimonial from '../../components/Testimonial/Testimonial';
import Donation from '../../components/Donation/Donation';
import ContactSection from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonial />
      <div id="donation">
        <Donation />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
