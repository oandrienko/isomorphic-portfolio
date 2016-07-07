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

var _about = require('./views/about');

var _about2 = _interopRequireDefault(_about);

var _projects = require('./views/projects');

var _projects2 = _interopRequireDefault(_projects);

var _links = require('./views/links');

var _links2 = _interopRequireDefault(_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
	_reactRouter.Route,
	{ component: _layout2.default },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/' },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'about', component: _about2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'projects', component: _projects2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'links', component: _links2.default })
	)
);