import React, { PropTypes } from 'react';
import Item from './Item';

const defaultItemsPerPage = 10;

export default class List extends React.Component {

	static propTypes = {
		list: PropTypes.array.isRequired,
		itemsPerPage: PropTypes.number,
		addAirport: PropTypes.func.isRequired
	}

	constructor (props) {
		super(props);

		this.state = {
			currentPage: 1,
			filter: null
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

	handleInputChange = ((evt) => {
		this.setState({
			[evt.target.name]: evt.target.value === '' ? null : evt.target.value,
		});

	});

	render () {

		const { currentPage } = this.state;
		const itemsPerPage = this.props.itemsPerPage || defaultItemsPerPage;
		const startIndex = (currentPage - 1) * itemsPerPage;
		const filteredList = this.state.filter ?
			this.props.list.filter((item) => item.iata.startsWith(this.state.filter)) :
			this.props.list;
		const airportsToShow = filteredList.slice(startIndex, startIndex + itemsPerPage);
		const totalNumPages = Math.ceil(filteredList.length / itemsPerPage);

		return (
			<div>
				<p>
					{currentPage}/{totalNumPages}
					<button disabled={currentPage === 1}
						onClick={this.decreasePage}
					>-</button>
					<button disabled={currentPage === totalNumPages}
						onClick={this.increasePage}
					>+</button>
				</p>
				<p>
					<form onChange={::this.handleInputChange}>
						<input type="text" name="filter" />
					</form>
				</p>
				<p>Number of airports: {filteredList.length}</p>
				<ul>
					{airportsToShow.map((airport) =>
						<Item key={`airport-${airport.iata}`}
							item={airport}
							addAirport={this.props.addAirport}
						/>
					)}
				</ul>
			</div>
		);
	}

}
