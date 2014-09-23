'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:GetpriceCtrl
 * @description
 * # GetpriceCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('PriceCtrl', function ($scope, prices) {
    // SET OPTIONS //
    $scope.options = prices.options;

    $scope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){

			_.each(fromParams, function(val, key){
				toParams[key] = val;
				$scope.personParams.selections[key] = val;
			});

		});
  })

  .controller('PricePolicyCtrl', function($scope){
  	$scope.page = {
      title: 'What best describes you?',
      type: 'policy',
      next: 'get-price.state',
      options: $scope.options.policy
    };
  })

  .controller('PriceStateCtrl', function($scope){
  	$scope.page = {
      title: 'Where do you live?',
      type: 'state',
      next: 'get-price.age',
      options: $scope.options.state            
    }
  })

  .controller('PriceAgeCtrl', function($scope){
  	$scope.page = {
      title: 'How old are you?',
      type: 'age',
      next: 'get-price.income',
      options: $scope.options.age
    }
  })

  .controller('PriceIncomeCtrl', function($scope, $stateParams){
  	var marital = $scope.personParams.selections.policy === 'Sgl' ? 'single' : 'house';

    $scope.page = {
      title: 'How much do you earn?',
      type: 'income',
      next: 'products.priced',
      options: $scope.options.income[marital]         
    }
  });
