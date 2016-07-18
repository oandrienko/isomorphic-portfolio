import express from 'express';
import path from 'path';
import clc from 'cli-color'

import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { routes } from './routes';

import _titles from './_titles'
import sendAdminNotification from './utils/mail'

/**
* Basic config
*/

let app = express();

app.set('port', process.env.PORT || 8000);
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
* the other for React components from server.
*/

app.use((req, res, next) => {
  if(req.url.substr(-1) == '/' && req.url.length > 1)
    res.redirect(301, req.url.slice(0, -1));
  else
    next();
});

app.all('/mail/send', function (req, res, next) {
  let name = req.body.name, email = req.body.email, message = req.body.message;

  if (name && email && message) {
    console.log('All vars defined... Calling sendMail');
    sendAdminNotification(name, email, message, (data) => {
      res.status(200).send(JSON.stringify({
        success: true, 
        data: data
      }));
    });
  } else {
    console.log('NOT all vars defined... Calling next()');
    res.status(400).send(JSON.stringify({
      success: false, 
      data: {message: 'Invalid Parameter'}
    }));
  }
});

app.get('/*', (req, res, next) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) 
			return res.status(500).render('error', {error: error.message});
		else if (redirectLocation) 
			return res.redirect(302, redirectLocation.pathname);
    else if (renderProps == null) 
      return res.status(404).render('error', {error: 'Not Found'});

      let title = _titles[req.url];
      let markup = renderToString(<RouterContext {...renderProps} />);

      res.status(200).render('index', {
      	title: title,
      	markup: markup
      });
	});
});

app.listen(app.get('port'), () => {
	if (app.get('env') === 'development')
		console.log(clc.cyanBright('Server is running on port ' + app.get('port')));
});