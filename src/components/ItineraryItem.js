import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteStop } from '../actions';
import FormUpdate from './FormUpdate';

const ItineraryItem = ({ id, stopNum, name, address, complete }) => {
	const dispatch = useDispatch();
	const [editing, setEditing] = useState(false);
	const updateComplete = (e) => dispatch(updateStop(id, { complete: e.target.checked }));
	const removeStop = () => dispatch(deleteStop(id));
	const toggleEditing = () => setEditing(!editing);
	return (
		<Container>
			<StopNumber>
				Stop <span>{stopNum}</span>
			</StopNumber>
			<MiddleSection>
				{!editing ? (
					<div>
						<Name>{name}</Name>
						<Address>{address}</Address>
					</div>
				) : (
					<FormUpdate id={id} name={name} address={address} setEditing={setEditing} />
				)}
			</MiddleSection>
			<EndSection>
				<Top>
					<CompleteLabel>
						Complete:{' '}
						<input type="checkbox" value={complete} onChange={updateComplete} />
					</CompleteLabel>
				</Top>
				<Bottom>
					<StyledButton color="#0679b1" onClick={toggleEditing}>
						{editing ? 'Cancel' : 'Edit'}
					</StyledButton>
					<StyledButton color="#c53737" onClick={removeStop}>
						Remove
					</StyledButton>
				</Bottom>
			</EndSection>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	border-radius: 5px;
	border: 1px solid #eee;
	width: 90%;
	max-width: 50rem;
	margin-bottom: 0.5rem;
	overflow: hidden;
`;
const StopNumber = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 5rem;
	color: white;
	background: #0679b1;
	border-radius: 5px 0 0 5px;
	font-size: 0.8rem;
	padding-top: 0.2rem;
	span {
		font-size: 2rem;
	}
	margin-right: 0.5rem;
`;
const MiddleSection = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;
const Name = styled.div`
	font-size: 1.25rem;
	font-weight: bold;
`;
const Address = styled.div`
	font-size: 0.9rem;
`;
const EndSection = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem;
`;
const Top = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
`;
const Bottom = styled.div``;
const CompleteLabel = styled.label`
	font-size: 0.9rem;
`;
const StyledButton = styled.button`
	color: ${(props) => props.color};
	border: 1px solid ${(props) => props.color};
	border-radius: 5px;
	padding: 0.2rem 1rem;
	&:hover {
		color: #fff;
		background-color: ${(props) => props.color};
	}
	&:not(:last-child) {
		margin-right: 0.25rem;
	}
	outline: 0;
	cursor: pointer;
`;

export default ItineraryItem;
