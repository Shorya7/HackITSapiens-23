import '../../css/Footer.css'
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin,  AiFillGithub} from "react-icons/ai";
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>

<footer class="footer-distributed">

			<div class="footer-left">

				<h3>ARket<span>Shop</span></h3>

				<p class="footer-links">
					<NavLink to = "/">Home</NavLink>
					<NavLink to = "/Product">Product</NavLink>
					<NavLink to = "/Contact">Contact</NavLink>
					

				</p>

				<p class="footer-company-name">ARketShop © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Delhi-Meerut Expressway</span> Ghaziabad, UP</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 1234567899</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:shorya8990@gmail.com">info@arketshop.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About this Site</span>
					This site will help you to buy all your required items at reasonable and affordable price.
				</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/" target="_blank"><AiFillFacebook/></a>
					<a href="https://www.twitter.com/" target="_blank"><AiFillTwitterSquare/></a>
					<a href="https://www.linkedin.com/" target="_blank"><AiFillLinkedin/></a>
					<a href="https://www.github.com/" target="_blank"><AiFillGithub/></a>

				</div>

			</div>

		</footer>


    </>
  )
}

export default Footer