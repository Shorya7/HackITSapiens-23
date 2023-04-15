import React, { useState } from "react";
import list from "./data";
import Cards from "./card";
import '../../css/Product.css'
// import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  
  return (
    <section>
    <h1>Featured Products</h1>

    <div className="divresponsive">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      </div>
   
    </section>
  );
};

export default Amazon;