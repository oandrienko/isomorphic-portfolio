import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { routes } from './routes.jsx';

// import '../scss/base.scss';

ReactDom.render(
	<Router history={browserHistory} routes={routes} />, 
	document.getElementById('react-root')
);
