import React from "react";
import { Link } from "react-router-dom";
import socialIconsData from "../../api/socialIconsData.json";

const SocialIconList = () => {
	return socialIconsData.map((socialIcon) => {
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
};

export default SocialIconList;
