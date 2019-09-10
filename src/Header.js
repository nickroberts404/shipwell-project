import React from 'react';
import styled from 'styled-components';
import { primaryColor } from './styleVariables';
const Header = () => {
	return (
		<Container>
			<h1>Shipping Itinerary</h1>
		</Container>
	);
};

const Container = styled.header`
	color: ${primaryColor};
`;

export default Header;
