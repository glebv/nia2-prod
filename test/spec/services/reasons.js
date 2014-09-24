'use strict';

describe('Service: reasons', function () {

  // load the service's module
  beforeEach(module('health3App'));

  // instantiate service
  var reasons;
  beforeEach(inject(function (_reasons_) {
    reasons = _reasons_;
  }));

  it('should do something', function () {
    expect(!!reasons).toBe(true);
  });

});
