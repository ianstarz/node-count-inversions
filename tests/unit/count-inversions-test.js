'use strict';

var assert = require('chai').assert;
var count = require('../../index');

describe('countInversions', function() {
  it('should count the correct number of inversions in an array', function() {
    assert.equal( 0, count([]));
    assert.equal( 0, count([1]));
    assert.equal( 0, count([1, 2]));
    assert.equal( 0, count([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    assert.equal( 0, count([1, 2, 2, 3, 3, 3, 4, 4, 4]));
    assert.equal( 0, count([1, 1, 1, 1, 1, 1, 1, 1, 1]));
  });
});
