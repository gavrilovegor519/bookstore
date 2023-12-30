import React from 'react';
import './ProductBasket.css';

function ProductBasket({id, image, title, price, setBasket}) {

  /*
  function deleteInBasket(arr, id) {
    const entryId = arr.findIndex((obj) => obj.id === id)

    if (entryId > -1) {
      arr.splice(entryId, 1)
    }

    return arr
  }
  */

  return (
    <div className="ProductBasket">
      <img src={image} alt='Изображение товара'/>
      <h1>{title}</h1>
      <p>{price} рублей</p>
      <button className='del'>Удалить</button>
    </div>
  );
}

export default ProductBasket;