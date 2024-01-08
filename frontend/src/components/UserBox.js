import React from 'react';
import './UserBox.css';
import {jwtDecode} from 'jwt-decode';

function UserBox({setModalBox}) {

  function MultipleBoxes() {
    const token = localStorage.getItem('token')

    if (token !== null) {
      const login = jwtDecode(token).login

      console.debug(login)

      return(
        <div className="UserBox">
          <p>Привет, {login}!</p>
          <button>Личный кабинет</button>
        </div>
      )
    }

    return(
      <div className="UserBox">
        <button onClick={() => setModalBox('Login')}>Вход</button>
        <button onClick={() => setModalBox('Registration')}>Регистрация</button>
      </div>
    )
  }

  return (
    <MultipleBoxes/>
  );
}

export default UserBox;