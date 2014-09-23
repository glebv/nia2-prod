'use strict';

/* j */

/**
 * @ngdoc function
 * @name health3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('MainCtrl', function ($scope, $rootScope, $document, $state) {

  	// I STORE PRICE SELECTIONS //
    $rootScope.personParams = {
    	priced: false,
    	selections: {}
    };

    // I AM TO CHECK IF USER HAS BEEN PRICED ALREADY... I DONT WORK YET. //
    $scope.$on('$stateChangeStart', function(evt, to, toParams, from, fromParams){
    	if(to.name === 'products.view' && $rootScope.personParams.priced){
    		$state.go('products.priced');
    	}
    });

    // I AM FOR SCROLLY NAV //
    $scope.scrolling = false;
    var prevScroll = 0;

    $document.on('scroll', function(evt){
      var st = $document.scrollTop();
      
      if(st < 44) scrolling = false;
      else if(st > 44) scrolling = true;

      if(st > prevScroll){
        // down
      } else if (st < prevScroll){
        // up
      }

      prevScroll = st;
    });
  });
