import React from "react";
import { Link } from "react-router-dom";
import "./BrandLogo.scss";

const BrandLogo = () => {
	return (
		<Link to='/' className='navbar-brand'>
			<h1>
				<span>info</span>
				<span>logi</span>
				<span>sec</span>
			</h1>
		</Link>
	);
};

export default BrandLogo;
