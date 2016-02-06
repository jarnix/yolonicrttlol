import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {UserService} from '../../models/user';

@Page({
  templateUrl: 'build/pages/connection/connection.html',
  providers: [ UserService ]
})
export class ConnectionPage {

   textealacon : string;

  constructor(private nav: NavController, navParams: NavParams, private _userService: UserService) {
    this.textealacon = _userService.getText();

  }


}
