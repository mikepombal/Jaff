import React from 'react';
import { Link } from 'react-router';

export default class AccountHome extends React.Component {
	render () {
		const logoutLink = (<Link to="/logout">logout</Link>);
		const secretAreaLink = (
			<Link to="/account/secret-area">
				super secret area
			</Link>
		);

		return (
			<div>
				<div className="header">
					<h1>Account</h1>
				</div>
				<div className="content">
					<p>
						You can {logoutLink} or try to access a {secretAreaLink} without a necessary permissions.
					</p>
				</div>
			</div>
		);
	}
}
