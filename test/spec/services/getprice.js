'use strict';

describe('Service: getprice', function () {

  // load the service's module
  beforeEach(module('health3App'));

  // instantiate service
  var getprice;
  beforeEach(inject(function (_getprice_) {
    getprice = _getprice_;
  }));

  it('should do something', function () {
    expect(!!getprice).toBe(true);
  });

});
