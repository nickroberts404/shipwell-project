import * as type from './actionTypes';
const initialState = [
	{
		id: 'dkfndf',
		name: "Nick's House",
		address: '1411 Continental Pass, Cedar Park, TX 78613, US',
		complete: false,
	},
	{
		id: 'dkndkfnodj',
		name: "Lauren's House",
		address: '1901 Coachlamp Dr, Cedar Park, TX 78613, US',
		complete: false,
	},
];

const reducer = (state = initialState, action) => {
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
