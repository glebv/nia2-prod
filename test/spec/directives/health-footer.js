'use strict';

describe('Directive: healthFooter', function () {

  // load the directive's module
  beforeEach(module('health3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<health-footer></health-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the healthFooter directive');
  }));
});
