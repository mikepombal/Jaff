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
			<div>
				<div>{iata}</div>
				<div>{name}</div>
				<div>{iso}</div>
			</div>
		);
	}
}
