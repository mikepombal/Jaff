import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
	token: null,
	locale: 'en',
	user: {
		permissions: []
	}
};

const actionHandlers = {
	[constants.LOGGED_IN]: (_, action) => action.payload,
	[constants.LOG_OUT]: () => ({ token: null }),
	[constants.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload })
};

export default createReducer(initialState, actionHandlers);
