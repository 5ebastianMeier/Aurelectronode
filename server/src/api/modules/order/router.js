const Express = require('express')

export class OrderRouter {
  constructor(config) {
    this._config = config;
    this.initialize();
  }

  get config() {
    return this._config;
  }

  get router() {
    return this._router;
  }

  initialize() {
    this._router = Express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/', (request, response, next) => {
      console.log('gettet');
      response
        .status(500)
        .send('trööööt');
    });
  }
}
