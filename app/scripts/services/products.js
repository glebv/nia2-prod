'use strict';

/**
 * @ngdoc service
 * @name health3App.products
 * @description
 * # products
 * Service in the health3App.
 */
angular.module('health3App')
  .service('products', function products($http) {
    return {
    	get: function(skus, callback){
			$http.get('http://niahealthdata.com/api/products-sample/products/' + skus)
			  	.success(function(results){
			  		callback(results);
			  	});
    	}
    }
  });
SE60,B65,HCM65,H85,V65