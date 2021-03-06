'use strict';

describe('Controller: GetpriceCtrl', function () {

  // load the controller's module
  beforeEach(module('health3App'));

  var GetpriceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetpriceCtrl = $controller('GetpriceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
