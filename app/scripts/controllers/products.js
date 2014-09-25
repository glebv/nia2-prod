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

    if($stateParams.productCode){

      // get index from product_code
      var n, productCode = $stateParams.productCode;

      _.find($scope.products, function(p, i){
        alert('fuck');     
      });

    }
  })

  .controller('ProductsPricedCtrl', function ($scope, $rootScope, $stateParams, Prices){

  	$rootScope.personParams.priced = true;
    $rootScope.personParams.selections = $stateParams;
    $rootScope.productsLoaded = false;

    var params = 'policy/' + $stateParams.policy + '/state/' + $stateParams.state;

    prices.get($rootScope.sampleProducts, params)
    .then(function(data){
      $rootScope.products = data;
      $scope.products = data;
      $rootScope.productsLoaded = true;

      console.log($scope);
    });

  })

  .controller('ProductsCustomiseCtrl', function ($scope, product){

  });
 