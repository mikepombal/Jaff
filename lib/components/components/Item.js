import React, { PropTypes } from 'react';

export default class Item extends React.Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		addAirport: PropTypes.func.isRequired
	}

	addAirport = (() => {
		this.props.addAirport(this.props.item.iata);
	});

	render () {
		const { item } = this.props;

		return (
			<li>
				<p>
					<span>{item.iata},</span>
					<span>{item.name}</span>
					<button onClick={this.addAirport}>Add</button>
				</p>
			</li>
		);
	}

}
