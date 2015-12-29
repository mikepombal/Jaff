import './airport.css';
import React, { PropTypes } from 'react';

export default class Airport extends React.Component {

	static propTypes = {
		iata: PropTypes.string.isRequired,
		iso: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}

	render () {
		const { iata, iso, name } = this.props;

		return (
			<div className="airport">
				<div className="airport__iata">{iata}</div>
				<div className="airport__details">
					<div className="airport__name">{name}</div>
					<div className="airport__iso">{iso}</div>
				</div>
			</div>
		);
	}
}
