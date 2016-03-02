import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class ApiTest {
  heading = 'Proof API is alive';
  message = '';

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:5678/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('user')
      .then(response => response.json())
      .then(data => this.message = data.message);
  }
}
