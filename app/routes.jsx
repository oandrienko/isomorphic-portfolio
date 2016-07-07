import React from 'react';
import ReactDom from 'react-dom';
import { IndexRoute, Route, Link } from 'react-router';

import MainLayout from './components/layout';

import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
import Links from './views/links';

export let routes = (
	<Route component={MainLayout}>
		<Route path="/">
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="projects" component={Projects} />
			<Route path="links" component={Links} />
		</Route>
	</Route>
);