import React, { useState } from 'react';
import './ProductForm.css';
import { RxCrossCircled } from "react-icons/rx";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    organizationName: '',
    mrfRate: '',
    techniciansRate: '',
    distributorsRate: '',
    aboutProduct: '',
    image: null
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle image input and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setFormData(prevState => ({
        ...prevState,
        image: file
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('organizationName', formData.organizationName);
    formDataToSend.append('mrfRate', formData.mrfRate);
    formDataToSend.append('techniciansRate', formData.techniciansRate);
    formDataToSend.append('distributorsRate', formData.distributorsRate);
    formDataToSend.append('aboutProduct', formData.aboutProduct);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.message || 'Failed to add product');
      }
      
      const result = await response.json();
      console.log(result);
      alert('Product added successfully!');
      // Reset form after successful submission
      setFormData({
        productName: '',
        organizationName: '',
        mrfRate: '',
        techniciansRate: '',
        distributorsRate: '',
        aboutProduct: '',
        image: null
      });
      setPreviewImage(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    console.log('Modal closed');
  };

  return (
    <div className="product-form-container">
      <div className="product-form-content">
        <div className="product-form-header">
          <h2>Add/Edit Product</h2>
          <button onClick={handleClose} className="close-button">
            <RxCrossCircled />
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="form-field">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>

          {/* Organization Name */}
          <div className="form-field">
            <label>Organization Name</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>

          {/* MRF Rate */}
          <div className="form-field">
            <label>MRF Rate</label>
            <input
              type="number"
              name="mrfRate"
              value={formData.mrfRate}
              onChange={handleInputChange}
              className="input-field"
              required
              step="0.01"
            />
          </div>

          {/* Technicians Rate */}
          <div className="form-field">
            <label>Technicians Rate</label>
            <input
              type="number"
              name="techniciansRate"
              value={formData.techniciansRate}
              onChange={handleInputChange}
              className="input-field"
              required
              step="0.01"
            />
          </div>

          {/* Distributors Rate */}
          <div className="form-field">
            <label>Distributors Rate</label>
            <input
              type="number"
              name="distributorsRate"
              value={formData.distributorsRate}
              onChange={handleInputChange}
              className="input-field"
              required
              step="0.01"
            />
          </div>

          {/* About Product */}
          <div className="form-field">
            <label>About Product</label>
            <textarea
              name="aboutProduct"
              value={formData.aboutProduct}
              onChange={handleInputChange}
              className="input-field"
              rows="4"
            />
          </div>

          {/* Image Upload */}
          <div className="form-field">
            <label>Upload Image</label>
            <div className="image-upload-container">
              <label className="upload-box">
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="file-input"
                />
                <div className="upload-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V8M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </label>
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="save-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
