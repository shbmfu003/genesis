import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BrandLogo.scss";

const BrandLogo = (props) => {
	const { classList } = props;
	return (
		<Link to='/' className={`${classList}`}>
			<h1>
				<span>info</span>
				<span>logi</span>
				<span>sec</span>
			</h1>
		</Link>
	);
};

export default BrandLogo;

BrandLogo.propTypes = {
	classList: PropTypes.string.isRequired,
};
