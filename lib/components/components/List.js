import React, { PropTypes } from 'react';
import Item from './Item';

const defaultItemsPerPage = 10;

export default class List extends React.Component {

	static propTypes = {
		list: PropTypes.array.isRequired,
		myAirports: PropTypes.array.isRequired,
		itemsPerPage: PropTypes.number,
		toggleAirport: PropTypes.func.isRequired
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
		const { itemsPerPage, list, toggleAirport, myAirports } = this.props;

		const itemsPerPageToUse = itemsPerPage || defaultItemsPerPage;
		const startIndex = (currentPage - 1) * itemsPerPageToUse;
		const filteredList = this.state.filter ?
			list.filter((item) => item.iata.startsWith(this.state.filter)) :
			list;
		const airportsToShow = filteredList.slice(startIndex, startIndex + itemsPerPageToUse);
		const totalNumPages = Math.ceil(filteredList.length / itemsPerPageToUse);

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
							toggleAirport={toggleAirport}
							isAdded={myAirports.indexOf(airport.iata) >= 0}
						/>
					)}
				</ul>
			</div>
		);
	}

}
