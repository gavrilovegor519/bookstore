import React from 'react';
import './Product.css';

function Product({id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket}) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }
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