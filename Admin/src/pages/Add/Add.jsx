import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

const Add = () => {
  const url = "http://localhost:400"; // Make sure this is correct
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });
  const [isSuccess, setIsSuccess] = useState(false); // Track success state
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle form field changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Form submission handler
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request is sent

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      console.log('Response from server:', response); // Log the response for debugging
      if (response.data.success) {
        setIsSuccess(true); // Product added successfully
        // Reset form data
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Salad',
        });
        setImage(null);
      } else {
        setIsSuccess(false);
        console.error('Error in API response:', response.data.message); // Log error message
      }
    } catch (error) {
      setIsSuccess(false); // If there's an error, set success state to false
      console.error('Error during submission:', error); // Log the error for debugging
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler}>
        {/* Left Column - Image Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input type="file" id="image" onChange={handleImageChange} required />
        </div>

        {/* Right Column - Product Details */}
        <div className="add-details">
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type Here"
              required
            />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write content here"
              required
            ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select onChange={onChangeHandler} name="category" required>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="$20"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>
          <button type="submit" className="add-btn" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>

      {/* Success/Error Messages */}
      {isSuccess && <p className="success-msg">Product added successfully!</p>}
      {!isSuccess && !isLoading && <p className="error-msg">Failed to add product.</p>}
    </div>
  );
};

export default Add;
