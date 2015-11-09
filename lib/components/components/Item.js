import React, { PropTypes } from 'react';

export default class Item extends React.Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
	}

	render () {
		const { item, index } = this.props;

		return (
			<p key={`airport-${index}`}>
				<span>{item.iata},</span>
				<span>{item.name}</span>
				<button>Add</button>
			</p>
		);
	}

}
