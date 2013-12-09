var twitterShare = 'undefined' == typeof window
  ? require('..')
  : require('twitter-share'); // how to do this better?

var assert = require('assert');

describe('twitterShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
