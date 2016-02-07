import {Page, NavController, NavParams, Alert, Storage, LocalStorage} from 'ionic-framework/ionic';

import {UserService} from '../../services/user';

@Page({
  templateUrl: 'build/pages/connection/connection.html'
})
export class ConnectionPage {

   textealacon : string;
   localStore : LocalStorage;
   username : string;
   password: string;

  constructor(private nav: NavController, navParams: NavParams, private userService: UserService) {
    this.localStore = new Storage(LocalStorage);
    this.localStore.get('username').then(username => this.username = username);
    this.localStore.get('password').then(password => this.password = password);
  }

  submit() {
    this.localStore.set('username', this.username);
    this.localStore.set('password', this.password);

    let alert = Alert.create({
      title: 'Login failed',
      subTitle: 'Are you drunk?',
      buttons: ['retry']
    });
    this.nav.present(alert);
  }



}
