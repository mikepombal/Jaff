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

	[constants.TOGGLE_AIRPORT]: (state, action) => {
		if (state.myAirports.indexOf(action.payload) >= 0) {
			return { myAirports: state.myAirports.filter((iata) => iata !== action.payload) };
		} else {
			return { myAirports: [...state.myAirports, action.payload] };
		}
	}
};

export default createReducer(initialState, actionHandlers);
