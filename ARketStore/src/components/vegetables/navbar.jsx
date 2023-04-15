
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
// import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav className="product_nav">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          <MdArrowBack/>
        </span>
        <div className="my_cart" onClick={() => setShow(false)}>
          <span>
          <FaShoppingCart/>
          </span>
          <span className="size_cart">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;