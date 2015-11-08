import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
	listAirports: []
};

const actionHandlers = {
	[constants.LOAD_AIRPORTS]: (state, action) => ({
		listAirports: action.payload
	})
};

export default createReducer(initialState, actionHandlers);
