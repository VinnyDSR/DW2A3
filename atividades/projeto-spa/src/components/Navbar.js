import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import logo from '../images/Eternium-Logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <img src={logo} alt="Logo" className="eternium-nav-logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Eternium-AV
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Domestic'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Planos domésticos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Corporative'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Planos corporativos
              </Link>
            </li>

          </ul>
          <Link to='/sign-up'>
          <Button 
          buttonStyle='btn--outline'
          buttonSize='btn--small'>
             Cadastrar
          </Button>
        </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
