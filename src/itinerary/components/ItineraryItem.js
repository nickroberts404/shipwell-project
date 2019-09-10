import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateStop, deleteStop } from '../actions';
import { primaryColor, dangerColor, completeColor } from '../../styleVariables';
import UpdateStopForm from './UpdateStopForm';

const ItineraryItem = ({ id, stopNum, name, address, complete }) => {
	const dispatch = useDispatch();
	const [editing, setEditing] = useState(false);
	const updateComplete = (e) => dispatch(updateStop(id, { complete: e.target.checked }));
	const removeStop = () => dispatch(deleteStop(id));
	const toggleEditing = () => setEditing(!editing);
	return (
		<Container>
			<StopNumber complete={complete}>
				Stop <span>{stopNum}</span>
			</StopNumber>
			<MiddleSection>
				{editing ? (
					<UpdateStopForm id={id} name={name} address={address} setEditing={setEditing} />
				) : (
					<div>
						<Name>{name}</Name>
						<Address>{address}</Address>
					</div>
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
					<StyledButton color={primaryColor} onClick={toggleEditing}>
						{editing ? 'Cancel' : 'Edit'}
					</StyledButton>
					<StyledButton color={dangerColor} onClick={removeStop}>
						Remove
					</StyledButton>
				</Bottom>
			</EndSection>
		</Container>
	);
};

ItineraryItem.propTypes = {
	id: PropTypes.string.isRequired,
	stopNum: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	complete: PropTypes.bool.isRequired,
};

const Container = styled.div`
	display: flex;
	width: 90%;
	max-width: 50rem;
	margin-bottom: 0.5rem;
	border-radius: 5px;
	border: 1px solid #eee;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;
const StopNumber = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0.2rem 2rem;
	background: ${(props) => (props.complete ? completeColor : primaryColor)};
	font-size: 0.8rem;
	color: white;
	border-radius: 5px 0 0 5px;
	span {
		font-size: 2rem;
	}
	@media (max-width: 500px) {
		border-radius: 5px 5px 0 0;
	}
`;
const MiddleSection = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	padding: 0.5rem;
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
const Bottom = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const CompleteLabel = styled.label`
	padding: 0.5rem;
	font-size: 0.9rem;
`;
const StyledButton = styled.button`
	padding: 0.2rem 1rem;
	color: ${(props) => props.color};
	border: 1px solid ${(props) => props.color};
	border-radius: 5px;
	outline: none;
	cursor: pointer;
	&:hover {
		color: #fff;
		background-color: ${(props) => props.color};
	}
	&:not(:last-child) {
		margin-right: 0.25rem;
	}
`;

export default ItineraryItem;
