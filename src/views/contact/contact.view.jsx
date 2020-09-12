import React from "react";
import "./contact.view.scss";

const ContactDetails = [
	{
		id: "name",
		type: "text",
		placeholder: "Name",
	},
	{
		id: "phone",
		type: "text",
		placeholder: "Phone number",
	},
	{
		id: "email",
		type: "email",
		placeholder: "Email address",
	},
	{
		id: "subject",
		type: "text",
		placeholder: "Subject",
	},
];

const ContactView = () => {
	const contactFormInput = ContactDetails.map((detail) => {
		return (
			<input
				key={detail.id}
				className='form-control row mb-3'
				type={detail.type}
				name={`input${detail.id}`}
				id={detail.id}
				placeholder={detail.placeholder}
				required
			/>
		);
	});

	return (
		<section className='contact contact-view container'>
			<div className='row equal gx-0'>
				<h1>Get in touch</h1>
				<section className='contact-map col'>
					<h1>Map Here</h1>
				</section>

				<section className='contact-form col'>
					<form className='form-wrapper row'>
						<div className='col'>{contactFormInput}</div>
						<div className='col pb-3'>
							<textarea name='message' className='form-control' id='message' placeholder='Message...' />
						</div>
						<div className='container'>
							<button type='submit' className='btn btn-info'>
								Message
							</button>
						</div>
					</form>
				</section>
			</div>
		</section>
	);
};

export default ContactView;
