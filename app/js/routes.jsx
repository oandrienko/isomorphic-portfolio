import React from 'react';
import ReactDom from 'react-dom';
import { IndexRoute, Route, Link } from 'react-router';

import MainLayout from './components/layout.jsx';

import Home from './views/home.jsx';
import About from './views/about.jsx';
import Projects from './views/projects.jsx';
import Links from './views/links.jsx';

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