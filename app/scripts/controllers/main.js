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
  .controller('MainCtrl', function ($scope, $rootScope, $document, $state, products) {

  	// I STORE PRICE SELECTIONS //
    $rootScope.personParams = {
    	priced: false,
    	selections: {}
    };

    $rootScope.productsLoaded = false;
    products.get($scope.sampleProducts, function(data){
      $rootScope.products = data;
      $rootScope.productsLoaded = true;
    });

    // I AM TO CHECK IF USER HAS BEEN PRICED ALREADY... I DONT WORK YET. //
    $scope.$on('$stateChangeStart', function(evt, to, toParams, from, fromParams){

      $document.scrollTo(0);

    	if(to.name === 'products.view' && $rootScope.personParams.priced){
    		$state.go('products.priced');
    	}
    });

  });
