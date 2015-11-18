import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
	listAirports: [],
	myAirports: []
};

const actionHandlers = {
	[constants.LOAD_AIRPORTS]: (state, action) => ({
		listAirports: action.payload
	}),

	[constants.ADD_AIRPORT]: (state, action) => ({
		myAirports: [...state.myAirports, action.payload]
	})
};

export default createReducer(initialState, actionHandlers);
