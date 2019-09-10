import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CreateStopForm from './CreateStopForm';
import Itinerary from './Itinerary';
const App = () => {
	return (
		<Container>
			<Header />
			<CreateStopForm />
			<Itinerary />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Avenir', Helvetica, sans-serif;
	color: #333;
`;

export default App;
