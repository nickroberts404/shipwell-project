import { createStore } from 'redux';

export const ADD_STOP = 'ADD_STOP';
export const UPDATE_FIELD = 'UPDATE_FIELD';

const initialState = {
	form: {
		fields: { name: { value: '', error: '' }, address: { value: '', error: '' } },
		showErrors: false,
	},
	itinerary: [{ id: 0, name: "Nick's House", address: '1411 Continental Pass' }],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STOP:
			return { ...state, itinerary: [...state.itinerary, action.stop] };
		case UPDATE_FIELD:
			return {
				...state,
				form: {
					...state.form,
					fields: { ...state.form.fields, [action.field]: action.data },
				},
			};
		default:
			return state;
	}
};

export default createStore(reducer);
