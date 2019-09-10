import * as type from './actionTypes';

const reducer = (state = [], action) => {
	switch (action.type) {
		case type.ADD_STOP:
			return [...state, action.stop];
		case type.UPDATE_STOP:
			return state.map((item) =>
				item.id === action.id ? Object.assign({}, item, action.update) : item
			);
		case type.DELETE_STOP:
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};

export default reducer;
