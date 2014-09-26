'use strict';

describe('Filter: slugify', function () {

  // load the filter's module
  beforeEach(module('health3App'));

  // initialize a new instance of the filter before each test
  var slugify;
  beforeEach(inject(function ($filter) {
    slugify = $filter('slugify');
  }));

  it('should return the input prefixed with "slugify filter:"', function () {
    var text = 'angularjs';
    expect(slugify(text)).toBe('slugify filter: ' + text);
  });

});
