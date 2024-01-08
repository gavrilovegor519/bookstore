import React, { useEffect, useState } from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../img/image.jpg';

function Main({ setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const api = 'http://127.0.0.1:9001/products'

    fetch(api)
      .then((result) => result.json())
      .then((result) => {
        // console.debug(result.data)
        setProducts(result.data)
      })
  }, [])

  return (
    <div className="Main">
      {products.map((item) => <Product key={item._id} id={item._id} image={image}
        title={item.title} price={item.price} setBasket={setBasket}
        setBasketPrice={setBasketPrice} setBasketQty={setBasketQty}
        basket={basket} setMessage={setMessage} setModalBox={setModalBox} />)}
    </div>
  );
}

export default Main;