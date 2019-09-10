import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateStop, deleteStop } from '../actions';
import Form from './Form';

const FormUpdate = ({ id, name, address, setEditing }) => {
	const dispatch = useDispatch();
	const onSubmit = (name, address) => {
		setEditing(false);
		dispatch(updateStop(id, { name, address }));
	};
	return (
		<Container>
			<Form
				initialName={name}
				initialAddress={address}
				onSubmit={onSubmit}
				submitButtonText="Update Stop"
			/>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	max-width: 20rem;
	margin: 0.5rem;
`;

export default FormUpdate;
