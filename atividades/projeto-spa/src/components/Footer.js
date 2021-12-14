import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Deixe seu e-mail para receber as promoções de temporada do Eternium-AV!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Link to='/not-implemented'>
          <Button 
          buttonStyle='btn--outline'
          buttonSize='btn--small'>
             Inscrever-se
          </Button>
        </Link>
          </form>
        </div>
      </section>
      <div class='footer-links'>
          <div class='footer-link-items'>
            <h2>Planos</h2>
            <Link to='/domestic'>Doméstico</Link>
            <Link to='/corporative'>Corporativo</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/who-we-are'>Quem somos</Link>
            <Link to='/contact'>Contato</Link>
            <Link to='/SAC'>SAC</Link>

          </div>
        
        
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Eternium AV © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/not-implemented'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/not-implemented'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/not-implemented'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/not-implemented'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/not-implemented'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
