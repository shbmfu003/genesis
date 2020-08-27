import React from "react";
import { Link } from "react-router-dom";
import "./FinePrint.scss";

const FinePrint = () => {
	return (
		<ul className='fine-print'>
			<li>
				<Link to='sitemap'>Sitemap</Link>
			</li>
			<li>
				<Link to='privacy-policy'>Privacy Policy</Link>
			</li>
			<li>
				<Link to='terms-of-use'>Terms of Use</Link>
			</li>
		</ul>
	);
};

export default FinePrint;
