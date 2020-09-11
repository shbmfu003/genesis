import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Sitemap.scss";

const FooterLinks = [
	{
		name: "Sitemap",
		url: " /sitemap",
	},
	{
		name: "Privacy Policy",
		url: " /privacy-policy",
	},
	{
		name: "Terms of Use",
		url: " /terms-of-use",
	},
	{
		name: "Careers",
		url: " /careers",
	},
];

const Sitemap = (props) => {
	const { classList } = props;
	return (
		<ul className={`footer-sitemap ${classList}`}>
			{FooterLinks.map((link) => {
				return (
					<li key={link.url}>
						<Link to={link.url}>{link.name}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Sitemap;

Sitemap.propTypes = {
	classList: PropTypes.string,
};

Sitemap.defaultProps = {
	classList: "",
};
