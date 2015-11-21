import { actions } from '../constants';
import * as storage from '../persistence/storage';
import createReducer from '../utils/create-reducer';
import airports from '../airports.json';

const storedMyAirports = storage.get('myAirports');
const initialState = {
	listAirports: airports,
	myAirports: storedMyAirports ? storedMyAirports.split(',') : []
};

const actionHandlers = {

	[actions.TOGGLE_AIRPORT]: (state, action) => {
		let myAirports;
		if (state.myAirports.indexOf(action.payload) >= 0) {
			myAirports = state.myAirports.filter((iata) => iata !== action.payload);
		} else {
			myAirports = [...state.myAirports, action.payload];
		}

		console.log('stoing ==> ', myAirports);
		myAirports.length ?
			storage.put('myAirports', myAirports.join(',')) :
			storage.remove('myAirports');
		return { myAirports: myAirports };
	}
};

export default createReducer(initialState, actionHandlers);
