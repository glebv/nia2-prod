'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:ephemeralMessage
 * @description
 * # ephemeralMessage
 */
angular.module('health3App')
  .directive('ephemeral', function ($timeout, $window) {
    return {
      templateUrl: 'views/ephemeral.html',
      restrict: 'E',
      replace: true,
      scope: {
      	message: '@',
      	time: '@',
      	color: '@'
      },
      link: function postLink(scope, element, attrs) {
        
        var s = scope.time.replace(/\D/g, '');
        var ms = (s * 1000) + 500;

        $timeout(function(){
        	element.addClass('done');
        }, ms);

        $timeout(function(){
        	element.remove();
        }, ms + 300);

      }
    };
  });
