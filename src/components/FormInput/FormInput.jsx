/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import "./FormInput.scss";

const FormInput = ({ id, type, placeholder, register, errors }) => {
	return (
		<div className='form-input row mb-1'>
			<div className='container'>
				<input
					className='form-control my-0'
					name={id}
					type={type}
					id={id}
					placeholder={placeholder}
					ref={register({ required: true })}
				/>
				<small className='error error-msg'>
					{errors[`${id}`] && `Your ${placeholder.toLowerCase()} is required.`}
				</small>
			</div>
		</div>
	);
};

export default FormInput;

FormInput.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};
