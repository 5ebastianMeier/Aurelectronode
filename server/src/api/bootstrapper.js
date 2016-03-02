const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

export class ApiBootstrapper {
  constructor(app, config) {
    this._app = app;
    this._config = config;
  }

  get app() {
    return this._app;
  }

  get config() {
    return this._config;
  }

  initialize() {
    return this.discoverModules(this.config.modulesPath);
  }

  discoverModules(modulesPath) {
    process.stdout.write(modulesPath);

    return this.readFolder(modulesPath)
      .then((list) => {
        process.stdout.write('api modules: ' + list);
        return Promise.all(
          list.map((file) => {
            return this.readModule(modulesPath, file);
          })
        );
      });
  }

  readModule(modulesPath, file) {
    return new Promise((resolve, reject) => {
      const filePath = path.resolve(modulesPath, file);
      fs.stat(filePath, (error, stat) => {
        if (error) {
          reject(error);
        } else {
          if (stat && stat.isDirectory()) {
            this.initializeModule(file, filePath);
          }
          resolve();
        }
      })
    });
  }

  readFolder(path) {
    return new Promise((resolve, reject) => {
      fs.readdir(path, (error, list) => {
        if (error) {
          reject(error);
        } else {
          resolve(list);
        }
      });
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  initializeModule(moduleName, modulePath) {
    const routerConfig = this.getConfig(moduleName);
    const routerFile = `${modulePath}/router.js`;
    const routerClass = `${this.capitalizeFirstLetter(moduleName)}Router`;
    const Router = require(routerFile)[routerClass];
    const routerInstance = new Router(routerConfig);
    routerInstance.initialize();
    this.app.use(`/${routerConfig.route || moduleName}`, routerInstance.router);
  }

  getConfig(moduleName) {
    return this.config.modules[moduleName].router;
  }
}
