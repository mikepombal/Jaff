import './header.css';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Header extends React.Component {

	static propTypes = {
		currentPath: PropTypes.string
	}

	render () {
		const { currentPath } = this.props;

		return (
			<div className="header">
				<Link to="/airports"
					className={classnames('header__link',
						{ 'header__link--selected': currentPath === '/airports' })}
					>
					Airports
				</Link>
				<Link to="/my-airports"
					className={classnames('header__link',
						{ 'header__link--selected': currentPath === '/my-airports' })}
					>
					My Airports
				</Link>
			</div>
		);
	}
}
