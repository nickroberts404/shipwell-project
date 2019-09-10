import * as type from './actionTypes';
import uniqid from 'uniqid';

export const addStop = (name, address) => ({
	type: type.ADD_STOP,
	stop: {
		id: uniqid(),
		name,
		address,
		complete: false,
	},
});

export const updateStop = (id, update) => ({
	type: type.UPDATE_STOP,
	id,
	update,
});

export const deleteStop = (id) => ({
	type: type.DELETE_STOP,
	id,
});
