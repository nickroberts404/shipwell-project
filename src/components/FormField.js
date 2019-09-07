import React from 'react';
import styled from 'styled-components';

const FormField = ({ value, update, error, label }) => {
	const onChange = (e) => update(e.target.value);
	return (
		<Container>
			<FieldLabel>
				<Text>{label}</Text>
				<input value={value} onChange={onChange} type="text" />
			</FieldLabel>
			<Error>{error}</Error>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 20rem;
`;

const FieldLabel = styled.label`
	display: flex;
	flex-direction: column;
`;
const Text = styled.div`
	font-size: 0.8rem;
`;
const Error = styled.div`
	color: red;
	font-size: 0.8rem;
	height: 15px;
	align-self: flex-end;
`;

export default FormField;
