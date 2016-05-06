var helper = require('./helper');
var Application = require('spectron').Application;
var assert = require('assert');

describe('application launch', function() {
  this.timeout(10000);

  beforeEach(function() {
    this.app = new Application({
      path: helper.appPath()
    });
    this.app.start();
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      this.app.stop();
    }
  });

  it('shows an initial window', function() {
    this.app.client.getWindowCount().then(function(count) {
      assert.equal(count, 1);
    });
  });
});