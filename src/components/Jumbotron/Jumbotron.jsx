import React from "react";
import PropTypes from "prop-types";
import "./Jumbotron.scss";

const Jumbotron = (props) => {
	const { classList, title } = props;
	return (
		<div className={`jumbotron ${classList}`}>
			<h1>{title}</h1>
		</div>
	);
};

export default Jumbotron;

Jumbotron.propTypes = {
	classList: PropTypes.string,
	title: PropTypes.string.isRequired,
};

Jumbotron.defaultProps = {
	classList: "primary-bg page-header",
};
