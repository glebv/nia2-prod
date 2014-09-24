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
    
    // $scope.products = {};
  	$scope.sampleProducts = 'SE60,B65,HCM65,H85,V65';

  })

  .controller('ProductsViewCtrl', function ($scope, products){
    $scope.productsLoaded = false;
  	products.get($scope.sampleProducts, function(data){
      $scope.products = data;
      $scope.productsLoaded = true;
    });
  })

  .controller('ProductsPricedCtrl', function ($scope, $rootScope, $stateParams, prices){
  	$rootScope.personParams.priced = true;
    $rootScope.personParams.selections = $stateParams;
    $scope.productsLoaded = false;

    var params = 'policy/' + $stateParams.policy + '/state/' + $stateParams.state;

    prices.get($scope.sampleProducts, params, function(data){
      $scope.products = data;
      $scope.productsLoaded = true;
    });
  })

  .controller('ProductsCustomiseCtrl', function ($scope, product){

  });
 