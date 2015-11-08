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
