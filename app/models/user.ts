import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UserService {
  items:Array<any>;

  constructor(http:Http) {

  }

  getText() {
    return 'super';
  }

}
