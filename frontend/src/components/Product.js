import React from 'react';
import './Product.css';

function Product({id, image, title, price, setBasket}) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  return (
    <div className="Product">
      <img src={product.image} alt='Изображение товара'/>
      <h1>{product.title}</h1>
      <p>{product.price} рублей</p>
      <button className='buy' onClick={() => setBasket(prevState => [...prevState, product])}>Купить</button>
    </div>
  );
}

export default Product;