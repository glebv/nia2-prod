'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:testimonialSlider
 * @description
 * # testimonialSlider
 */
angular.module('health3App')
  .directive('testimonialSlider', function ($interval) {
    return {
      templateUrl: 'views/testimonial-slider.html',
      restrict: 'E',
      scope: {
      	items: '='
      },
      link: function postLink(scope, element, attrs) {

      	scope.currentIndex = 0;

      	function changeOnInterval(){
      		var newIndex = scope.currentIndex++;
      		if(newIndex >= scope.items.length) newIndex = 0;
      		scope.currentIndex = newIndex;
      	}

      	scope.isCurrentSlideIndex  = function(index){ return scope.currentIndex === index; };
      	scope.setCurrentSlideIndex = function(index){ scope.currentIndex = index; };

      	$interval(changeOnInterval, 500);
        
      }
    };
  });
