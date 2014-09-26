'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('ProductsCtrl', function () {
    
  })

  .controller('ProductsViewCtrl', function ($scope, $rootScope, $stateParams, Products){

    $scope.slideIndex = 0;

    if(!$rootScope.products){

      $rootScope.productsLoaded = false;
      Products.get($rootScope.sampleProducts)
      .then(function(data){
        $rootScope.products = data;
        $rootScope.productsLoaded = true;

        $scope.visibleProducts = angular.copy(data);
        $scope.visibleProducts.push({ name: 'empty' });
      });

    } else {
      $scope.visibleProducts = angular.copy($rootScope.products);
      $scope.visibleProducts.push({ name: 'empty' });
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
      $rootScope.products = data;
      $rootScope.productsLoaded = true;

      // create a copy so we can inject the extra slide
      // without disrupting the products object
      $scope.visibleProducts = angular.copy($rootScope.products);
      $scope.visibleProducts.push({ name: 'empty' });
    });

  })

  .controller('ProductPriceDetailCtrl', function ($scope, product, data){
    $scope.product = product;
    $scope.data = data;
  });

  // .controller('ProductsCustomiseCtrl', function ($scope, product){

  // });
 