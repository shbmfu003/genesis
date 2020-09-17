import React from "react";
import "./ContactDetails.scss";
import ContactInformationList from "../ContactInformationList";

const ContactDetails = () => {
	return (
		<article className='contact-info row'>
			<ul>
				<ContactInformationList />
			</ul>
		</article>
	);
};

export default ContactDetails;
