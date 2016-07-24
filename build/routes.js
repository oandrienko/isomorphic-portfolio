'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./views/home');

var _home2 = _interopRequireDefault(_home);

var _links = require('./views/links');

var _links2 = _interopRequireDefault(_links);

var _about = require('./views/about');

var _about2 = _interopRequireDefault(_about);

var _projects = require('./views/projects');

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//if(typeof require.ensure !== 'function') require.ensure = function(d, c) { c(require) };

//TODO: require.ensure is returning require as being undefined...
// Remember to put '.default' for requires for babel 6

var routes = exports.routes = {
	path: '/',
	component: _layout2.default,
	indexRoute: { component: _home2.default },
	onChange: function onChange(prevState, nextState, replace) {
		var newPath = nextState.location.pathname;
		if (!/^\/projects\/[a-zA-Z0-9_.-]*$/.test(newPath)) window.scrollTo(0, 0);
		window.ga('send', 'pageview', newPath);
	},
	childRoutes: [{
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
		component: _about2.default
	}, {
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
		component: _projects2.default
	}, {
		path: 'links',
		component: _links2.default
	}]
};