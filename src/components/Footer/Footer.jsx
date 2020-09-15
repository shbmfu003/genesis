import React from "react";
import "./Footer.scss";
import FooterBar from "./FooterBar";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

const Footer = () => {
	return (
		<footer role='contentinfo' className='main-footer footer'>
			<section className='footer-top container-lg row'>
				<Newsletter classList='col-sm-12 col-md-6' />
				<FooterBar classList='col-sm-12 col-md-6' />
			</section>
			<hr />
			<section className='footer-bottom container-lg row'>
				<Copyright classList='col-sm-12' />
			</section>
		</footer>
	);
};

export default Footer;
