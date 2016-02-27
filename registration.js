var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('registration tests', function(){

    this.timeout(99999999);
    var client = {};
    before(function(done){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            client.init(done);
    });

    it('should open CTC home page', function() {
        return client.url('http://student3-test.cedartc.org/').pause(500);
    });

    it('should login the CTC home page', function() {
        return client
            .setValue('#Email', 's9901@cedartc.org')
            .pause(500)
            .click('#next')
            .pause(500)
            .setValue('#Passwd', 'ctc_9901')
            .pause(500)
            .click('#signIn')
            .pause(1000);
    });

    it('should load correct title', function() {
        return client
            .getTitle(function(err, title) {
                assert(err === undefined);
                assert(title === '柏訓學員網');
            });
            // .saveScreenshot("tmp.png") //get a screenshot then
            // .refresh().then(function() {console.log("refreshed");})
                
    });
/*
    it('set debug user to s9901', function() {
        return 
            client
            .pause(500)
            .setValue('#debugUserId', 's9901');
    });*/

    it('go to Registration session', function() {
        return client
            .url('http://student3-test.cedartc.org/index.html#registration')
            .pause(500);
    });
    //Doesn't work yet. Finding way to locate Polymer element
    it('check registration open or not', function() {
        return client
            .pause(500)
            .click('#registration')
            .pause(500)
            .getText('p', function(err, text){
                console.log(text);
            });
    });
    //Done Automation Test
/*    it('finish automatically testing Registration page', function(done) {
        client.call(done);
    });*/

    after(function(done) {
        client.end(done);
    });
});