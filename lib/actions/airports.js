import * as constants from '../constants';

export function toggleAirport (iata) {
	return (dispatch) => {
		dispatch({
			type: constants.TOGGLE_AIRPORT,
			payload: iata
		});
	};
}
