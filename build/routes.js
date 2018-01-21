'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _route_utils = require('./utils/route_utils');

var utils = _interopRequireWildcard(_route_utils);

var _MainLayout = require('./components/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _HomePage = require('./components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LinksPage = require('./components/LinksPage');

var _LinksPage2 = _interopRequireDefault(_LinksPage);

var _AboutPage = require('./components/AboutPage');

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _ProjectsPage = require('./components/ProjectsPage');

var _ProjectsPage2 = _interopRequireDefault(_ProjectsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    path: '/',
    component: _MainLayout2.default,
    indexRoute: {
        component: _HomePage2.default
    },
    onChange: function onChange(prevState, nextState) {
        return utils.changeRoutes(nextState.location.pathname);
    },
    childRoutes: [{
        path: '/',
        component: _HomePage2.default
    }, {
        path: 'about',
        component: _AboutPage2.default
    }, {
        path: 'work(/:name)',
        component: _ProjectsPage2.default
    }, {
        path: 'links',
        component: _LinksPage2.default
    }]
};