//TODO: require.ensure is returning require as being undefined...
// Remember to put '.default' for requires for babel 6

import React from 'react';
import ReactDom from 'react-dom';
import { IndexRoute, Route, Link } from 'react-router';

import MainLayout from './components/layout';

import Home from './views/home';
import Links from './views/links';

import About from './views/about';
import Projects from './views/projects';


//if(typeof require.ensure !== 'function') require.ensure = function(d, c) { c(require) };


export let routes = {
	path: '/',
	component: MainLayout,
	indexRoute: { component: Home },
	onChange: (prevState, nextState, replace) => {
		let newPath = nextState.location.pathname;
		if (!/^\/projects\/[a-zA-Z0-9_.-]*$/.test(newPath)) 
			window.scrollTo(0, 0);
		window.ga('send', 'pageview', newPath);
	},
	childRoutes: [
		{
			path: 'about',
			// getComponents(nextState, cb) {
			// 	if (typeof require.ensure == 'function') {
		 //            /* Asynchronous loading of a component that is inside of require.ensure */
		 //        	require.ensure([], (require) => {
		 //        		cb(null, require('./views/about').default);
			// 		});
			// 	} else {
			// 		/* Synchronous loading for server*/
			// 		cb(null, require('./views/about').default);
			// 	}
			// }
			component: About
		},
		{
			path: 'projects(/:name)',
			// getComponents(nextState, cb) {
			// 	if (typeof require.ensure == 'function') {
		 //        	require.ensure([], (require) => {
		 //        		cb(null, require('./views/projects').default);
		 //        	});
			// 	} else {
			// 		cb(null, require('./views/projects').default);
			// 	}
			// }
			component: Projects
		},
		{
			path: 'links',
			component: Links
		},
	]
}
