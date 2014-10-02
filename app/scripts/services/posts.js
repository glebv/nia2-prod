'use strict';

/*global _ */

/**
 * @ngdoc service
 * @name health3App.products
 * @description
 * # products
 * Service in the health3App.
 */
angular.module('health3App')
  .factory('Posts', function posts($http, $q) {
    return {
    	get: function(){
        var defer = $q.defer();
        $http.get('http://nia.wp/wp-json/posts')
		  	.success(function(results){
          		defer.resolve(results);
        	})
	        .error(function(){
	          defer.reject();
	        });

	        return defer.promise;
    	}
    };
  });