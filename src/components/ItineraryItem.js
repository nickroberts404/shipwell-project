import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
		<div>
			<div>
				<div>Stop {stopNum}</div>
				{!editing ? (
					<div>
						<div>{name}</div>
						<div>{address}</div>
					</div>
				) : (
					<Form
						initialName={name}
						initialAddress={address}
						onSubmit={updateNameAddress}
					/>
				)}
				<div>
					<label>
						Complete:{' '}
						<input type="checkbox" value={complete} onChange={updateComplete} />
					</label>
				</div>
			</div>
			<div>
				<button onClick={toggleEditing}>Edit</button>
				<button onClick={removeStop}>Remove</button>
			</div>
		</div>
	);
};

export default ItineraryItem;
