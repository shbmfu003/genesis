import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo";
import "./NavBar.scss";

const Navbar = () => {
	return (
		<nav role='navigation' className='navbar header-bottom'>
			<BrandLogo />
			<ul className='navbar-collapse'>
				<li>
					<Link to='/' className='nav-link inactive'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' className='nav-link inactive'>
						About
					</Link>
				</li>
				<li>
					<Link to='/services' className='nav-link inactive'>
						Services
					</Link>
				</li>
				<li>
					<Link to='/contact' className='nav-link inactive'>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
