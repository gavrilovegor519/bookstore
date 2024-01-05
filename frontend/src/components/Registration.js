import React from 'react';
import './Registration.css';

function Registration({setModalBox}) {

  function Reg() {
    const email = document.getElementById('email').value
    const login = document.getElementById('login').value
    const password = document.getElementById('pass').value

    const data = {
      email: email,
      login: login,
      password: password
    }

    console.log(data)

    const api = 'http://127.0.0.1:9001/registration'

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((result) => result.json())
    .then((result) => console.log(result))

    setModalBox('none')
  }

  return (
    <div className="Registration">
      <h1>Регистрация:</h1>
      <input id='email' placeholder='E-Mail'/>
      <input id='login' placeholder='Логин'/>
      <input id='pass' placeholder='Пароль'/>
      <button id='send' onClick={Reg}>Войти</button>
    </div>
  );
}

export default Registration;