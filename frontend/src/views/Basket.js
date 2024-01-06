import React from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';

function Basket({basket, setBasket, basketPrice, setBasketPrice, basketQty, setBasketQty}) {
  return (
    <div className="Basket">
      <h1>Корзина</h1>
      <div className="BasketContent">
      {basket.map((item) => <ProductBasket key={item.id} id={item.id} 
                            image={item.image} title={item.title} 
                            price={item.price} setBasket={setBasket}
                            setBasketPrice={setBasketPrice}
                            setBasketQty={setBasketQty}/>)}
      </div>
      <p>Количество товаров: {basketQty.counter}</p>
      <p>Общая стоимость товаров: {basketPrice.counter}</p>
    </div>
  );
}

export default Basket;