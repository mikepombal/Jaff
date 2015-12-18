import React, { PropTypes } from 'react';
// import Footer from './Footer';
import { Header } from '../components';

export default class Application extends React.Component {

	static propTypes = {
		children: PropTypes.any,
		location: PropTypes.any
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
		const { location: { pathname } } = this.props;
		const activeClass = isMenuActive ? 'active' : '';

		return (
			<div id="layout" className={activeClass}>
				<Header currentPath={pathname}/>

				<div id="main">
					{/* this will render the child routes */}
					{this.props.children}
				</div>

				{/*<Footer />*/}
			</div>
		);
	}
}
