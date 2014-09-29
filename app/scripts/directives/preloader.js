'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:preloader
 * @description
 * # preloader
 */
angular.module('health3App')
  .directive('preloader', function () {
    return {
      templateUrl: 'views/preloader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the preloader directive');
      }
    };
  });
