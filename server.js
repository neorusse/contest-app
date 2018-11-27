import config from './config';
import express from 'express';
import logger from 'morgan';
import chalk from 'chalk';

// Initialize the Express App
const server = new express();

server.use(logger('tiny'));
server.get('/', (req, res) => {
  res.send('Whow!, Hello Express and EJS');
});


server.listen(config.port, () => console.info(`Example app running on port ${chalk.green(config.port)}`));
