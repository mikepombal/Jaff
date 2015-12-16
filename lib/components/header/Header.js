import './header.css';
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

	render () {
		return (
			<div className="header">
				<Link className="header__link" to="/airports">
					Airports
				</Link>
				<Link className="header__link" to="/my-airports">
					My Airports
				</Link>
			</div>
		);
	}
}
