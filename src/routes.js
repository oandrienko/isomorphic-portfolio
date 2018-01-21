import * as utils from './utils/route_utils';

import MainLayout from './components/MainLayout';
import Home from './components/HomePage';
import Links from './components/LinksPage';
import About from './components/AboutPage';
import Projects from './components/ProjectsPage';

export default {
    path: '/',
    component: MainLayout,
    indexRoute: {
        component: Home
    },
    onChange: (prevState, nextState) => utils.changeRoutes(nextState.location.pathname),
    childRoutes: [
        {
            path: '/',
            component: Home
        },
        {
            path: 'about',
            component: About
        },
        {
            path: 'projects(/:name)',
            component: Projects
        },
        {
            path: 'links',
            component: Links
        }
    ]
};
