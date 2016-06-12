var assert = require('assert');

describe('registration tests', function(){

    it('should go to announcements session', function() {
        browser.click('a[data-route=announcements]');
        browser.pause(1000);
        var menuText = browser.getText('.app-name');
        assert.equal(menuText, "重要通啟");
        browser.pause(1000);
    });
});