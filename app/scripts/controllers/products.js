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
  	products.get($scope.sampleProducts, function(data){
      $scope.products = data;
    });
  })

  .controller('ProductsPricedCtrl', function ($scope, $rootScope, $stateParams, prices){
  	$rootScope.personParams.priced = true;
    $rootScope.personParams.selections = $stateParams;

    var params = 'policy/' + $stateParams.policy + '/state/' + $stateParams.state;

    prices.get($scope.sampleProducts, params, function(data){
      $scope.products = data;
    });
  })

  .controller('ProductsCustomiseCtrl', function ($scope, product){

  });
 