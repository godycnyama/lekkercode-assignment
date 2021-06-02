import Service from '@ember/service';

export default class AuthenticationService extends Service {
  isLoggedIn = false;
  //simulate token login
  login() {
    this.isLoggedIn = true;
  }

  //simulate logout
  logout() {
    this.isLoggedIn = false;
  }

  //check if user is authenticated
  isAuthenticated() {
      return this.isLoggedIn;
  }
}
