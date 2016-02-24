var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('my webdriverio tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            client.init(done);
    });

    it('should open CTC page', function() {
        return client.url('http://student3-test.cedartc.org/').pause(500);
    });

    it('should login the CTC home page', function(done) {
        client
            .setValue('#Email', 's9901@cedartc.org')
            .pause(1000)
            .click('#next')
            .pause(1000)
            .setValue('#Passwd', 'ctc_9901')
            .pause(1000)
            .click('#signIn')
            .pause(500);
    });

    it('should load correct title', function() {
        return 
            client
                .getTitle(function(err, title) {
                    assert(err === undefined);
                    assert(title === '柏訓學員網');
                    console.log(title);
                });
    });

/*    it('Change debug user', function(done) {
        client
            .getTitle(function(err, title) {
                assert(err === undefined);
                assert(title === '柏訓學員網');
            });
            .setValue('#debugUserId', 's9901')
            .pause(1000)

            .getValue('#debugUserId').then (function(e) {
                assert(e === 's9901');
                console.log("Debug user ID: " + e);
            })
            .call(done);
    });
*/
    after(function(done) {
        client.end(done);
    });
});