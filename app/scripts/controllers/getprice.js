'use strict';

/*global _ */

/**
 * @ngdoc function
 * @name health3App.controller:GetpriceCtrl
 * @description
 * # GetpriceCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('PriceCtrl', function ($scope, Prices) {
    // SET OPTIONS //
    $scope.options = Prices.options;

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
      desc: '',
      type: 'policy',
      next: 'get-price.state',
      options: $scope.options.policy
    };
  })

  .controller('PriceStateCtrl', function($scope){
  	$scope.page = {
      title: 'Where do you live?',
      desc: '',
      type: 'state',
      next: 'get-price.age',
      options: $scope.options.state            
    };
  })

  .controller('PriceAgeCtrl', function($scope){
  	$scope.page = {
      title: 'How old are you?',
      desc: '',
      type: 'age',
      next: 'get-price.income',
      options: $scope.options.age
    };
  })

  .controller('PriceIncomeCtrl', function($scope){
  	var marital = $scope.personParams.selections.policy === 'Sgl' ? 'single' : 'house';

    $scope.page = {
      title: 'How much do you earn?',
      desc: 'We use this so we can give you the biggest possible rebate on your policy!',
      type: 'income',
      next: 'products.priced',
      options: $scope.options.income[marital]         
    };
  });
