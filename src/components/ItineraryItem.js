import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateStop, deleteStop } from '../actions';
import Form from './Form';

const ItineraryItem = ({ id, stopNum, name, address, complete }) => {
	const dispatch = useDispatch();
	const [editing, setEditing] = useState(false);
	const updateComplete = (e) => dispatch(updateStop(id, { complete: e.target.checked }));
	const updateNameAddress = (name, address) => {
		setEditing(false);
		dispatch(updateStop(id, { name, address }));
	};
	const removeStop = () => dispatch(deleteStop(id));
	const toggleEditing = () => setEditing(!editing);
	return (
		<Container>
			<Top>
				<StopNumber>
					Stop <span>{stopNum}</span>
				</StopNumber>
				<Middle>
					{!editing ? (
						<Info>
							<StopName>{name}</StopName>
							<StopAddress>{address}</StopAddress>
						</Info>
					) : (
						<Form
							initialName={name}
							initialAddress={address}
							onSubmit={updateNameAddress}
						/>
					)}
				</Middle>
				<div>
					<Complete>
						<label>
							Complete:{' '}
							<input type="checkbox" value={complete} onChange={updateComplete} />
						</label>
					</Complete>
					<Bottom>
						<button onClick={toggleEditing}>Edit</button>
						<button onClick={removeStop}>Remove</button>
					</Bottom>
				</div>
			</Top>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid #eee;
	width: 90%;
	max-width: 50rem;
	margin-bottom: 0.5rem;
	overflow: hidden;
`;
const Top = styled.div`
	display: flex;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: flex-end;
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
const Info = styled.div``;
const StopName = styled.div`
	font-size: 1.25rem;
	font-weight: bold;
`;
const StopAddress = styled.div`
	font-size: 0.9rem;
`;
const Complete = styled.div`
	display: flex;
	flex-grow: 1;
`;
const Middle = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;
export default ItineraryItem;
