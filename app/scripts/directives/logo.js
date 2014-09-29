'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:logo
 * @description
 * # logo
 */
angular.module('health3App')
  .directive('logo', function () {
    return {
      template: '<span class="logo glypha">health.com.au</span>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the logo directive');
      }
    };
  });
