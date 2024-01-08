import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox, token}) {
  return (
    <div className="Header">
      <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('Basket')}>Корзина</li>
      </ul>
      <UserBox setModalBox = {setModalBox} token={token}/>
    </div>
  );
}

export default Header;