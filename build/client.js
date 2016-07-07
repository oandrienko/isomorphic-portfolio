'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
	require('stylesRoot/base.scss');
}

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes.routes }), document.getElementById('react-root'));