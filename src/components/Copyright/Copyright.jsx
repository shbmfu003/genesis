import React from "react";
import "./Copyright.scss";

const Copyright = () => {
	return (
		<ul>
			<small className='copyright'>
				Copyright &copy; {new Date().getFullYear()} INFOLOGISEC. All Rights Reserved.
			</small>
		</ul>
	);
};

export default Copyright;
