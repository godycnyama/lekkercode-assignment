import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    // check if not logged in
    assert.dom('.container').exists();
    assert.equal(currentURL(), '/');

    //check if logged in
    assert.dom('.button.is-primary').exists();
    assert.dom('.button.is-warning').doesNotExist();
    
    //log in
    await click('.button.is-primary');

    // check if successfully logged in
    assert.dom('.button.is-primary').doesNotExist();
    assert.dom('.button.is-warning').exists();
  
    // log out
    await click('.button.is-warning');

    // check if successfully logged out
    assert.dom('.button.is-primary').exists();
    assert.dom('.button.is-warning').doesNotExist();

    // //navigate to users page
    // await click('.button');
    // //check if 4 people are displayed after navigation
    // assert.dom('img').exists({ count: 4 });

    // //navigate to Albert Einstein details
    // await click('a[href="/users/1"]');

    // //check current user displayed is Albert Estein
    // assert.equal(currentURL(), '/users/1');

    // //archive Albert Einstein
    // await click('.button.is-primary.is-centered');

    // //check if Albert Einstein successfully archived
    // assert.dom('.button.is-primary.is-centered').doesNotExist();

    // //unarchive Albert Einstein
    // await click('.button.is-warning.is-centered');

    // //check if Albert Einstein successfully unarchived
    // assert.dom('.button.is-warning.is-centered').doesNotExist();

    // //archive Albert Einstein
    // await click('.button.is-primary.is-centered');

    // //check if Albert Einstein successfully archived
    // assert.dom('.button.is-primary.is-centered').doesNotExist();

    // //go back to display users
    // await click('a[href="/users"]');
    
    // //check if Albert Estein is not being displayed
    // //assert.dom('.button.is-primary').exists();
    // //check if only 3 people are displayed after archiving Albert Einstein
    // assert.dom('img').exists({ count: 3 });
  });
});
