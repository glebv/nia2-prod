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
  .controller('MainCtrl', function ($scope, $rootScope, $document, $state, $window, Products) {

    //store signupdata
    $rootScope.signupdata = {};
    
  	// I STORE PRICE SELECTIONS //
    $rootScope.personParams = {
    	priced: false,
    	selections: {}
    };

    $rootScope.productsLoaded = false;
    $rootScope.sampleProducts = 'SE60,B65,HCM65,H65,V65';

    // I LOAD BASIC PRODUCT DATA FOR EVERYONE //
    Products.get($rootScope.sampleProducts)
    .then(function(data){
      $rootScope.products = data;
      $rootScope.productsLoaded = true;
    });

    // I AM TO CHECK IF USER HAS BEEN PRICED ALREADY... I DONT WORK YET. //
    $rootScope.$on('$stateChangeStart', function(evt, to){

      to = $state.get('products.priced');

    	if(to.name === 'products.view' && $rootScope.personParams.priced){
    		$state.transitionTo('products.priced');
    	}

    });

    // TRACK PREVIOUS STATE //
    $rootScope.previousState = 'home';
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from){

      $document.scrollTo(0);

      if(from.name === '' && (to.name === 'join.license' || to.name === 'join.medicare' || to.name === 'join.current' || to.name === 'join.confirm' || to.name === 'join.done')) {
        $state.go('join.start');
      }

      $rootScope.previousState = from.name;
    });

    $scope.seeProduct = function(slideIndex){
      $state.go('products.viewOne', {slide: slideIndex});
    };

    $scope.openLivechat = function(){
      $window.LC_API.open_chat_window();
    };
  });
