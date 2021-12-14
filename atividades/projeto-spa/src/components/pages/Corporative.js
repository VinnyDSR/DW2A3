import React from 'react';
import '../../App.css';
import PricingCorp from '../PricingCorp';
import Footer from '../Footer';

function Products() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/Natal2.mp4' autoPlay loop muted />
      <h1 className='corporative'>Corporativo</h1>
      <p className='fraseFundo'>Destinado a empresas de todos os portes!</p>
    </div>
    <PricingCorp />
    <Footer/>
    </>
  );
}

export default Products;