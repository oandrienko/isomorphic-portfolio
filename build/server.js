'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _titles = require('./titles');

var _titles2 = _interopRequireDefault(_titles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: submit form to sever to send contact emails


var app = (0, _express2.default)();

app.set('port', process.env.PORT || 8000);
app.set('views', _path2.default.join(__dirname, '../templates'));

app.use((0, _morgan2.default)('dev'));

//TODO: submit form to sever to send contact emails
app.use(_bodyParser2.default.urlencoded({ 'extended': false }));
app.use(_bodyParser2.default.json());

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.engine('hbs', _expressHandlebars2.default.create({
  layoutsDir: app.get('views')
}).engine);
app.set('view engine', 'hbs');

app.use(function (req, res, next) {
  if (req.url.substr(-1) == '/' && req.url.length > 1) res.redirect(301, req.url.slice(0, -1));else next();
});

app.get('/*', function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) return res.status(500).render('error', { error: error.message });else if (redirectLocation) return res.redirect(302, redirectLocation.pathname);else if (renderProps == null) return res.status(404).render('error', { error: 'Not Found' });

    var title = _titles2.default[req.url];
    var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));

    res.status(200).render('index', {
      title: title,
      markup: markup
    });
  });
});

app.listen(app.get('port'), function () {
  if (app.get('env') === 'development') console.log(_cliColor2.default.cyanBright('Server is running on port ' + app.get('port')));
});