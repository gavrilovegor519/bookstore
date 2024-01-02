import React from 'react';
import './ProductBasket.css';

function ProductBasket({id, image, title, price, setBasket}) {

  return (
    <div className="ProductBasket">
      <img src={image} alt='Изображение товара'/>
      <h1>{title}</h1>
      <p>{price} рублей</p>
      <button className='del' onClick={() => setBasket(current => current.filter(product => {return product.id !== id}))}>Удалить</button>
    </div>
  );
}

export default ProductBasket;