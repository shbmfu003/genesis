import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SocialMedia.scss";

const socialIconsData = [
	{
		name: "Facebook",
		code: "facebook-f",
		type: "fab",
		url: "https://www.facebook.com/infologisec",
	},
	{
		name: "Twitter",
		code: "twitter",
		type: "fab",
		url: "https://www.twitter.com/infologisec",
	},
	{
		name: "Linkedin",
		code: "linkedin-in",
		type: "fab",
		url: "https://www.linkedin.com/infologisec",
	},
];

const SocialMedia = (props) => {
	const { classList } = props;
	const socialIconsListItems = socialIconsData.map((socialIcon) => {
		return (
			<li key={socialIcon.code}>
				<Link
					to={{ pathname: socialIcon.url }}
					target='_blank'
					className={`social social-${socialIcon.name.toLowerCase()}`}>
					<i className={`${socialIcon.type} fa-${socialIcon.code}`} />
				</Link>
			</li>
		);
	});

	return (
		<article className={`footer-socialmedia ${classList}`}>
			<h4>Follow us</h4>
			<ul className='social-icon-wrapper'>{socialIconsListItems}</ul>
		</article>
	);
};

export default SocialMedia;

SocialMedia.propTypes = {
	classList: PropTypes.string.isRequired,
};
