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

  constructor(private http : Http) {

  }

  getRememberedCredentials(which: string) {
      return this.localStore.get(which);
  }

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  rememberCredentials() {
    this.localStore.set('username', this.username);
    this.localStore.set('password', this.password);
  }

  checkLogin() {
    let params = 'email=' + encodeURIComponent(this.username) + '&password=' + encodeURIComponent(this.password) + '&isStayConnected=&btnsubmit=clicked';
    this.http.get('/')
    .subscribe(
        data => {
              console.log(data);
            },
          err => console.log(err),
            () => console.log('request done')
    );
    // this.http.post(this.baseUrl + 'login.do', params).subscribe(response => console.log(response));
  }

  isConnected() {
    return false;
  }

}
