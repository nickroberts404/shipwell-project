import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateStop } from '../actions';
import Form from '../../form/components/StopForm';

const UpdateStopForm = ({ id, name, address, setEditing }) => {
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
				clearOnSubmit={false}
			/>
		</Container>
	);
};

UpdateStopForm.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	setEditing: PropTypes.func.isRequired,
};
const Container = styled.div`
	margin: 0.5rem;
	width: 100%;
	max-width: 20rem;
`;

export default UpdateStopForm;
