import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Navbar />`);

    let heading = this.element.querySelector('h1');

    assert.equal(heading.textContent.trim(), 'Staffomatic');
    //assert.ok(button.classList.contains('is-disabled'));
  
    //assert.equal(this.element.textContent.includes(), '/Log In/i');
  });
});
