import React from 'react';

export default class Forbidden extends React.Component {
	render () {
		return (
			<div>
				<div className="header">
					Forbidden
				</div>
				<div className="content">
					<p>
						You are not authorized to see the requested page
					</p>
				</div>
			</div>
		);
	}
}
