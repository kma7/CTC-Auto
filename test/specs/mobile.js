var assert = require('assert');

describe('registration tests', function(){

    it('should open mobile site home page', function() {
        browser.url('http://m2-test.svca.cc/').pause(500);
    });

    it('should load correct title', function() {
        var title = browser.getTitle();
        assert.equal(title, "SVCA");             
    });

    it('should go to announcements session', function() {
        browser.click('a[data-route=announcements]');
        browser.pause(1000);
        var menuText = browser.getText('.app-name');
        assert.equal(menuText, "重要通啟");
        browser.pause(1000);
    });
});