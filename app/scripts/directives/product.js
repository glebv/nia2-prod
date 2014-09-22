'use strict';
/* global _ */
/**
 * @ngdoc directive
 * @name health3App.directive:product
 * @description
 * # product
 */
angular.module('health3App')
  .directive('product', function ($state, $rootScope) {
    return {
      templateUrl: 'views/product.html',
      restrict: 'E',
      scope: {
      	product: '='
      },
      link: function(scope) {

        scope.showDetails = false;

        scope.priced = $state.current.name === "products.priced" ? true : false;

        scope.hospitals = function(slug){
        	return _.filter(scope.product.hospitals, function(h){
        		return h.covered_slug === slug;
        	});
        };

        scope.showInfo = function(panel){
          if(panel === 'details') scope.showDetails = true;
          else scope.showDetails = false;
        };

        scope.getUserDetails = function(){
          $state.go('get-price.policy');
        };

        scope.joinNow = function(){
          $rootScope.product = scope.product;
          $state.go('join.start');
        }

        scope.weeklyPrice = function(){
          var product = scope.product;
          if(product.rate){

            var weeklyPrice = ((product.rate.price / 365) * 7).toFixed(2);
            var rebatePercentage = scope.getRebatePercentage($rootScope.personParams.selections);
            var rebateDiscount = (weeklyPrice / 100) * rebatePercentage;
            var weeklyPriceDiscounted = weeklyPrice - rebateDiscount;

            return weeklyPriceDiscounted.toFixed(2);

          } else {
            return 'minimum_price';
          }
        }

        scope.getRebatePercentage = function(selections){

          if(selections.income === "tier4") return 0;

          var income = selections.income,
              age = selections.age,
              policy = selections.policy,
              ageTier;

          var rebates = {
            tier1: {
              0: 38.72,
              1: 33.88,
              2: 29.04
            },
            tier2: {
              0: 29.04,
              1: 24.20,
              2: 19.36
            },
            tier3: {
              0: 19.36,
              1: 14.52,
              2: 9.68
            }
          };

          if(age === "18-30" || age === "31-65") ageTier = 2;
          else if(age === "65-70") ageTier = 1;
          else if(age === "71-100") ageTier = 0;

          return rebates[income][ageTier];

        }
      } 
    };
  });
