import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStop, deleteStop } from '../actions';

const ItineraryItem = ({ id, stopNum, name, address, complete }) => {
	const dispatch = useDispatch();
	const updateComplete = (e) => dispatch(updateStop(id, { complete: e.target.checked }));
	const removeStop = () => dispatch(deleteStop(id));
	return (
		<div>
			<div>
				<div>Stop {stopNum}</div>
				<div>
					<div>{name}</div>
					<div>{address}</div>
				</div>
				<div>
					<label>
						Complete:{' '}
						<input type="checkbox" value={complete} onChange={updateComplete} />
					</label>
				</div>
			</div>
			<div>
				<button>Edit</button>
				<button onClick={removeStop}>Remove</button>
			</div>
		</div>
	);
};

export default ItineraryItem;
