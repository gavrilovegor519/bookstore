import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';

function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')

  const pages = {
    Main: <Main/>,
    Basket: <Basket/>
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox = 'Login'/>,
    Registration: <ModalBox setModalBox= 'Registration'/>
  }

  return (
    <div className="App">
      <Header setPage = {setPage} setModalBox = {setModalBox}/>
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer/>
    </div>
  );
}

export default App;
