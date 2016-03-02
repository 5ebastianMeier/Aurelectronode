const config = require('./config.json');
import {ApiServer} from './api/server';

const server = new ApiServer(config.api);

server.initialize()
  .then(() => {
    server.start();
  });
