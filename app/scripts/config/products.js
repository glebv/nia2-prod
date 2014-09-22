'use strict';

angular.module('health3App')

.config(function($stateProvider){
	$stateProvider
	
	.state('products', {
        url: '/products',
        templateUrl: '/views/products.html',
        controller: 'ProductsCtrl'
      })

      .state('products.view', {
        url: '/',
        templateUrl: '/views/view-products.html',
        controller: function($scope, products){

          products.get($scope.sampleProducts, function(data){
            $scope.products = data;
          });

        }
      })

      .state('products.priced', {
        url: '/priced/:policy/:state/:age/:income',
        templateUrl: '/views/view-products.html',
        controller: function($scope, $rootScope, $stateParams, prices){

          $rootScope.personParams.priced = true;
          $rootScope.personParams.selections = $stateParams;

          var params = 'policy/' + $stateParams.policy + '/state/' + $stateParams.state;

          prices.get($scope.sampleProducts, params, function(data){
            $scope.products = data;
          });

        }
      })

      .state('products.customise', {
        url: '/customise/:product',
        onEnter: function($stateParams, $state, $modal){
          $modal.open({
            templateUrl: '/views/customise-product.html',
            resolve: {
              product: function(){
                return 'product';
              }
            },
            controller: function($scope, product){

            }
          }).result.then(function(result){
            $state.transitionTo('join.start');
          });
        }
      })
});