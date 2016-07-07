import express from 'express';
import path from 'path';
import clc from 'cli-color'

//TODO: submit form to sever to send contact emails
import bodyParser from 'body-parser';
import morgan from 'morgan';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { routes } from './routes';

import exphbs from 'express-handlebars';
import titles from './titles'


let app = express();

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, '../templates'));

app.use(morgan('dev'));

//TODO: submit form to sever to send contact emails
app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.engine('hbs', exphbs.create({
	layoutsDir: app.get('views')
}).engine);
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  if(req.url.substr(-1) == '/' && req.url.length > 1)
    res.redirect(301, req.url.slice(0, -1));
  else
    next();
});

app.get('/*', (req, res, next) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) 
			return res.status(500).render('error', {error: error.message});
		else if (redirectLocation) 
			return res.redirect(302, redirectLocation.pathname);
    else if (renderProps == null) 
      return res.status(404).render('error', {error: 'Not Found'});

      let title = titles[req.url];
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
