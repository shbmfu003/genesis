/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./contact.view.scss";
import ContactForm from "../../components/ContactForm";
import SocialMedia from "../../components/SocialMedia";
import ContactDetails from "../../components/ContactDetails";

const ContactView = () => {
	return (
		<section className='contact contact-view '>
			<div className='hero-image'>
				<div className='bg-image' />
				<div className='bg-image-text'>
					<p>Got any questions?</p>
					<h1>Get in touch with us.</h1>
					<p>
						We&apos;re here to help and answer any question you might have. We are looking forward to hearing
						from you
						<span role='img' aria-label='smiling face with open mouth'>
							&#128515;
						</span>
						.
					</p>
				</div>
			</div>
			<div className='row equal container mx-auto'>
				<article className='contact-form col-md-7 col-sm-12'>
					<ContactForm />
				</article>

				<article className='contact-image col-md-5 col-sm-12'>
					<ContactDetails />
					<SocialMedia classList='row' />
				</article>
			</div>
		</section>
	);
};

export default ContactView;
