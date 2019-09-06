import React from 'react';
import { useDispatch } from 'react-redux';
import { addStop } from '../actions';
import Form from './Form';
import Itinerary from './Itinerary';
const App = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<Form onSubmit={(name, address) => dispatch(addStop(name, address))} />
			<Itinerary />
		</div>
	);
};

export default App;
