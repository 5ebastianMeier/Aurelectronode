const Express = require('express');

export class RouterBase {
  constructor(config) {
    this.config = config;
  }

  get config() {
    return this._config;
  }

  set config(value) {
    this._config = value;
  }

  get controller() {
    return this._controller;
  }

  set controller(value) {
    this._controller = value;
  }

  get router() {
    return this._router;
  }

  set router(value) {
    this._router = value;
  }

  initializeController() {
    console.log('controller not initialized');
  }

  registerRoutes() {
    console.log('routes not registered');
  }

  initialize() {
    this.router = Express.Router();

    this.initializeController();

    this.registerRoutes();
  }

  registerRoute(method, route, handler) {
    this.router[method.toLowerCase()].call(this.router, route, handler);
  }
}
