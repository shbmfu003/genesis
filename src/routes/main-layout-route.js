/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { MainLayout } from "../layouts";

const MainLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			)}
		/>
	);
};

export default MainLayoutRoute;

MainLayoutRoute.propTypes = {
	component: PropTypes.node.isRequired,
};
