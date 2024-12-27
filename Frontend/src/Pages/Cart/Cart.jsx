import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/Context';

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

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
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p
                  className='cross'
                  onClick={() => handleRemove(item._id)}
                >
                  x
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
              <hr />
            </div>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>

      </div>
      <div className="cart-promocode">
        <div>
          <p>
            If you have promo code, Enter it here

          </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
