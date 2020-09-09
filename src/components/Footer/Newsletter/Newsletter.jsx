/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import "./Newsletter.scss";

const Newsletter = (props) => {
	const { classList } = props;
	return (
		<article className={`form-newsletter ${classList}`}>
			<h4>Join the newsletter</h4>
			<form className='newsletter container'>
				<input type='email' className='newsletter-email' placeholder='Enter your email' />
				<button type='submit' className='newsletter-submit'>
					Sign up
				</button>
			</form>
		</article>
	);
};

export default Newsletter;

Newsletter.propTypes = {
	classList: PropTypes.string.isRequired,
};
