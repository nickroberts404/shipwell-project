import { createStore } from 'redux';

export const ADD_STOP = 'ADD_STOP';
export const UPDATE_STOP = 'UPDATE_STOP';
export const DELETE_STOP = 'DELETE_STOP';

const initialState = {
	itinerary: [{ id: 0, name: "Nick's House", address: '1411 Continental Pass', complete: false }],
};

// Seperate Reducer

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STOP:
			return { ...state, itinerary: [...state.itinerary, action.stop] };
		case UPDATE_STOP:
			return {
				...state,
				itinerary: state.itinerary.map((item) =>
					item.id === action.id ? Object.assign({}, item, action.update) : item
				),
			};
		case DELETE_STOP:
			return {
				...state,
				itinerary: state.itinerary.filter((item) => item.id !== action.id),
			};

		default:
			return state;
	}
};

export default createStore(reducer);
