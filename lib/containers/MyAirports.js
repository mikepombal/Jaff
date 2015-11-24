import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
			<div>
				<div className="header">
					<h1>My Airports</h1>
				</div>
				<div className="content">
					<ul>
						{list.map((airport) =>
							<li key={`my-airport-${airport.iata}`}>
								<p>
									<span>{airport.iata},</span>
									<span>{airport.name}</span>
								</p>
							</li>

						)}
					</ul>
				</div>
			</div>
		);
	}
}
