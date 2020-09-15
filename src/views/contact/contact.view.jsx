import React from "react";
import "./contact.view.scss";
import ContactImage from "../../images/opened.svg";
import ContactForm from "../../components/ContactForm";

const ContactView = () => {
	return (
		<section className='contact contact-view container'>
			<div className='row equal gx-0'>
				<h1>Get in touch with us.</h1>
				<article className='contact-image col-md-6 col-sm-12'>
					<img src={ContactImage} alt='...' />
				</article>

				<article className='contact-form col-md-6 col-sm-12'>
					<ContactForm />
				</article>
			</div>
		</section>
	);
};

export default ContactView;
