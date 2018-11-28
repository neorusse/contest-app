import config from './config';
import apiRouter from './api';
import express from 'express';
import logger from 'morgan';
import chalk from 'chalk';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

// Initialize the Express App
const server = new express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.use(logger('tiny'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', { content: 'Whow!, Hello Express and EJS'});
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => console.info(`Example app running on port ${chalk.green(config.port)}`));

