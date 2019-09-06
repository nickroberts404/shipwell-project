import React from 'react';
import { useSelector } from 'react-redux';

const Itinerary = () => {
	const itinerary = useSelector((state) => state.itinerary);
	return (
		<div>
			{itinerary.map((stop) => (
				<div key={stop.id}>{stop.name}</div>
			))}
		</div>
	);
};

export default Itinerary;
