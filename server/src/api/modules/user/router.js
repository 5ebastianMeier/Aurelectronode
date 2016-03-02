import {RouterBase} from './../../router_base';
import {UserController} from './controller';

export class UserRouter extends RouterBase {
  constructor(config) {
    super(config);
  }

  initializeController() {
    this._controller = new UserController(this.config.controller);
  }

  registerRoutes() {
    this.registerRoute('GET', '/', this.controller.getSingle);
  }
}
