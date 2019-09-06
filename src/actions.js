import { ADD_STOP, UPDATE_STOP, DELETE_STOP } from './store';
import uniqid from 'uniqid';

export const addStop = (name, address) => ({
	type: ADD_STOP,
	stop: {
		id: uniqid(),
		name,
		address,
		complete: false,
	},
});

export const updateStop = (id, update) => ({
	type: UPDATE_STOP,
	id,
	update,
});

export const deleteStop = (id) => ({
	type: DELETE_STOP,
	id,
});
