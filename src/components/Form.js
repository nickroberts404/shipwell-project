import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStop } from '../actions';
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

const Form = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
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
		dispatch(addStop(name, validAddress));
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
			<button type="submit">Add Stop</button>
		</form>
	);
};

export default Form;
