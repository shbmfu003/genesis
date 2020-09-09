import React from "react";
import { Link } from "react-router-dom";

const NavItems = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About",
		url: "/about",
	},
	{
		name: "Features",
		url: "/features",
	},
	{
		name: "Contact",
		url: "/contact",
	},
];

const Collapse = () => {
	const collapseItems = NavItems.map((item) => {
		return (
			<li className='nav-item'>
				<Link className='nav-link' to={item.url}>
					{item.name}
				</Link>
			</li>
		);
	});

	return (
		<div className='collapse navbar-collapse'>
			<ul className='navbar-nav mb-2 mb-lg-0'>{collapseItems}</ul>
		</div>
	);
};

export default Collapse;
