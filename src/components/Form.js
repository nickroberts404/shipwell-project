import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStop } from '../actions';
import FormField from './FormField';
import axios from 'axios';

const validateName = (name) => (name.trim() === '' ? 'Please include a name for your stop.' : '');
const validateAddress = (address) => {
	if (address.trim() === '') return 'Please include an address for your stop.';
	else if (address.trim().length < 3) return 'Address must be at least 3 characters long.';
	return '';
};

const Form = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [showErrors, setShowErrors] = useState(false);

	const validateForm = () => {
		if (validateName(name) || validateAddress(address)) {
			return false;
		}
		return true;
	};

	const submitForm = async (e) => {
		e.preventDefault();
		// axios
		// 	.post('https://dev-api.shipwell.com/v2/locations/addresses/validate/', {
		// 		formatted_address: '2jkkfkfmk',
		// 	})
		// 	.then((res) => console.log(res.data))
		// 	.catch((err) => console.log(err));
		const isFormValid = validateForm();
		if (!isFormValid) {
			setShowErrors(true);
			return false;
		}
		dispatch(addStop(name, address));
	};
	return (
		<form onSubmit={submitForm}>
			<FormField
				value={name}
				update={setName}
				error={showErrors && validateName(name)}
				label={'Name'}
			/>
			<FormField
				value={address}
				update={setAddress}
				error={showErrors && validateAddress(address)}
				label={'Address'}
			/>
			<button type="submit">Add Stop</button>
		</form>
	);
};

export default Form;
