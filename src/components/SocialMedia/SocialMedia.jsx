import React from "react";
import PropTypes from "prop-types";
import "./SocialMedia.scss";
import SocialIconList from "../SocialIconList";

const SocialMedia = (props) => {
	const { classList } = props;

	return (
		<article className={`footer-socialmedia ${classList}`}>
			<ul className='social-icon-wrapper'>
				<SocialIconList />
			</ul>
		</article>
	);
};

export default SocialMedia;

SocialMedia.propTypes = {
	classList: PropTypes.string.isRequired,
};
