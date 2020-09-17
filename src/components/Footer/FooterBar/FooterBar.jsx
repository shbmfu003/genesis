import React from "react";
import PropTypes from "prop-types";
import "./FooterBar.scss";
import FooterBarLinks from "../FooterBarLinks/FooterBarLinks";

const FooterBar = (props) => {
	const { classList } = props;

	return (
		<article className={`quick-links ${classList}`}>
			<FooterBarLinks />
		</article>
	);
};

export default FooterBar;

FooterBar.propTypes = {
	classList: PropTypes.string.isRequired,
};
