import React, { PropTypes } from 'react';
import Airport from './airport/Airport';

export default class ListAirports extends React.Component {

	static propTypes = {
		airports: PropTypes.array.isRequired
	};

	render () {
		const { airports } = this.props;
		console.log(airports);

		return (
			<ul>
				{airports.map((airport) =>
					<li key={`airport-${airport.iata}`}>
						<Airport iata={airport.iata}
							name={airport.name}
							iso={airport.iso}
						/>
					</li>
				)}
			</ul>
		);
	}
}
