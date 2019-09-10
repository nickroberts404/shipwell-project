import { combineReducers } from 'redux';
import { reducer as itineraryReducer } from './itinerary';

export default combineReducers({
	itinerary: itineraryReducer,
});
