import React from 'react'
import '../../css/Navbar.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>


<header>
  <div class="container_nav">
    <div class="logo-box">
    <NavLink to = "/">
        <h1>ARketShop</h1>
    </NavLink>
    </div>
    <nav>
    <ul>
    <li><NavLink to = "/" className="nav_">Home</NavLink></li>
     
      <li><NavLink to = "/Product" className="nav_">Fruits</NavLink></li>
      <li><NavLink to = "/Vegetables" className="nav_">Vegetables</NavLink></li>
      <li><NavLink to = "/Contact" className="nav_">Contact Us</NavLink></li>
      <li><NavLink to = "/login" className="nav_ nav_login">Login</NavLink></li>
      {/* <li><NavLink to = "/Like" className="nav_"><AiOutlineHeart/></NavLink></li>
      <li><NavLink to = "/Cart" className="nav_ trolley"><BsCart3/></NavLink></li> */}
   </ul>
  </nav>
  </div>
</header>
</>
  )
}

export default Navbar;







 
          