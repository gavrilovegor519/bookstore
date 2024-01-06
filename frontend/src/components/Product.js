import React from 'react';
import './Product.css';

function Product({id, image, title, price, setBasket, setBasketPrice, setBasketQty}) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  function addToBasket() {
    setBasket(prevState => [...prevState, product])
    setBasketPrice(current => ({counter: current.counter + product.price}))
    setBasketQty(current => ({counter: current.counter + 1}))
  }

  return (
    <div className="Product">
      <img src={product.image} alt='Изображение товара'/>
      <h1>{product.title}</h1>
      <p>{product.price} рублей</p>
      <button className='buy' onClick={() => addToBasket()}>Купить</button>
    </div>
  );
}

export default Product;