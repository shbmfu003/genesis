/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";
import FormInput from "../FormInput";
import contactInputFields from "../../api/contactInputFields.json";

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const contactFormInput = contactInputFields.map((detail) => {
		return <FormInput {...detail} register={register} errors={errors} key={detail.id} />;
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className='form-wrapper row' onSubmit={handleSubmit(onSubmit)}>
			<div className='col'>{contactFormInput}</div>
			<div className='col pb-3'>
				<textarea
					name='message'
					className='form-control'
					id='message'
					placeholder='Message...'
					ref={register({ required: true })}
				/>
			</div>
			<div className='container-fluid'>
				<button type='submit' className='btn btn-warning'>
					Message
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
