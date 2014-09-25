'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('ProductsCtrl', function ($scope) {
    
  })

  .controller('ProductsViewCtrl', function ($scope, $rootScope, $stateParams, Products){

    $scope.slideIndex = 0;

    if($rootScope.products){

      $scope.products = $rootScope.products;

    } else {

      $rootScope.productsLoaded = false;
      Products.get($rootScope.sampleProducts)
      .then(function(result){
        $scope.products = result;
        $rootScope.products = result;
        $rootScope.productsLoaded = true;
      });

    }

    // if($stateParams.slide) $scope.slideIndex = $stateParams.slide;
  })

  .controller('ProductsPricedCtrl', function ($scope, $rootScope, $stateParams, Prices){

  	$rootScope.personParams.priced = true;
    $rootScope.personParams.selections = $stateParams;
    $rootScope.productsLoaded = false;

    var params = 'policy/' + $stateParams.policy + '/state/' + $stateParams.state;

    Prices.get($rootScope.sampleProducts, params)
    .then(function(data){
      data.push()
      $rootScope.products = data;
      $scope.products = data;
      $rootScope.productsLoaded = true;
    });

  })

  .controller('ProductsCustomiseCtrl', function ($scope, product){

  });
 