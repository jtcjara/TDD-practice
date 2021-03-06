const { assert } = require('chai');
const { buildItemObject } = require('../test-utils');

describe('User visits create page', () => {
  describe('posts a new item', () => {
    it('see new item', () => {
      browser.url('/items/create');
      const itemToCreate = buildItemObject();

      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');

      assert.include(browser.getText('body'), itemToCreate.title);
      assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
    });
  });
})



