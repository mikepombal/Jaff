import { actions } from '../constants';

export function toggleAirport (iata) {
	return (dispatch) => {
		dispatch({
			type: actions.TOGGLE_AIRPORT,
			payload: iata
		});
	};
}
