'use strict';

describe('Service: Signup', function () {

  // load the service's module
  beforeEach(module('health3App'));

  // instantiate service
  var Signup;
  beforeEach(inject(function (_Signup_) {
    Signup = _Signup_;
  }));

  it('should do something', function () {
    expect(!!Signup).toBe(true);
  });

});
