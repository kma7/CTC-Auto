var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('registration tests', function(){

    this.timeout(99999999);
    var client = {};
    before(function(done){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            client.init(done);
    });

    it('should open mobile site home page', function() {
        return client.url('http://m2.dev.svca.cc/').pause(500);
    });

    it('should load correct title', function() {
        return client
            .getTitle(function(err, title) {
                assert(err === undefined);
                assert(title === "SVCA");
            });              
    });

    it('should go to announcements session', function() {
        return client
            .click('a[data-route=announcements]')
            .pause(500)
            .getText('.app-name', function(err, text) {
                assert(err === undefined);
                assert(text === "重要通啟");
            });
    });

    it('should return bottom bar text', function() {
        return client
            .getText('#bottomBar*=Silicon Valley', function(err, text) {
                console.log(text);
                assert(err === undefined);
                assert(text === "Silicon Valley Christian Assembly");
            });
    });

    //Done Automation Test
    it('finish automatically testing Registration page', function(done) {
        client.call(done);
    });

    after(function(done) {
        client.end(done);
    });
});