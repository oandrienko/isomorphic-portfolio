import React from 'react';

import MainHeader from './Header';

if (process.env.BROWSER) {
	require('stylesRoot/components/layout.scss');
}

//TODO: Add ReactCSSTransitionGroup for animations

class MainLayout extends React.Component {
	constructor(props) {
		super();
	}	
	componentDidMount() {
		console.log('MainLayout => componentDidMount');

	}
	childDidChange() {
		console.log('MainLayout => CHILD DID CHANGE*******')
	}
	componentWillReceiveProps(nextProps) {
		console.log('MainLayout => componentWillReceiveProps');
		console.log(nextProps);
	}
	render() {
		return (
			<div className="mainWrapper">
				<MainHeader />
				{this.props.children}
				<footer className="mainFooter">
                	<a className="mainFooter__logoLink" 
                		href="https://github.com/oandrienko/isomorphic-portfolio" 
                		target="_blank"></a>
            	</footer>
			</div>
		);
	}
}

export default MainLayout;