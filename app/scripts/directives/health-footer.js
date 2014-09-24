'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:healthFooter
 * @description
 * # healthFooter
 */
angular.module('health3App')
  .directive('healthFooter', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
