import React from 'react';
import logo from '../../images/doge.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';


export default function SignUp() {
  return (
    <>
    
      <div className="container sign-up">
      <h1> CADASTRO </h1><br/>
      <hr/>
      <img src={logo} alt="Logo" className="logo-doge" />
      
      <label for="username">Username:</label>
      <input type="email" placeholder="Email" />

      <label for="pwd" >Password:</label>
      <input type="password" id="pwd" name="pwd"></input>
      <hr/>

        {/*<Link to='/not-implemented'>
          <Button 
          buttonStyle='btn--outline'
          buttonSize='btn--small'>
             Cadastrar <i className='fas fa-hand-point-left' />
          </Button>
  </Link>*/}
        <Link to='/not-implemented'>Cadastrar</Link>
    </div>
    </>
    )
}
