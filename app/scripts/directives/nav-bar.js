'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:navBar
 * @description
 * # navBar
 */
angular.module('health3App')
  .directive('navBar', function () {
    return {
      templateUrl: 'views/nav-bar.html',
      restrict: 'E',
      replace: true,
      // link: function postLink(scope, element, attrs) {
        
      // }
    };
  });
