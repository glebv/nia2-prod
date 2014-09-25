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

    $rootScope.productsLoaded = false;
    $rootScope.sampleProducts = 'SE60,B65,HCM65,H65,V65';

    // I AM TO CHECK IF USER HAS BEEN PRICED ALREADY... I DONT WORK YET. //
    $rootScope.$on('$stateChangeStart', function(evt, to){

      $document.scrollTo(0);

    	if(to.name === 'products.view' && $rootScope.personParams.priced){
    		$state.go('products.priced');
    	}
    });

    // TRACK PREVIOUS STATE //
    $rootScope.previousState = 'home';
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from){
      $rootScope.previousState = from.name;
    });
  });
