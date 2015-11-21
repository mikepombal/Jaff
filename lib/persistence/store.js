import { actions } from '../constants';
import * as storage from './storage';

export default function persistenceHandler (next) {
	return (reducer, initialState) => {
		const store = next(reducer, initialState);

		return Object.assign({}, store, {
			dispatch (action) {
				store.dispatch(action);

				if (action.type === actions.LOGGED_IN) {
					storage.put('token', action.payload.token);
				}

				if (action.type === actions.LOG_OUT) {
					storage.remove('token');
				}

				return action;
			}
		});
	};
}
