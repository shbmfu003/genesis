import React from "react";
import { Link } from "react-router-dom";
import "./FooterBarLinks.scss";
import footerLinks from "../../../api/footerLinks.json";

const FooterBarLinks = () => {
	return footerLinks.map((footerItem) => {
		return (
			<div key={footerItem.title} className='footer-links'>
				<h4>
					<span>{footerItem.title}</span>
				</h4>
				<ul>
					{footerItem.links.map((item) => {
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
};

export default FooterBarLinks;
