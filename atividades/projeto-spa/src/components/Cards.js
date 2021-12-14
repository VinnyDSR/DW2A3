import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore e conheça nossos serviços!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/av.jpeg'
              text='Conheça os nossos planos domésticos!'
              label='Domestico'
              path='/domestic'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/Computador.jpg'
              text='Produtos Eternium para empresas!'
              label='Corporativo'
              path='/corporative'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Quem somos e o que fazemos!'
              label='Quem Somos'
              path='/who-we-are'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
