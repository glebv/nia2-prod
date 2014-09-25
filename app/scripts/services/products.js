'use strict';

/**
 * @ngdoc service
 * @name health3App.products
 * @description
 * # products
 * Service in the health3App.
 */
angular.module('health3App')
  .factory('Products', function products($http, $q) {
    return {
    	get: function(skus){
        var defer = $q.defer();
        $http.get('http://niahealthdata.com/api/products-sample/products/' + skus)
		  	.success(function(results){
          // convert resulting products to array of objects
          // instead of object containing objects.
          var resultsArray = [];
          _.each(results, function(r){
            resultsArray.push(r);
          })
          defer.resolve(resultsArray);
        })
        .error(function(){
          defer.reject();
        });

        return defer.promise;
    	}
    };
  });