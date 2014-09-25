'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:navBar
 * @description
 * # navBar
 */
angular.module('health3App')
  .directive('navBar', function ($document, $window) {
    return {
      templateUrl: 'views/nav-bar.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {

      	// var windowHeight = $window.innerHeight;
      	// var previousScrollPos = 0;

       //  $document.on('scroll', function(){
       //  	var scrollPos = $document.scrollTop();

       //  	if (scrollPos < windowHeight / 2) scope.showBar = true;
       //  	else if (previousScrollPos < scrollPos) scope.showBar = false;
       //  	else scope.showBar = true;

       //  	if(scrollPos > 44) scope.barVisible = true;

       //  	previousScrollPos = scrollPos;
       //  	scope.$apply();
       //  });

      }
    };
  });
