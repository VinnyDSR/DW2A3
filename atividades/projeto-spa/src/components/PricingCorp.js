import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaDragon } from 'react-icons/fa';
import { GiEvilBat } from 'react-icons/gi'
import { GiSpiderMask } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Protegendo empresas!</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaDragon />
                </div>
                <h3>Eternium Corp Diamond</h3>
                <h4>R$900,00</h4>
                <p>Anual</p>
                <ul className='pricing__container-features'>
                  <li>Até 30 computadores</li>
                  <li>Password Manager Premium</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiSpiderMask />
                </div>
                <h3>Eternium Corp Black</h3>
                <h4>R$1500,00</h4>
                <p>Anual</p>
                <ul className='pricing__container-features'>
                <li>Até 300 computadores</li>
                  <li>Password Manager Premium</li>
                  <li>Eternium NoPing</li>
                  <li>Otimização para jogos</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  < GiEvilBat />
                </div>
                <h3>Eternium Corp</h3>
                <h4>R$4500,00</h4>
                <p>Anual</p>
                <ul className='pricing__container-features'>
                  <li>Até 1000</li>
                  <li>Password Manager Premium</li>
                  <li>Eternium NoPing</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Escolher plano
                </Button>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;