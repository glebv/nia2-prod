'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:reason
 * @description
 * # reason
 */
angular.module('health3App')
  .directive('reason', function ($sce) {
    return {
      templateUrl: 'views/reason.html',
      restrict: 'E',
      scope: {
      	content: '='
      },
      link: function postLink(scope, element, attrs) {

        scope.state = {
        	num: 1
        };

        angular.forEach(scope.content, function(v){
        	$sce.trustAsHtml(v.text);
        })

        scope.nextPanel = function(){
        	scope.state.num++;
          if (scope.state.num > scope.content.length){
            scope.state.num = 1;
          }
        };
      }
    };
  });
