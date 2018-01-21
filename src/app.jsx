import React from 'react';
import ReactDom from 'react-dom';
import {
    Router,
    browserHistory,
    RouterContext } from 'react-router';
import routes from './routes';

if (process.env.BROWSER) {
    require('stylesRoot/base.scss');
}

// for client/browser rendering
if (process.env.BROWSER) {
    ReactDom.render(
        <Router history={browserHistory} routes={routes} />,
        document.getElementById('react-root') // eslint-disable-line
    );
}

// for server-side rendering
export default (renderProps) => (
    <RouterContext {...renderProps} />
);
