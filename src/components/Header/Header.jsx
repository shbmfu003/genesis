import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = (props) => {
	const { classList, children } = props;

	return (
		<header role='banner' className={`${classList}`}>
			{children}
		</header>
	);
};

export default Header;

Header.propTypes = {
	classList: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};
