import Rice from "../../images/rice.png"
import Fortune from "../../images/fortune.jpeg"
import { MdLocalOffer } from "react-icons/md";
const Deals = () => {
  return (
    <>
    <h1 className="deal_head">Trending Deals</h1>
<div className="deals_main">
<div className="deal_1">
  <div className="deal_image"><img src={Rice} alt="" width={230} height={250} /> </div>
  <div className="deal_content">

    <span className="deal_of_the_day"><MdLocalOffer/>  Deal of the Day</span><h2 className="iph">Basmati Rice </h2>
  
  <span className="deal1_price">₹ 125/kg</span>
  
  <p className="deal1_des">Basmati, is a variety of long, slender-grained 
  aromatic rice which is traditionally grown in India, Pakistan, 
  and Nepal. As of 2019, India accounted for 65% of the international trade in basmati rice.</p>

  </div>
</div>

<div className="deal_1">
  <div className="deal_image deal2"><img src={Fortune} alt="" width={230} height={250} /> </div>
  <div className="deal_content">

    <span className="deal_of_the_day"><MdLocalOffer/>  Deal of the Day</span><h2 className="iph">Fortune Oil</h2>
  
  <span className="deal1_price">₹ 125/ltr</span>
  
  <p className="deal1_des">Fortune Cottonlite Cotton Seed Oil has a tocopherol formula that absorbs UV rays to prevent UV-induced skin-free radical damage to the skin.</p>

  </div>
</div>
<div className="deal_3"></div>

</div>

    </>
  )
}

export default Deals