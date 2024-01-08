import React from 'react';
import './ProductBasket.css';

function ProductBasket({id, image, title, price, setBasket, setBasketPrice, setBasketQty}) {

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id))
    setBasketPrice(current => current - price)
    setBasketQty(current => current - 1)
  }

  return (
    <div className="ProductBasket">
      <img src={image} alt='Изображение товара'/>
      <h1>{title}</h1>
      <p>{price} рублей</p>
      <button className='del' onClick={() => deleteBasket()}>Удалить</button>
    </div>
  );
}

export default ProductBasket;