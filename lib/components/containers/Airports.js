import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/airports';

@connect(state => ({
	listAirports: state.airports.listAirports,
}), dispatch => ({
	actions: bindActionCreators(actions, dispatch)
}))
export default class About extends React.Component {

	static propTypes = {
		actions: PropTypes.object.isRequired,
		listAirports: PropTypes.array.isRequired
	}

	componentWillMount () {
		this.props.actions.loadAirports();
	}

	render () {
		const { listAirports } = this.props;

		return (
			<div>
				<div className="header">
					<h1>Airports</h1>
				</div>
				<div className="content">
					<p>
						{listAirports.map((airport, index) =>
							<div key={`airport-${index}`}>
								<span>{airport.iata},</span>
								<span>{airport.name}</span>
							</div>
						)}
					</p>
				</div>
			</div>
		);
	}
}
