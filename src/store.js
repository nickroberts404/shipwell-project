import { createStore } from 'redux';

export const ADD_STOP = 'ADD_STOP';

const initialState = {
	itinerary: [{ id: 0, name: "Nick's House", address: '1411 Continental Pass' }],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STOP:
			return { ...state, itinerary: [...state.itinerary, action.stop] };
		default:
			return state;
	}
};

export default createStore(reducer);
