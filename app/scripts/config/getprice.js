'use strict';

angular.module('health3App')
.config(function($stateProvider){
	$stateProvider
	.state('get-price', {
    url: '/get-price',
    templateUrl: '/views/getprice.html',
    controller: 'PriceCtrl'
  })

  .state('get-price.policy', {
    url: '/',
    templateUrl: '/templates/list-select.html',
    controller: function($scope){
      $scope.page = {
        title: 'What best describes you?',
        type: 'policy',
        next: 'get-price.state',
        options: $scope.options.policy
      };
    }
  })

  .state('get-price.state', {
    url: '/:policy',
    templateUrl: '/templates/list-select.html',
    controller: function($scope){
      $scope.page = {
        title: 'Where do you live?',
        type: 'state',
        next: 'get-price.age',
        options: $scope.options.state            
      }
    }
  })

  .state('get-price.age', {
    url: '/:policy/:state',
    templateUrl: '/templates/list-select.html',
    controller: function($scope){
      $scope.page = {
        title: 'How old are you?',
        type: 'age',
        next: 'get-price.income',
        options: $scope.options.age
      }
    }
  })

  .state('get-price.income', {
    url: '/:policy/:state/:age',
    templateUrl: '/templates/list-select.html',
    controller: function($scope, $stateParams){

      var marital = $scope.personParams.selections.policy === 'Sgl' ? 'single' : 'house';

      $scope.page = {
        title: 'How much do you earn?',
        type: 'income',
        next: 'products.priced',
        options: $scope.options.income[marital]         
      }
    }
  })
})