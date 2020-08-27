import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = (props) => {
	const { children } = props;
	return <header role='banner'>{children}</header>;
};

export default Header;

Header.propTypes = {
	children: PropTypes.node.isRequired,
};
