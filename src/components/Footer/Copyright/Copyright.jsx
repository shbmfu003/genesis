import React from "react";
import PropTypes from "prop-types";
import "./Copyright.scss";

const Copyright = (props) => {
	const { classList } = props;
	return (
		<ul className={`footer-copyright ${classList}`}>
			<small className=''>
				Copyright &copy; {new Date().getFullYear()} INFOLOGISEC. All Rights Reserved.
			</small>
		</ul>
	);
};

export default Copyright;

Copyright.propTypes = {
	classList: PropTypes.string.isRequired,
};
