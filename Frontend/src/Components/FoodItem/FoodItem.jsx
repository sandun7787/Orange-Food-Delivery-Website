import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/Context';

const FoodItem = ({ id, name = "Food Item", price = 0, description = "No description available", image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItem?.[id] || 0; // Default to 0 if cartItem[id] is undefined.

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img 
          src={image || assets.default_food_image} 
          alt={`${name} Image`} 
          className="food-item-image" 
        />
        {itemCount === 0 ? (
          <img 
            className="add" 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white} 
            alt="Add to Cart" 
          />
        ) : (
          <div className="food-item-counter">
            <img 
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red} 
              alt="Remove" 
            />
            <p>{itemCount}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add" 
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img 
            src={assets.rating_starts} 
            alt="Rating Stars" 
            className="food-item-rating" 
          />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
