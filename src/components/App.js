import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import FormCreate from './FormCreate';
import Itinerary from './Itinerary';
const App = () => {
	return (
		<Container>
			<Header />
			<FormCreate />
			<Itinerary />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Avenir;
	color: #333;
`;

export default App;
