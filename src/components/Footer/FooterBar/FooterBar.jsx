import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FooterBar.scss";

const Links = [
	{
		title: "Quick links",
		links: [
			{
				name: "Our Story",
				url: "/ourstory",
			},
			{
				name: "Our People",
				url: "/ourpeople",
			},
			{
				name: "Our Products",
				url: "/ourproducts",
			},
		],
	},
	{
		title: "Other links",
		links: [
			{
				name: "Privacy Policy",
				url: "/privacy",
			},
			{
				name: "Terms & Condition",
				url: "/terms",
			},
			{
				name: "Careers",
				url: "/careers",
			},
		],
	},
];

const FooterBar = (props) => {
	const { classList } = props;

	const LinkBar = Links.map((link) => {
		return (
			<div key={link.title} className='links'>
				<h4>
					<span>{link.title}</span>
				</h4>
				<ul>
					{link.links.map((item) => {
						return (
							<li key={item.name}>
								<Link to={item.url}>{item.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return <article className={`quick-links ${classList}`}>{LinkBar}</article>;
};

export default FooterBar;

FooterBar.propTypes = {
	classList: PropTypes.string.isRequired,
};
