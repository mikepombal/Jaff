import React, { PropTypes } from 'react';
import Footer from './Footer';

export default class Application extends React.Component {

	static propTypes = {
		children: PropTypes.any
	}

	constructor (props, context) {
		super(props, context);

		this.handleMenuClick = this.handleMenuClick.bind(this);

		this.state = {
			isMenuActive: false
		};
	}

	handleMenuClick (evt) {
		evt.preventDefault();
		this.setState({ isMenuActive: !this.state.isMenuActive });
	}

	render () {
		const { isMenuActive } = this.state;
		const activeClass = isMenuActive ? 'active' : '';

		return (
			<div id="layout" className={activeClass}>
				<a href="/airports"><div>Airports</div></a>
				<a href="/my-airports"><div>My Airports</div></a>

				<div id="main">
					{/* this will render the child routes */}
					{this.props.children}
				</div>

				<Footer />
			</div>
		);
	}
}
