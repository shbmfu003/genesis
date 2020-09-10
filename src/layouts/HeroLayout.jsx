import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HeroLayout = (props) => {
	const { children } = props;
	return (
		<>
			<Header classList='hero-header'>
				<NavBar />
				<main className='content'>{children}</main>
				<Footer />
			</Header>
		</>
	);
};

export default HeroLayout;

HeroLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
