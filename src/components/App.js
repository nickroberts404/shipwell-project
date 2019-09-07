import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addStop } from '../actions';
import Form from './Form';
import Itinerary from './Itinerary';
const App = () => {
	const dispatch = useDispatch();
	return (
		<Container>
			<Form onSubmit={(name, address) => dispatch(addStop(name, address))} />
			<Itinerary />
		</Container>
	);
};

const Container = styled.div`
	font-family: Avenir;
	color: #333;
`;

export default App;
