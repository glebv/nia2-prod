'use strict';

describe('Directive: colourBar', function () {

  // load the directive's module
  beforeEach(module('health3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<colour-bar></colour-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colourBar directive');
  }));
});
