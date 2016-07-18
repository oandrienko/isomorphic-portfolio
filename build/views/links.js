'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Links = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
	require('stylesRoot/views/links.scss');
}

var Links = exports.Links = function Links(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'mainContent__links', role: 'main' },
		_react2.default.createElement(
			'div',
			{ className: 'mainContent__linksContainer' },
			_react2.default.createElement(
				'section',
				{ className: 'links__content' },
				_react2.default.createElement(
					'div',
					{ className: 'links__content--text' },
					_react2.default.createElement(
						'ul',
						{ className: 'links__body-links' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ target: '_blank', href: '#lindedin', className: 'links__link' },
								_react2.default.createElement('img', { src: '/images/linkedin-logo.jpg', target: '_blank', alt: '' })
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ target: '_blank', href: 'https://github.com/oandrienko', className: 'links__link' },
								_react2.default.createElement('img', { src: '/images/github-logo.jpg', target: '_blank', alt: '' })
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'mailto:oandrien@uwaterloo.ca', className: 'links__link' },
								_react2.default.createElement('img', { src: '/images/mail-logo.jpg', target: '_blank', alt: '' })
							)
						)
					)
				)
			)
		)
	);
};