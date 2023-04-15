
import {CiDeliveryTruck } from "react-icons/ci";
import {MdSupportAgent } from "react-icons/md";
import {IoWalletOutline } from "react-icons/io5";
import {TbDiscount2} from "react-icons/tb";
const Experties = () => {
  return (
   
    <>
    <div className="all_service" >
        <div className="service">
            <div className="service_icon"> 
     <CiDeliveryTruck/>
            </div>
            <div className="service_description">
<span className="feature">Free Delivery</span> <br/>
<span className="des">Free Shipping on all Orders</span>
            </div>
        </div>


        <div className="service">
            <div className="service_icon"> 
     <MdSupportAgent/>
            </div>
            <div className="service_description">
<span className="feature">Online Support 24/7</span> <br/>
<span className="des">Support Online 24 hours a day</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
     <IoWalletOutline/>
            </div>
            <div className="service_description">
<span className="feature">Money Return</span> <br/>
<span className="des">Back Guarantee under 7 days</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
     <TbDiscount2/>
            </div>
            <div className="service_description">
<span className="feature">Member Discount</span> <br/>
<span className="des">On every order over 499</span>
            </div>
        </div>        
    </div>
    
    </>
  )
}

export default Experties