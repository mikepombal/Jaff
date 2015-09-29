/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css';

import React, { PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import configureStore from './utils/configure-store';
import * as storage from './persistence/storage';
import getRoutes from './routes';

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const history = process.env.NODE_ENV === 'production' ?
	createHashHistory() :
	createBrowserHistory();

const initialState = {
	application: {
		token: storage.get('token'),
		user: { permissions: [/*'manage_account'*/] }
	}
};
const store = configureStore(initialState);

function getRootChildren (props) {

	const rootChildren = [];
	rootChildren.push(getRoutes(props.history, store));

	if (__DEVTOOLS__) {
		const { DevTools, DebugPanel, LogMonitor } =
			require('redux-devtools/lib/react');
		rootChildren.push(
			<DebugPanel key="debug-panel" top right bottom>
				<DevTools store={store} monitor={LogMonitor} />
			</DebugPanel>
		);
	}
	return rootChildren;
}

@connect(({ application }) => ({ application }))
class Root extends React.Component {
	static propTypes = {
		application: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	render () {
		return (
			<div>{getRootChildren(this.props)}</div>
		);
	}
}

React.render(
	<Provider store={store}>
		{() => <Root history={history} />}
	</Provider>
, document.getElementById('app'));
