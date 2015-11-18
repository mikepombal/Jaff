import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List';
import * as actions from '../../actions/airports';

@connect(state => ({
	listAirports: state.airports.listAirports,
	myAirports: state.airports.myAirports
}), dispatch => ({
	actions: bindActionCreators(actions, dispatch)
}))
export default class AirportsContainer extends React.Component {

	static propTypes = {
		actions: PropTypes.object.isRequired,
		listAirports: PropTypes.array.isRequired,
		myAirports: PropTypes.array.isRequired
	}

	componentWillMount () {
		this.props.actions.loadAirports();
	}

	render () {
		const { listAirports, myAirports } = this.props;
		console.log('My Airports: ', myAirports);

		return (
			<div>
				<div className="header">
					<h1>Airports</h1>
				</div>
				<div className="content">
					<List list={listAirports}
						addAirport={this.props.actions.addAirport}/>
				</div>
			</div>
		);
	}
}
