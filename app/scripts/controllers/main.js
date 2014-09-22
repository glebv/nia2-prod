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
  .controller('MainCtrl', function ($scope, $rootScope, $state) {

  	// GLOBALLY STORE PRICE SELECTIONS //
    $rootScope.personParams = {
    	priced: false,
    	selections: {}
    };

    $scope.$on('$stateChangeStart', function(evt, to, toParams, from, fromParams){

    	if(to.name === 'products.view' && $rootScope.personParams.priced){
    		$state.go('products.priced');
    	}
    });
  });
