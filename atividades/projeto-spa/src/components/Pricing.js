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
          <h1 className='pricing__heading'>Casa protegida!</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaDragon />
                </div>
                <h3>Eternium Semanal</h3>
                <h4>R$09,85</h4>
                <p>Por semana</p>
                <ul className='pricing__container-features'>
                  <li>VPN até 300mb</li>
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
                <h3>Eternium Vip</h3>
                <h4>R$308,44</h4>
                <p>Por ano</p>
                <ul className='pricing__container-features'>
                <li>VPN até 12000mb</li>
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
                <h3>Eternium Black</h3>
                <h4>R$29,99</h4>
                <p>Por mês</p>
                <ul className='pricing__container-features'>
                  <li>VPN até 1000mb</li>
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