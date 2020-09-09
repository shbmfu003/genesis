import React from "react";
import BrandLogo from "./BrandLogo";
import MenuBar from "./MenuBar";
import Collapse from "./Collapse";
import "./NavBar.scss";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-fluid'>
				<BrandLogo classList='navbar-brand' />
				<MenuBar />
				<Collapse />
			</div>
		</nav>
	);
};

export default Navbar;
