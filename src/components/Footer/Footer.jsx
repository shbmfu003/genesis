import React from "react";
import "./Footer.scss";
// footer components
import SocialMediaIcons from "../SocialMediaIcons";
import Copyright from "../Copyright";
import FinePrint from "../FinePrint";

// TODO: Make the Footer a container with children prop
const Footer = () => {
	return (
		<footer role='contentinfo' className='main-footer sticky-bottom'>
			<hr />
			<section className='bottom-footer'>
				<Copyright />
				<FinePrint />
				<SocialMediaIcons />
			</section>
			<hr />
		</footer>
	);
};

export default Footer;