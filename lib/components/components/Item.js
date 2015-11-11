import React, { PropTypes } from 'react';

export default class Item extends React.Component {

	static propTypes = {
		item: PropTypes.object.isRequired
	}

	render () {
		const { item } = this.props;

		return (
			<li>
				<p>
					<span>{item.iata},</span>
					<span>{item.name}</span>
					<button>Add</button>
				</p>
			</li>
		);
	}

}
