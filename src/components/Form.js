import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStop } from '../actions';
import FormField from './FormField';

const Form = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const submitForm = (e) => {
		e.preventDefault();
		dispatch(addStop(name, address));
	};
	return (
		<form onSubmit={submitForm}>
			<FormField value={name} update={setName} label={'Name'} />
			<FormField value={address} update={setAddress} label={'Address'} />
			<button type="submit">Add Stop</button>
		</form>
	);
};

export default Form;
