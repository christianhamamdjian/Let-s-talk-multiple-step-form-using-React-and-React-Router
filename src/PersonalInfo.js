import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';
import './App.css';
import validator from 'validator';

class PersonalInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTouched: {
				fullName: false,
				phone: false,
				emailAddress: false,
				emailAddress2: false,
				address: false,
				city: false,
				country: false
			},
			fullName: props.fullName || '',
			phone: props.phone || '',
			emailAddress: props.emailAddress || '',
			emailAddress2: props.emailAddress2 || '',
			address: props.address || '',
			city: props.city || '',
			state: props.state || '',
			country: props.country || '',
			zip: props.zip || '',
			hearabout: props.hearabout || ''
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		const myInfo = {
			fullName: this.state.fullName,
			phone: this.state.phone,
			emailAddress: this.state.emailAddress,
			emailAddress2: this.state.emailAddress2,
			address: this.state.emailAddress2,
			city: this.state.city,
			state: this.state.state,
			country: this.state.country,
			zip: this.state.zip,
			hearabout: this.state.hearabout
		};
		console.log(myInfo);
		this.props.infoList(myInfo);
		this.props.history.push('/skills-and-location');
	};
	handleFocus = e => {
		const field = e.target.name;
		this.setState(prevState => ({
			isTouched: {
				...prevState.isTouched,
				[field]: true
			}
		}));
	};
	isSubmitDisabled = errors => {
		return Object.values(errors).some(errMsg => {
			return errMsg;
		});
	};

	validate = (
		fullName,
		phone,
		emailAddress,
		emailAddress2,
		address,
		city,
		country
	) => {
		console.log('phone', phone);
		console.log(
			validator.isMobilePhone(phone, ['fi-FI'], { strictMode: true })
		);
		const errors = {
			fullName: /^[A-Za-z]{3,20}\s[A-Za-z]{3,20}$/.test(fullName)
				? ''
				: 'Example: First name  Last name',
			phone: validator.isMobilePhone(phone, ['fi-FI'], { strictMode: false })
				? ''
				: 'Example: 358 40 6542371',
			emailAddress: validator.isEmail(emailAddress)
				? ''
				: 'Example: me@mail.com',
			emailAddress2:
				this.state.emailAddress2 === this.state.emailAddress
					? ''
					: 'The email addresses do not match',
			address: /\w{3,}/.test(address) ? '' : 'Invalid address',
			city: /\w{3,}/.test(city) ? '' : 'Invalid city',
			country: /\w{3,}/.test(country) ? '' : 'Invalid country'
		};
		return errors;
	};
	render() {
		const {
			fullName,
			phone,
			emailAddress,
			emailAddress2,
			address,
			city,
			country
		} = this.state;
		const errors = this.validate(
			fullName,
			phone,
			emailAddress,
			emailAddress2,
			address,
			city,
			country
		);
		return (
			<div className="personal-info">
				<form className="my-form" onSubmit={this.handleSubmit}>
					<h3>1. Personal information</h3>
					<hr />
					<div className="input-three-quarters">
						<input
							className="fields name"
							type="text"
							id="full-name"
							name="fullName"
							placeholder="Full name *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ fullName: e.target.value })}
							value={this.state.fullName}
						/>
						<div
							className={
								this.state.isTouched.fullName === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-name"
						>
							{errors.fullName}
						</div>
					</div>
					<div className="input-quarter phone">
						<input
							className="fields phone"
							type="text"
							id="phone"
							name="phone"
							placeholder="Phone *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ phone: e.target.value })}
							value={this.state.phone}
						/>
						<div
							className={
								this.state.isTouched.phone === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-phone"
						>
							{errors.phone}
						</div>
					</div>
					<div className="input-three-quarters">
						<input
							className="fields email"
							type="text"
							id="email1"
							name="emailAddress"
							placeholder="Email *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ emailAddress: e.target.value })}
							value={this.state.emailAddress}
						/>
						<div
							className={
								this.state.isTouched.emailAddress === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-email1"
						>
							{errors.emailAddress}
						</div>
					</div>
					<div className="input-three-quarters">
						<input
							className="fields email-bis"
							type="text"
							id="email2"
							name="emailAddress2"
							placeholder="Re-enter email *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ emailAddress2: e.target.value })}
							value={this.state.emailAddress2}
						/>
						<div
							className={
								this.state.isTouched.emailAddress2 === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-email2"
						>
							{errors.emailAddress2}
						</div>
					</div>
					<div className="input-full">
						<textarea
							className="fields notes address"
							id="address"
							name="address"
							placeholder="Address *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ address: e.target.value })}
							value={this.state.address}
						/>
						<div
							className={
								this.state.isTouched.address === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-address"
						>
							{errors.address}
						</div>
					</div>
					<div className="input-quarter">
						<input
							className="fields city"
							type="text"
							id="city"
							name="city"
							placeholder="City *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ city: e.target.value })}
							value={this.state.city}
						/>
						<div
							className={
								this.state.isTouched.city === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-city"
						>
							{errors.city}
						</div>
					</div>
					<div className="input-quarter">
						<input
							className="fields state"
							type="text"
							name="state"
							placeholder="State"
							onChange={e => this.setState({ state: e.target.value })}
							value={this.state.state}
						/>
						<div className="err-msg-invisible">Invisible content</div>
					</div>
					<div className="input-quarter">
						<input
							className="fields country"
							type="text"
							id="country"
							name="country"
							placeholder="Country/Region *"
							onBlur={this.handleFocus}
							onChange={e => this.setState({ country: e.target.value })}
							value={this.state.country}
						/>
						<div
							className={
								this.state.isTouched.country === true
									? 'err-msg'
									: 'err-msg-invisible'
							}
							id="message-country"
						>
							{errors.country}
						</div>
					</div>
					<div className="input-quarter">
						<input
							className="fields zip"
							type="text"
							name="zip-postal-code"
							placeholder="Zip/Postal code"
							onChange={e => this.setState({ zip: e.target.value })}
							value={this.state.zip}
						/>
						<div className="err-msg-invisible">Invisible content</div>
					</div>
					<div className="input-full">
						<input
							className="fields"
							type="text"
							name="how-did-you-hear-about-us"
							placeholder="How did you hear about us"
							onChange={e => this.setState({ hearabout: e.target.value })}
							value={this.state.hearabout}
						/>
						<div className="err-msg-invisible">Invisible content</div>
					</div>

					<div className="submit">
						<button
							className="submit-button"
							type="submit"
							title="submit"
							value="submit"
							disabled={this.isSubmitDisabled(errors)}
						>
							Go to Skills and location page
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default PersonalInfo;
