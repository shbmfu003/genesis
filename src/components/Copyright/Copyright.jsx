import React from "react";
import "./Copyright.scss";

const Copyright = () => {
	return (
		<small className='copyright'>
			Copyright &copy; {new Date().getFullYear()} INFOLOGISEC. All Rights Reserved.
		</small>
	);
};

export default Copyright;
