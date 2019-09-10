import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../styleVariables';
import FormField from './FormField';
import axios from 'axios';

const validateName = (name) => (name.trim() === '' ? 'Please include a name for your stop.' : '');
const validateAddress = (address) => {
	if (address.trim() === '') return 'Please include an address for your stop.';
	else if (address.trim().length < 3) return 'Address must be at least 3 characters long.';
	return '';
};

// Queries Shipwell API for valid address. If successful, return the formatted address, otherwise throws an error.
const getValidAddress = async (address) => {
	const res = await axios.post('https://dev-api.shipwell.com/v2/locations/addresses/validate/', {
		formatted_address: address,
	});
	return res.data.geocoded_address.formatted_address;
};

// If there are any truthy values (strings) in the error object, return true
const hasErrors = (errors) => {
	const values = Object.values(errors);
	return values.some((e) => !!e);
};

const Form = ({
	initialName = '',
	initialAddress = '',
	submitButtonText = 'Add Stop',
	onSubmit,
}) => {
	const [name, setName] = useState(initialName);
	const [address, setAddress] = useState(initialAddress);
	const [errors, setErrors] = useState({ name: '', address: '' });
	const [showErrors, setShowErrors] = useState(false);

	useEffect(() => {
		setErrors({
			name: validateName(name),
			address: validateAddress(address),
		});
	}, [name, address]);

	const submitForm = async (e) => {
		e.preventDefault(); // Do not refresh page
		setShowErrors(true); // After a form is dirty, display errors
		if (hasErrors(errors)) return false;
		try {
			const validAddress = await getValidAddress(address);
			onSubmit(name, validAddress);
			setName('');
			setAddress('');
			setShowErrors(false);
		} catch (err) {
			setErrors({ ...errors, address: 'Please enter a valid address.' });
			return false;
		}
	};
	return (
		<StyledForm onSubmit={submitForm}>
			<FormField
				value={name}
				update={setName}
				placeholder="Shipwell"
				error={showErrors && errors.name}
				label={'Name'}
			/>
			<FormField
				value={address}
				update={setAddress}
				placeholder="42 Wallaby Way, Sydney"
				error={showErrors && errors.address}
				label={'Address'}
			/>
			<SubmitButton type="submit">{submitButtonText}</SubmitButton>
		</StyledForm>
	);
};
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const SubmitButton = styled.button`
	border: 1px solid ${primaryColor};
	border-radius: 5px;
	align-self: flex-end;
	cursor: pointer;
	padding: 0.5rem 1rem;
	margin-top: 0.25rem;
	outline: none;
	color: #fff;
	background: ${primaryColor};
	&:hover {
		background: #fff;
		color: ${primaryColor};
	}
`;

export default Form;
