//isomorphic-portfolio-site
//isomorphic-portfolio-website
//isomorphic-portfolio


import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainHeader from 'appRoot/js/components/header.jsx';
// import ContactModal from 'appRoot/js/components/modal.jsx';

import Home from 'appRoot/js/views/home.jsx'
import About from 'appRoot/js/views/about.jsx'
import Projects from 'appRoot/js/views/projects.jsx'
import Links from 'appRoot/js/views/links.jsx'

import 'appRoot/scss/base.scss';
import 'appRoot/scss/app.scss';


class MainLayout extends React.Component {
	constructor(props) {
		super();
	}	
	componentDidMount() {
		console.log('About => componentDidMount');
	}
	render() {
		return (
			<div className="mainWrapper">
				{/* mainWrapper was previously globalWrapper */}
				<MainHeader />
				{this.props.children}
				<footer className="mainFooter">
                	<a className="mainFooter__logoLink" href="#github"></a>
            	</footer>
			</div>
		);
	}
}

let routes = (
	<Route component={MainLayout}>
		<Route path="/">
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="projects" component={Projects} />
			<Route path="links" component={Links} />
		</Route>
	</Route>
);

ReactDom.render(
	<Router history={browserHistory} routes={routes} />, 
	document.getElementById('react-root')
);
