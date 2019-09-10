import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addStop } from '../actions';
import Form from './StopForm';

const CreateStopForm = () => {
	const dispatch = useDispatch();
	const onSubmit = (name, address) => dispatch(addStop(name, address));
	return (
		<Container>
			<Form onSubmit={onSubmit} />
		</Container>
	);
};

const Container = styled.div`
	width: 80%;
	max-width: 300px;
	margin-bottom: 1.5rem;
`;

export default CreateStopForm;
