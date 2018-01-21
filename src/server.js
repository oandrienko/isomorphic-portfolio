import express from 'express';
import path from 'path';
import clc from 'cli-color';

import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { renderToString } from 'react-dom/server';
import { match } from 'react-router';

import sendAdminNotification from './utils/mail';
import makeProviderWithRouter from './app';
import routes from './routes';
import { pagesTitles } from './config';

/**
 * Basic config
 */
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, '../templates'));
app.engine('hbs', exphbs.create({
    layoutsDir: app.get('views')
}).engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
* One route for sending mail from form,
* the other for generating markup for React
* components on the server.
*/
app.use((req, res, next) => {
    if (req.url.substr(-1) === '/' && req.url.length > 1) {
        res.redirect(301, req.url.slice(0, -1));
    } else {
        next();
    }
});

app.all('/mail/send', (req, res) => {
    if (req.body) {
        return sendAdminNotification(JSON.stringify(req.body), data => {
            res.send(JSON.stringify({
                success: true,
                data
            }));
        });
    }
    return res.send(JSON.stringify({
        success: false,
        data: { message: 'Invalid Parameter' }
    }));
});

app.get('/*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
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

        const title = pagesTitles[req.url];
        const markup = renderToString(
            makeProviderWithRouter(renderProps)
        );

        return res.status(200).render('index', {
            title,
            markup
        });
    });
});

app.listen(app.get('port'), () => {
    if (app.get('env') === 'development') {
        console.log(clc.cyanBright('Server is running on port ' + app.get('port')));
    }
});

