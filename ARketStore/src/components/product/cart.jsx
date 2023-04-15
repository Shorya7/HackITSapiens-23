import React, { useState, useEffect } from "react";
import "./cart.css";
import {BiRupee } from "react-icons/bi";
import { NavLink } from 'react-router-dom'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
    <h1>Cart</h1>
      {cart.map((item) => (

       <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="inc_dec">
          <button className="decrease" onClick={() => handleChange(item, -1)}><span className="state_change">-</span></button>
          <button className="quantity">{item.amount}</button>
            <button className="increase" onClick={() => handleChange(item, 1)}><span className="state_change">+</span></button>

            
          </div>
          <div>
            <span className="cart_price_individual" ><BiRupee/>{item.price}</span>
            <button className="remove" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total_price">
        <span className="cart_price3">Total Price of your Cart</span>
        <span className="cart_price2"> ₹ {price}</span>
      </div>

     
    </article>
  );
};

export default Cart;