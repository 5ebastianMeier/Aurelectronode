export class UserController {
    constructor(config) {
      this._config = config;
    }

    get config() {
      return this._config;
    }

    getSingle(request, response, next) {
      console.log('gettet');
      response
        .status(200)
        .send({ message: 'trööööt'});
    }
}
