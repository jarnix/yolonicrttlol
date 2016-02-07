import {Page, NavController, NavParams, Alert, Storage, LocalStorage} from 'ionic-framework/ionic';

import {UserService} from '../../services/user';

@Page({
  templateUrl: 'build/pages/connection/connection.html'
})
export class ConnectionPage {

  username: string;
  password: string;

  constructor(private nav: NavController, navParams: NavParams, private user: UserService) {
    this.user.getRememberedCredentials('username').then(r => this.username = r).catch(err => console.log(err));
    this.user.getRememberedCredentials('password').then(r => this.password = r).catch(err => console.log(err));
  }

  submit() {

    this.user.setCredentials(this.username, this.password);
    this.user.rememberCredentials();

    this.user.checkLogin();

    /*
    let alert = Alert.create({
      title: 'Login failed',
      subTitle: 'Are you drunk?',
      buttons: ['retry']
    });
    this.nav.present(alert);
    */
  }

}
