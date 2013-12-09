
/**
 * Module dependencies.
 */

var open = require('open-window');

/**
 * Expose `tweet`.
 */

module.exports = tweet;

/**
 * Open tweet box in new window.
 */

function tweet(url, text) {
  return open('https://twitter.com/share'
    + '?url=' + encodeURIComponent(url)
    + '&text=' + encodeURIComponent(text));
}