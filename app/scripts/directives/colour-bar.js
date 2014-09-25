'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:colourBar
 * @description
 * # colourBar
 */
angular.module('health3App')
  .directive('colourBar', function () {
    return {
      templateUrl: 'views/colour-bar.html',
      restrict: 'E',
      link: function postLink() {
        // element.text('this is the colourBar directive');
      }
    };
  });
