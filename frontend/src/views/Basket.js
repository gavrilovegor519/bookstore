import React from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';

function Basket({basket, setBasket}) {
  return (
    <div className="Basket">
      <h1>Корзина</h1>
      {basket.map((item) => <ProductBasket key={item.id} id={item.id} 
                            image={item.image} title={item.title} 
                            price={item.price} setBasket={setBasket}/>)}
    </div>
  );
}

export default Basket;