import React from 'react';
import styled from 'styled-components';
import { dangerColor } from '../styleVariables';

const FormField = ({ value, placeholder, update, error, label }) => {
	const onChange = (e) => update(e.target.value);
	return (
		<Container>
			<FieldLabel>
				<LabelText>{label}</LabelText>
				<input value={value} placeholder={placeholder} onChange={onChange} type="text" />
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
const LabelText = styled.div`
	font-size: 0.8rem;
	font-weight: bold;
`;
const Error = styled.div`
	height: 1rem;
	align-self: flex-end;
	color: ${dangerColor};
	font-size: 0.8rem;
`;

export default FormField;
