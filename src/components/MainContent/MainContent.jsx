import React from "react";
import PropTypes from "prop-types";
import "./MainContent.scss";

const MainContent = (props) => {
	const { children } = props;
	return <main className='main-content'>{children}</main>;
};

export default MainContent;

MainContent.propTypes = {
	children: PropTypes.node.isRequired,
};
