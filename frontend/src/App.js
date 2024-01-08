import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Cabinet from './views/Cabinet';

function App() {

  const [page, setPage] = useState('Main')
  const [modalBox, setModalBox] = useState('none')
  const [basket, setBasket] = useState([])
  const [basketPrice, setBasketPrice] = useState(0)
  const [basketQty, setBasketQty] = useState(0)
  const [token, setToken] = useState(localStorage.getItem('token'))

  const pages = {
    Main: <Main setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketQty={setBasketQty} basket={basket} />,
    Basket: <Basket basket={basket} setBasket={setBasket} basketPrice={basketPrice} setBasketPrice={setBasketPrice} basketQty={basketQty} setBasketQty={setBasketQty} />,
    Cabinet: <Cabinet token={token} />
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login setModalBox={setModalBox} setToken={setToken} /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration setModalBox={setModalBox} /></ModalBox>
  }

  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox} token={token} setToken={setToken} />
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer />
    </div>
  );
}

export default App;
