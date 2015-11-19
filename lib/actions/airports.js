import * as constants from '../constants';
import airports from '../airports.json';

export function loadAirports () {
	return (dispatch) => {
		dispatch({
			type: constants.LOAD_AIRPORTS,
			payload: airports
		});
	};
}

export function toggleAirport (iata) {
	return (dispatch) => {
		dispatch({
			type: constants.TOGGLE_AIRPORT,
			payload: iata
		});
	};
}
