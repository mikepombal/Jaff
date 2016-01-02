import './select-airports.css';
import React, { PropTypes } from 'react';

export default class SelectAirports extends React.Component {

	static propTypes = {
		list: PropTypes.array.isRequired,
		myAirports: PropTypes.array.isRequired,
		toggleAirport: PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			filter: null,
			numberToShow: 20
		};
	}

	getListToShow () {
		const { list } = this.props;
		const { filter, numberToShow } = this.state;

		const filteredList = filter ?
			list.filter((item) => item.iata.startsWith(this.state.filter)) :
			list;
		return filteredList.slice(0, numberToShow);
	}

	getToggleFunction (iata) {
		return (() => {
			this.props.toggleAirport(iata);
		});
	}

	handleFilterChange = ((evt) => {
		this.setState({
			[evt.target.name]: evt.target.value === '' ? null : evt.target.value,
		});
	});

	render () {
		const { myAirports } = this.props;

		return (
			<div className="select-airports">Select Airports
				<p>
					<form onChange={::this.handleFilterChange}>
						<input type="text" name="filter" />
					</form>
				</p>
				<ul>
					{this.getListToShow().map((airport) =>
						<li key={`airport-${airport.iata}`}
							className="select-airports__item">
							<div className="select-airports__iata">{airport.iata}</div>
							<div className="select-airports__name">{airport.name}</div>
							<button onClick={this.getToggleFunction(airport.iata)}
								className="select-airports__button">
								{myAirports.indexOf(airport.iata) >= 0 ? 'Remove' : 'Add'}
							</button>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
