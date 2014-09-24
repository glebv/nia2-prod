'use strict';

describe('Service: Testimonials', function () {

  // load the service's module
  beforeEach(module('health3App'));

  // instantiate service
  var Testimonials;
  beforeEach(inject(function (_Testimonials_) {
    Testimonials = _Testimonials_;
  }));

  it('should do something', function () {
    expect(!!Testimonials).toBe(true);
  });

});
