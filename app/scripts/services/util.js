'use strict';

/**
 * @ngdoc service
 * @name health3App.util
 * @description
 * # util
 * Service in the health3App.
 */
angular.module('health3App')
  .service('Util', function util() {
    return {
    	getWeeklyPrice: function(price){
    		return (price / 365) * 7;
    	},
    	getRebate: function(age, marital, income) {
	      var age1, age2, ager, incomer, rebates, tier1, tier2, tier3;
	      tier1 = 90000;
	      tier2 = 102000;
	      tier3 = 136000;
	      age1 = 65;
	      age2 = 70;
	      rebates = {
	        0: {
	          0: 38.72,
	          1: 33.88,
	          2: 29.04
	        },
	        1: {
	          0: 29.04,
	          1: 24.20,
	          2: 19.36
	        },
	        2: {
	          0: 19.36,
	          1: 14.52,
	          2: 9.68
	        }
	      };
	      if (marital === 'Cpl' || marital === 'Fam' || marital === 'SPFam') {
	        tier1 += tier1;
	        tier2 += tier2;
	        tier3 += tier3;
	      }
	      if (income < tier1) {
	        incomer = 0;
	      } else if (income > tier1 && income < tier2) {
	        incomer = 1;
	      } else if (income > tier2 && income < tier3) {
	        incomer = 2;
	      } else {
	        return 0;
	      }
	      if (age < age1) {
	        ager = 2;
	      } else if (age >= age1 && age < age2) {
	        ager = 1;
	      } else if (age >= age2) {
	        ager = 0;
	      }
	      return rebates[incomer][ager];
	    }
    };
  });
