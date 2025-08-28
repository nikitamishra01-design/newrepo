
// src/pages/Premium.jsx
import React from "react";
import { data } from "../data/need.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Premium() {
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  };

  // ✅ Simple Slider settings

  
  const settings = {
  dots: true,           // ✅ neeche chhote dots (pagination) dikhte hain
  infinite: true,       // ✅ last slide ke baad wapas first slide par aa jata hai (loop)
  centerMode: true,     // ✅ current active slide ko center me dikhata hai
  centerPadding: "20px",// ✅ active slide ke left-right me thoda gap rakhta hai
  slidesToShow: 3,      // ✅ ek time me 3 slides dikhengi (desktop pe)
  speed: 500,           // ✅ slide change hone ka speed (milliseconds)

  // ✅ Responsive breakpoints
  responsive: [
    {
      breakpoint: 1024, // jab screen ≤ 1024px ho (tablet / small laptop)
      settings: {
        slidesToShow: 2,       // ek time me 2 slides dikhengi
        centerPadding: "20px"  // left-right padding thoda rakhega
      }
    },
    {
      breakpoint: 600,  // jab screen ≤ 600px ho (mobile)
      settings: {
        slidesToShow: 1,       // ek time me sirf 1 slide center me hogi
        centerPadding: "40px"  // left-right gap zyada rakhega, taaki thoda next slide dikh sake
      }
    }
  ]
};



  return (
    <div className="products">
      <h2>Premium Products</h2>

      <Slider {...settings}>
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <p>{item.desc}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Premium;
