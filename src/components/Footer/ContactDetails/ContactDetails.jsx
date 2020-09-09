import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ContactDetails.scss";

const ContactList = [
	{
		title: "Email Us",
		code: "envelope",
		detail: "info@infologisec.com",
		type: "mailto",
	},
	{
		title: "Call Us",
		code: "phone-alt",
		detail: "+27604843666",
		type: "tel",
	},
	{
		title: "Office Location",
		code: "map-marker-alt",
		detail: "www.maps.com/",
		type: "map",
	},
];

const ContactDetails = (props) => {
	const { classList } = props;
	const FooterContact = ContactList.map((contact) => {
		return (
			<li>
				<i className={`fa fa-${contact.code}`} />
				<Link to={{ pathname: `${contact.type}:${contact.detail}` }}>{contact.title}</Link>
			</li>
		);
	});
	return (
		<article className={`footer-contactdetails ${classList}`}>
			<h4>Contact us</h4>
			<address className='footer-address'>
				<ul>{FooterContact}</ul>
			</address>
		</article>
	);
};

export default ContactDetails;

ContactDetails.propTypes = {
	classList: PropTypes.string.isRequired,
};
