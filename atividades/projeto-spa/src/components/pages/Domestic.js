import React from 'react';
import '../../App.css';
import Pricing from '../Pricing';
import Footer from '../Footer';

function Services() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/Christmas.mp4' autoPlay loop muted />
      <h1 className='domestic'>Doméstico</h1>
      <p>O plano para você e sua familia</p>
    </div>
    <Pricing />
    <Footer/>
    </>
  );
}

export default Services;
