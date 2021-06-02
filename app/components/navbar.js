import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service('authentication') auth;
  @tracked isLoggedIn = this.auth.isAuthenticated();
  //simulate token login
  @action
  login() {
    this.auth.login();
    this.isLoggedIn = this.auth.isAuthenticated();
  }

  //simulate logout
  @action
  logout() {
    this.auth.logout();
    this.isLoggedIn = this.auth.isAuthenticated();
  }
}
