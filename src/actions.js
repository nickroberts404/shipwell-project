import { ADD_STOP } from './store';
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
