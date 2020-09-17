import React from "react";
import { Link } from "react-router-dom";
import contactInformation from "../../api/contactDetails.json";

const ContactInformationList = () => {
	return contactInformation.map((contactItem) => {
		return (
			<li key={contactItem.detail}>
				<Link to={`${contactItem.type}:${contactItem.detail}`}>
					<i className={`fa fa-${contactItem.icon}`}> </i>
					<span>{contactItem.detail}</span>
				</Link>
			</li>
		);
	});
};

export default ContactInformationList;
