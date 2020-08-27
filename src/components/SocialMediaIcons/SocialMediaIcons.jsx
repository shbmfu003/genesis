import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconsData from "./icons.json";
import "./SocialMediaIcons.scss";

const SocialMediaIcons = () => {
	const [socialIconsData] = useState(iconsData);
	const socialIconsListItems = socialIconsData.map((socialIcon) => {
		return (
			<li key={socialIcon.code}>
				<Link to={socialIcon.url} className={`social social-${socialIcon.name.toLowerCase()}`}>
					<i className={`${socialIcon.type} fa-${socialIcon.code}`} />
				</Link>
			</li>
		);
	});

	return <ul className='social-icon-wrapper'>{socialIconsListItems}</ul>;
};

export default SocialMediaIcons;
