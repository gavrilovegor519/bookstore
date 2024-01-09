import React from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';

function Basket({ basket, setBasket, basketPrice, setBasketPrice, basketQty, setBasketQty }) {
  function BasketContent() {
    if (basketQty > 0) {
      return(
        <>
          <h1>Корзина</h1>
          <div className="BasketContent">
            {basket.map((item) => <ProductBasket key={item.id} id={item.id}
              image={item.image} title={item.title}
              price={item.price} setBasket={setBasket}
              setBasketPrice={setBasketPrice}
              setBasketQty={setBasketQty} />)}
          </div>
          <p>Количество товаров: {basketQty}</p>
          <p>Общая стоимость товаров: {basketPrice}</p>
          <button className="order">Оформить заказ</button>
        </>
      )
    } else {
      return(
        <>
          <h1>Корзина пуста!</h1>
        </>
      )
    }
  }

  return (
    <div className="Basket">
      <BasketContent/>
    </div>
  );
}

export default Basket;