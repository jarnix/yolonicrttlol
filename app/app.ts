import {App, IonicApp, Platform} from 'ionic-framework/ionic';

import {UserService} from './services/user';

import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ConnectionPage} from './pages/connection/connection';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [ UserService ]
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: Type = HelloIonicPage;
  pages: Array<{title: string, component: Type}>;

  constructor(private app: IonicApp, private platform: Platform, private userService: UserService) {

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Connexion', component: ConnectionPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

    if(!this.userService.isConnected()) {
        let nav = this.app.getComponent('nav');
        nav.setRoot(ConnectionPage);
    }

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
