import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ItineraryItem from './ItineraryItem';

const Itinerary = () => {
	const itinerary = useSelector((state) => state.itinerary);
	return (
		<Container>
			{itinerary.map((item, i) => (
				<ItineraryItem
					key={item.id}
					id={item.id}
					stopNum={i + 1}
					name={item.name}
					address={item.address}
					complete={item.complete}
				/>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
export default Itinerary;
