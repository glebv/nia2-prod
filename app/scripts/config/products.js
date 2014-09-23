'use strict';

angular.module('health3App')

.config(function($stateProvider){
	$stateProvider
	
	.state('products', {
        url: '/products',
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })

      .state('products.view', {
        url: '/',
        templateUrl: 'views/view-products.html',
        controller: 'ProductsViewCtrl'
      })

      .state('products.priced', {
        url: '/priced/:policy/:state/:age/:income',
        templateUrl: 'views/view-products.html',
        controller: 'ProductsPricedCtrl'
      })

      .state('products.customise', {
        url: '/customise/:product',
        onEnter: function($stateParams, $state, $modal){
          $modal.open({
            templateUrl: 'views/customise-product.html',
            resolve: {
              product: function(){
                return 'product';
              }
            },
            controller: 'ProductsCustomiseCtrl',
          }).result.then(function(result){
            $state.transitionTo('join.start');
          });
        }
      })
});