import React from 'react';

export default class Home extends React.Component {

	render () {
		const linkRedux = (<a href="https://github.com/gaearon/redux"
			target="_blank">Redux</a>);
		const linkRouter = (<a href="https://github.com/rackt/react-router"
			target="_blank">React Router</a>);
		return (
			<div>
				<div className="header">
					Welcome
				</div>
				<div className="content">
					<p>
						This website is a boilerplate example to showcase and provide best practices
						around {linkRedux} and {linkRouter}.
					</p>
				</div>
			</div>
		);
	}
}
