const Express = require('express');
const BodyParser = require('body-parser');
import {ApiBootstrapper} from './bootstrapper';

export class ApiServer {
  constructor(config) {
    this.config = config;
  }

  get config() {
    return this._config;
  }

  set config(value) {
    this._config = value;
  }

  get app() {
    return this._app;
  }

  set app(value) {
    this._app = value;
  }

  initialize() {
    this.app = new Express();
    this.app.use(BodyParser.json());

    const bootstrapper = new ApiBootstrapper(this.app, this.config);
    return bootstrapper.initialize();
  }

  start() {
    this.app.listen(this.config.port, this.config.host, () => {
      process.stdout.write('lüppt');
    });
  }
}
