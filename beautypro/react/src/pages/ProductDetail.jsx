
// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();

    const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1; // Increase qty if already in cart
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Optional: navigate to cart page
    // navigate('/cart');
    

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3>₹{product.price}</h3>
        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
