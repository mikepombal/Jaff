import './airports.css';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SelectAirports } from '../../components';
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

	render () {
		const { listAirports, myAirports, actions: { toggleAirport } } = this.props;
		console.log('My Airports: ', myAirports);

		return (
			<div className="airports">
				<h1 className="airports__title">Airports</h1>
				<SelectAirports
					list={listAirports}
					toggleAirport={toggleAirport}
					myAirports={myAirports}/>
			</div>
		);
	}
}
