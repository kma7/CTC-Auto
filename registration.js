var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('my webdriverio tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            client.init(done);
    });

    it('Login',function(done) {
        client
            .url('http://student3-test.cedartc.org/')
            .setValue('#Email', 's9901@cedartc.org')
            .pause(1000)
            .click('#next')
            .pause(1000)
            .setValue('#Passwd', 'ctc_9901')
            .pause(1000)
            .click('#signIn')
            .pause(1000)
            .setValue('#debugUserId', 's9901')
            .refresh()
            .call(done);

    });

    after(function(done) {
        client.end(done);
    });
});