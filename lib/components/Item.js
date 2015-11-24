import React, { PropTypes } from 'react';

export default class Item extends React.Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		toggleAirport: PropTypes.func.isRequired,
		isAdded: PropTypes.bool.isRequired
	}

	toggleAirport = (() => {
		this.props.toggleAirport(this.props.item.iata);
	});

	render () {
		const { item, isAdded } = this.props;

		return (
			<li>
				<p>
					<span>{item.iata},</span>
					<span>{item.name}</span>
					<button onClick={this.toggleAirport}>
						{isAdded ? 'Remove' : 'Add'}
					</button>
				</p>
			</li>
		);
	}

}
