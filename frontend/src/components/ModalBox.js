import React from 'react';
import './ModalBox.css';
import Login from './Login';
import Registration from './Registration';

function ModalBox({setModalBox}) {

  const modelBoxes = {
    Login: <Login/>,
    Registration: <Registration/>
  }

  return (
    <>
        <div className="echo"></div>
        <div className="ModalBox">
          {modelBoxes[setModalBox]}
        </div>
    </>
  );
}

export default ModalBox;