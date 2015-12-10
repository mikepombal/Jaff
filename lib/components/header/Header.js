import './header.css';
import React from 'react';

export default class Header extends React.Component {

	render () {
		return (
			<div className="header">
				<a href="/airports"><div>Airports</div></a>
				<a href="/my-airports"><div>My Airports</div></a>
			</div>
		);
	}
}
