import React,{useState} from "react";
import './Cards.css'
import { BiRupee } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
const Cards = ({ item, handleClick }) => {
  const white= "#fff";
  const { title, author, price, img } = item;
  const [bg, setbg] = useState(white);
  const bgchange = () =>{
 let newbg="#FF0000";
 setbg(newbg);

  }
  const bgback=()=>{
    setbg(white);
  }
  return (
    <>

<div className='cards'>
            <img src={img} alt='' height={280} width={200}/>
            <hr/>
                <h1 className="head_card">{title}</h1>
                <hr/>
                <div className='content'>
                <div className='price'>
                    <span className='p'>Price </span><br/> <BiRupee className="cart_price_icon"/><span className='q'>{price}</span> 
                </div>
                <div className='cart'>
                   <button className="cart_button" onClick={() => handleClick(item)}><HiShoppingCart className="cart_cards"/></button> 
                    <button className="cart_button2" onClick={bgchange} onDoubleClick={bgback}><AiFillHeart style={{color:bg}} className="like_cards"/></button> 
                </div>
            </div>
        </div>

    </>
  );
};

export default Cards;

// id, title, autor, price, img