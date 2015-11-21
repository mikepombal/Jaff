import React from 'react';
import { Redirect, Router, Route } from 'react-router';
import * as components from './components';
import { actions } from './constants';

const {
	Airports,
	MyAirports,
	Application,
	Login,
} = components;

export default function renderRoutes (history, store) {

	// function requireAuth (nextState, redirectTo) {
	// 	const state = store.getState();
	// 	const isLoggedIn = Boolean(state.application.token);
	// 	if (!isLoggedIn) {
	// 		redirectTo('/login', {
	// 			nextPathname: nextState.location.pathname
	// 		});
	// 	}
	// }

	function logout (nextState, redirectTo) {
		store.dispatch({ type: actions.LOG_OUT });
		redirectTo('/login');
	}

	return (
		<Router key="router-base" history={history}>
			<Route component={Application}>
				<Redirect from="/" to="/airports" />
				<Route path="airports" component={Airports} />
				<Route path="my-airports" component={MyAirports} />

				<Route path="login" component={Login} />
				<Route path="logout" onEnter={logout} />
			</Route>
		</Router>
	);
};
