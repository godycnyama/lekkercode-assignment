import Model, { attr } from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;
  @attr('boolean', { defaultValue: false }) isArchived;
  @service('authentication') auth;

  changeValue() {
    this.value = !this.value;
  }

  archiveUser() {
    if(!this.auth.isAuthenticated()){
       alert("You have to be logged in to archive users!");
       return;
    }

    var confirmed = confirm(`Are you sure you want to archive ${this.name}?`);

    if (confirmed) {
      this.isArchived = true;
    } else {
      return;
    }
  }

  unarchiveUser() {
    this.isArchived = false;
  }
}
