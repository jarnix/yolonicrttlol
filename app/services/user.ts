import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Storage, LocalStorage} from 'ionic-framework/ionic';

@Injectable()
export class UserService {
  items:Array<any>;

  username: string;
  password: string;
  baseUrl: string = "https://plateforme.eurecia.com/eurecia/";
  localStore : Storage = new Storage(LocalStorage);

  constructor(http:Http) {

  }

  getRememberedCredentials(which: string) {
      return this.localStore.get(which);
  }

  rememberCredentials(username: string, password: string) {
    this.localStore.set('username', username);
    this.localStore.set('password', password);
  }

  isConnected() {
    return false;
  }

}
