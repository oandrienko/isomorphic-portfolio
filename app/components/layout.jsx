import React from 'react';

import MainHeader from './header';

if (process.env.BROWSER) {
	require('stylesRoot/components/layout.scss');
}

export default class MainLayout extends React.Component {
	constructor(props) {
		super();
	}	
	componentDidMount() {
		console.log('About => componentDidMount');
	}
	render() {
		return (
			<div className="mainWrapper">
				<MainHeader />
				{this.props.children}
				<footer className="mainFooter">
                	<a className="mainFooter__logoLink" href="#github"></a>
            	</footer>
			</div>
		);
	}
}