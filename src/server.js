"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./js/routes.jsx');

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.PORT || 8080);
app.set('views', _path2.default.join(__dirname, '/templates'));

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ 'extended': false }));
app.use(_bodyParser2.default.json());

app.use('/assets/', _express2.default.static(_path2.default.join(__dirname, '../assets')));

app.engine('handlebars', _expressHandlebars2.default.create({
	defaultLayout: 'base',
	layoutsDir: app.get('views'),
	extname: '.html'
}).engine);
app.set('view engine', 'handlebars');

app.get('/*', function (req, res, next) {
	(0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (error, redirectLocation, renderProps) {
		if (error) return next(error.message);else if (redirectLocation) return res.redirect(redirectLocation.pathname);else if (renderProps == null) return next(error);

		var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps));
		var title = 'Sample Title';

		var html = '<!doctype html><html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>' + title + '- Oles Andrienko</title> <meta name="description" content=""> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="icon" type="image/png" href="http://icons.iconarchive.com/icons/iron-devil/ids-3d-icons-20/32/Ico-zilla-icon.png"> <link rel="apple-touch-icon" href="apple-touch-icon.png"> <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script> <link href="../../assets/bundles/app.css" rel="stylesheet"></head> <body><!--[if lt IE 8]> <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/?locale=en">upgrade your browser</a> to improve your experience.</p><![endif]--> <div id="react-root">' + markup + '</div><script>(function(m,r,o,l,e,s){m.GoogleAnalyticsObject=l;m[l]||(m[l]=function(){(m[l].q=m[l].q||[]).push(arguments)});m[l].l=+new Date; e=r.createElement(o);s=r.getElementsByTagName(o)[0]; e.src=\'https://www.google-analytics.com/analytics.js\'; s.parentNode.insertBefore(e, s)}(window, document, \'script\', \'ga\')); ga(\'create\', \'UA-XXXXX-X\', \'auto\');ga(\'send\', \'pageview\'); </script> <script type="text/javascript" src="../../assets/bundles/vendor.js"></script><script type="text/javascript" src="../../assets/bundles/app.js"></script></body></html>';

		res.send(html);
	});
	// res.send('Hello World');
});

app.listen(8080, function () {
	if (app.get('env') === 'development') {
		console.log('Server is running: http://localhost:8080');
	}
});

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
// var url = 'mongodb://localhost:27017/test';

// var insertDocument = function(db, callback) {
//    db.collection('restaurants').insertOne( {
//       "address" : {
//          "street" : "2 Avenue",
//          "zipcode" : "10075",
//          "building" : "1480",
//          "coord" : [ -73.9557413, 40.7720266 ]
//       },
//       "borough" : "Manhattan",
//       "cuisine" : "Italian",
//       "grades" : [
//          {
//             "date" : new Date("2014-10-01T00:00:00Z"),
//             "grade" : "A",
//             "score" : 11
//          },
//          {
//             "date" : new Date("2014-01-16T00:00:00Z"),
//             "grade" : "B",
//             "score" : 17
//          }
//       ],
//       "name" : "Vella",
//       "restaurant_id" : "41704620"
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     callback();
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });
