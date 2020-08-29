import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
//

const infoImg = require("../../images/svg/undraw_progressive_app_m9ms.svg");

const HomePage = () => {
	return (
		<section className='home-page content'>
			<div className='container'>
				<div className='row'>
					<article className='col-md-6 content-text'>
						<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!0</h6>
						<h1>Information Systems</h1>
						<Link to='#information-systems'>Read More</Link>
					</article>
					<article className='col-md-6 content-img'>
						<img src={infoImg} alt='' />
					</article>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
