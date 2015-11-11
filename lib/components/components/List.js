import React, { PropTypes } from 'react';
import Item from './Item';

const defaultItemsPerPage = 1000;

export default class List extends React.Component {

	static propTypes = {
		list: PropTypes.array.isRequired,
		itemsPerPage: PropTypes.number
	}

	constructor (props) {
		super(props);

		this.state = {
			currentPage: 0
		};
	}

	decreasePage = (() => {
		this.setState({
			currentPage: this.state.currentPage - 1
		});
	});

	increasePage = (() => {
		this.setState({
			currentPage: this.state.currentPage + 1
		});
	});

	render () {

		const { currentPage } = this.state;
		const itemsPerPage = this.props.itemsPerPage || defaultItemsPerPage;
		const totalNumPages = Math.ceil(this.props.list.length / itemsPerPage);
		const startIndex = currentPage * itemsPerPage;
		const airportsToShow = this.props.list.slice(startIndex, startIndex + itemsPerPage);

		return (
			<div>
				<p>
					{currentPage}/{totalNumPages}
					<button disabled={currentPage === 0}
						onClick={this.decreasePage}
					>-</button>
					<button disabled={currentPage === totalNumPages}
						onClick={this.increasePage}
					>+</button>
				</p>
				<ul>
					{airportsToShow.map((airport) =>
						<Item key={`airport-${airport.iata}`}
							item={airport}
						/>
					)}
				</ul>
			</div>
		);
	}

}
