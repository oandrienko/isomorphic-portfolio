'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _mail = require('./utils/mail');

var _mail2 = _interopRequireDefault(_mail);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Basic config
 */
var app = (0, _express2.default)();

app.set('port', process.env.PORT || 8080);
app.set('views', _path2.default.join(__dirname, '../templates'));
app.engine('hbs', _expressHandlebars2.default.create({
    layoutsDir: app.get('views')
}).engine);
app.set('view engine', 'hbs');

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));
app.use(_bodyParser2.default.json());

/**
* One route for sending mail from form,
* the other for generating markup for React
* components on the server.
*/
app.use(function (req, res, next) {
    if (req.url.substr(-1) === '/' && req.url.length > 1) {
        res.redirect(301, req.url.slice(0, -1));
    } else {
        next();
    }
});

app.all('/mail/send', function (req, res) {
    if (req.body) {
        return (0, _mail2.default)(JSON.stringify(req.body), function (data) {
            res.send(JSON.stringify({
                success: true,
                data: data
            }));
        });
    }
    return res.send(JSON.stringify({
        success: false,
        data: { message: 'Invalid Parameter' }
    }));
});

app.get('/*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            return res.status(500).render('error', {
                error: error.message
            });
        } else if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname);
        } else if (renderProps == null) {
            return res.status(404).render('error', {
                error: 'Not Found'
            });
        }

        var title = _config.pagesTitles[req.url];
        var markup = (0, _server.renderToString)((0, _app2.default)(renderProps));

        return res.status(200).render('index', {
            title: title,
            markup: markup
        });
    });
});

app.listen(app.get('port'), function () {
    if (app.get('env') === 'development') {
        console.log(_cliColor2.default.cyanBright('Server is running on port ' + app.get('port')));
    }
});