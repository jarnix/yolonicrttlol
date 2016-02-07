import {Page, NavController, NavParams, Alert, Storage, LocalStorage} from 'ionic-framework/ionic';

import {UserService} from '../../services/user';

@Page({
  templateUrl: 'build/pages/connection/connection.html'
})
export class ConnectionPage {

  username: string;
  password: string;

  constructor(private nav: NavController, navParams: NavParams, private userService: UserService) {
    this.userService.getRememberedCredentials('username').then(r => this.username = r).catch(err => console.log(err));
    this.userService.getRememberedCredentials('password').then(r => this.password = r).catch(err => console.log(err));
  }

  submit() {

    this.userService.rememberCredentials(this.username, this.password);

    let alert = Alert.create({
      title: 'Login failed',
      subTitle: 'Are you drunk?',
      buttons: ['retry']
    });
    this.nav.present(alert);
  }



}
