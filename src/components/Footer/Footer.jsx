import React from "react";
import "./Footer.scss";
// footer components
import Copyright from "./Copyright";
import Sitemap from "./Sitemap";
import BrandLogo from "../NavBar/BrandLogo";
import Newsletter from "./Newsletter";
import ContactDetails from "./ContactDetails";
import SocialMedia from "./SocialMedia";

const Footer = () => {
	return (
		<footer role='contentinfo' className='main-footer footer'>
			<section className='footer-top container row'>
				<Newsletter classList='col-sm-12 col-md-4 text-muted' />
				<SocialMedia classList='col-sm-12 col-md-4 text-muted' />
				<ContactDetails classList='col-sm-12 col-md-4 text-muted' />
			</section>
			<hr />
			<section className='footer-bottom container row'>
				<Copyright classList='col-sm-12 col-md-4 text-muted' />
				<article className='footer-logo col-sm-12 col-md-4'>
					<BrandLogo classList='navbar-brand small' />
				</article>
				<article className='col-sm-12 col-md-4 text-muted'>
					<Sitemap />
				</article>
			</section>
		</footer>
	);
};

export default Footer;
