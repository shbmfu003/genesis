/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { HeroLayout } from "../layouts";

const HeroLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<HeroLayout>
					<Component {...props} />
				</HeroLayout>
			)}
		/>
	);
};

export default HeroLayoutRoute;

HeroLayoutRoute.propTypes = {
	component: PropTypes.func.isRequired,
};
