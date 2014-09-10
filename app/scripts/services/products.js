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
    	get: function(callback){
			$http.get('http://health.dev/api/products-sample')
			  	.success(function(results){
			  		callback(results);
			  	});
    	}
    }
  });
