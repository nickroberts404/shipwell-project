import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormField from './FormField';
import axios from 'axios';

const validateName = (name) => (name.trim() === '' ? 'Please include a name for your stop.' : '');
const validateAddress = (address) => {
	if (address.trim() === '') return 'Please include an address for your stop.';
	else if (address.trim().length < 3) return 'Address must be at least 3 characters long.';
	return '';
};

const getValidAddress = async (address) => {
	try {
		const res = await axios.post(
			'https://dev-api.shipwell.com/v2/locations/addresses/validate/',
			{
				formatted_address: address,
			}
		);
		return res.data.geocoded_address.formatted_address;
	} catch (err) {
		return false;
	}
};

const Form = ({ initialName = '', initialAddress = '', onSubmit }) => {
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

	const validateForm = () => {
		if (errors.name || errors.address) {
			return false;
		}
		return true;
	};

	const submitForm = async (e) => {
		e.preventDefault();
		setShowErrors(true);
		if (!validateForm()) {
			return false;
		}
		const validAddress = await getValidAddress(address);
		if (!validAddress) {
			setErrors({ ...errors, address: 'Please enter a valid address.' });
			return false;
		}
		onSubmit(name, validAddress);
		setName('');
		setAddress('');
		setShowErrors(false);
	};
	return (
		<form onSubmit={submitForm}>
			<FormField
				value={name}
				update={setName}
				error={showErrors && errors.name}
				label={'Name'}
			/>
			<FormField
				value={address}
				update={setAddress}
				error={showErrors && errors.address}
				label={'Address'}
			/>
			<SubmitButton type="submit">Add Stop</SubmitButton>
		</form>
	);
};

const SubmitButton = styled.button`
	border: 1px solid #0679b1;
	border-radius: 5px;
	cursor: pointer;
	padding: 0.5rem;
	outline: none;
	color: #fff;
	background: #0679b1;
	&:hover {
		background: #fff;
		color: #0679b1;
	}
`;

export default Form;
