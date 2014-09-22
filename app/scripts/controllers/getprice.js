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
  });
