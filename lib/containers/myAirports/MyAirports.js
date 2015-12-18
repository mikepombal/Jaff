import './myAirports.css';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListAirports } from '../../components';

@connect(state => ({
	listAirports: state.airports.listAirports,
	myAirports: state.airports.myAirports
}))
export default class MyAirportsContainer extends React.Component {

	static propTypes = {
		listAirports: PropTypes.array.isRequired,
		myAirports: PropTypes.array.isRequired
	}

	render () {
		const { listAirports, myAirports } = this.props;
		const list = listAirports.filter((airport) => myAirports.indexOf(airport.iata) >= 0);

		return (
			<div className="my-airports">
				<h1 className="my-airports__title">My Airports</h1>
				<ListAirports airports={list} />
			</div>
		);
	}
}
