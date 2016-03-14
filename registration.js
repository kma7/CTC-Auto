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

    //Doesn't work yet. Finding way to locate Polymer element
    it('should go to Registration session', function() {
        return client
            .pause(500)
            .execute(function(){
                return document.getElementsByTagName('ctc-template')[0].shadowRoot.getElementById('sideMenu').shadowRoot.getElementById('user-id');
            }).then(function(res) {
                console.log(res.value);
            })
            .pause(500);
    });
    //Done Automation Test
    it('finish automatically testing Registration page', function(done) {
        client.call(done);
    });

    after(function(done) {
        client.end(done);
    });
});