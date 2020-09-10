import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
	const { children } = props;
	return (
		<>
			<Header classList='main-header'>
				<NavBar />
			</Header>
			<main className='content'>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
