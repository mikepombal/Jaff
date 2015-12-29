import './list-airports.css';
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
			<ul className="list-airports">
				{airports.map((airport) =>
					<li key={`airport-${airport.iata}`}
						className="list-airports__item">
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
