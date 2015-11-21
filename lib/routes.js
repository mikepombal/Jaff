import React from 'react';
import { Redirect, Router, Route } from 'react-router';
import * as components from './components';
import { actions } from '../constants';

const {
	About,
	Account,
	AccountHome,
	Airports,
	MyAirports,
	Application,
	Dashboard,
	Home,
	Login,
	SuperSecretArea
} = components;

export default function renderRoutes (history, store) {

	function requireAuth (nextState, redirectTo) {
		const state = store.getState();
		const isLoggedIn = Boolean(state.application.token);
		if (!isLoggedIn) {
			redirectTo('/login', {
				nextPathname: nextState.location.pathname
			});
		}
	}

	function logout (nextState, redirectTo) {
		store.dispatch({ type: actions.LOG_OUT });
		redirectTo('/login');
	}

	return (
		<Router key="router-base" history={history}>
			<Route component={Application}>
				<Route path="/" component={Home} />
				<Redirect from="/account" to="/account/profile" />
				<Route path="about" component={About} />
				<Route path="airports" component={Airports} />
				<Route path="my-airports" component={MyAirports} />
				<Route path="account" component={Account} onEnter={requireAuth}>
					<Route path="profile" component={AccountHome} />
					<Route path="secret-area" component={SuperSecretArea} />
				</Route>
				<Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
				<Route path="login" component={Login} />
				<Route path="logout" onEnter={logout} />
			</Route>
		</Router>
	);
};
