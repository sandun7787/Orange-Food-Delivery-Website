import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/Context';

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-titles">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index} className="cart-item-title cart-items-items">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>{item.price*cartItem[item._id]}</p>
              <p>x</p>

              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
