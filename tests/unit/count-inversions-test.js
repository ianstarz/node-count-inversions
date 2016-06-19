'use strict';

var assert = require('chai').assert;
var count = require('../../index');

describe('countInversions', function() {
  it('should count the correct number of inversions in an array', function() {
    assert.equal(0, count([]).inversions);
    assert.equal(0, count([1]).inversions);
    assert.equal(0, count([1, 2]).inversions);
    assert.equal(0, count([1, 2, 2, 3, 3, 3]).inversions);
    assert.equal(0, count([1, 1, 1, 1, 1, 1]).inversions);

    assert.equal(0,  count([1, 2, 3, 4, 5, 6]).inversions);
    assert.equal(1,  count([1, 2, 3, 4, 6, 5]).inversions);
    assert.equal(2,  count([1, 2, 3, 6, 4, 5]).inversions);
    assert.equal(3,  count([1, 2, 6, 3, 4, 5]).inversions);
    assert.equal(4,  count([1, 6, 2, 3, 4, 5]).inversions);
    assert.equal(5,  count([6, 1, 2, 3, 4, 5]).inversions);
    assert.equal(6,  count([6, 1, 2, 3, 5, 4]).inversions);
    assert.equal(7,  count([6, 1, 2, 5, 3, 4]).inversions);
    assert.equal(8,  count([6, 1, 5, 2, 3, 4]).inversions);
    assert.equal(9,  count([6, 5, 1, 2, 3, 4]).inversions);
    assert.equal(10, count([6, 5, 1, 2, 4, 3]).inversions);
    assert.equal(11, count([6, 5, 1, 4, 2, 3]).inversions);
    assert.equal(12, count([6, 5, 4, 1, 2, 3]).inversions);
    assert.equal(13, count([6, 5, 4, 1, 3, 2]).inversions);
    assert.equal(14, count([6, 5, 4, 3, 1, 2]).inversions);
    assert.equal(15, count([6, 5, 4, 3, 2, 1]).inversions);

    assert.equal(0, count([289, 2378, 98950]).inversions);
    assert.equal(6, count([4676, 50, 49, 49, 50, 58989]).inversions);
  });
});
