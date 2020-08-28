import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo";
import MenuBar from "../MenuBar";
import "./NavBar.scss";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container'>
				<BrandLogo />
				<MenuBar />
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' to='/home'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/home'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/home'>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/home'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
