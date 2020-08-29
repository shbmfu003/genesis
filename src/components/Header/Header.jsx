import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = (props) => {
	const [onTop, setOnTop] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY < 1;
			if (scrollCheck !== onTop) {
				setOnTop(scrollCheck);
			}
		});
	});

	const { children } = props;

	return (
		<header role='banner' className={`${onTop ? "light" : "dark"}-theme fixed`}>
			{children}
		</header>
	);
};

export default Header;

Header.propTypes = {
	children: PropTypes.node.isRequired,
};
