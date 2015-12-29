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
			<div className="list-airports">
				<div>Number of visited airports: {airports.length}</div>
				<ul className="list-airports__list">
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
			</div>
		);
	}
}
