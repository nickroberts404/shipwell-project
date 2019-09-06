import React from 'react';
import { useSelector } from 'react-redux';
import ItineraryItem from './ItineraryItem';

const Itinerary = () => {
	const itinerary = useSelector((state) => state.itinerary);
	return (
		<div>
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
		</div>
	);
};

export default Itinerary;
