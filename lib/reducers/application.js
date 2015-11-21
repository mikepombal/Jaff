import { actions } from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
	token: null,
	locale: 'en',
	user: {
		permissions: []
	}
};

const actionHandlers = {
	[actions.LOGGED_IN]: (_, action) => action.payload,
	[actions.LOG_OUT]: () => ({ token: null }),
	[actions.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload })
};

export default createReducer(initialState, actionHandlers);
