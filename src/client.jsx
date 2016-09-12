import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { routes } from './routes';

if (process.env.BROWSER) {
    require('stylesRoot/base.scss');
}

ReactDom.render(
	<Router history={browserHistory} routes={routes} />, 
	document.getElementById('react-root')
);
