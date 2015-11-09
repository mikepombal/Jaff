import React, { PropTypes } from 'react';
import Item from './Item';

export default class List extends React.Component {

	static propTypes = {
		list: PropTypes.array.isRequired
	}

	render () {

		return (
			<div>
				{this.props.list.map((airport, index) =>
					<Item item={airport} index={index}/>
				)}
			</div>
		);
	}

}
