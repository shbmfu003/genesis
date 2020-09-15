/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import "./Newsletter.scss";

const Newsletter = (props) => {
	const { classList } = props;
	return (
		<article className={`newsletter ${classList}`}>
			<h4>
				<span>Join the newsletter</span>
			</h4>
			<p>Keep up to date with our latest news and services offers.</p>
			<form className='newsletter-form container'>
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
