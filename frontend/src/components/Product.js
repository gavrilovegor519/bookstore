import React from 'react';
import './Product.css';

function Product({image, title, price}) {
  return (
    <div className="Product">
      <img src={image} alt='Изображение товара'/>
      <h1>{title}</h1>
      <p>{price} рублей</p>
      <button className='buy'>Купить</button>
    </div>
  );
}

export default Product;