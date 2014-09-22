'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('JoinCtrl', function ($scope, $rootScope, $upload) {

    $scope.product = $rootScope.product;

    $scope.onFileSelect = function($files){
    	_.each($files, function(file){
    		$scope.upload = $upload.upload({
    			url: '/upload-script',
    			file: file
    			// data: { myObj: $scope.my }
    		})
    		.progress(function(evt){
    			console.log(parseInt(evt.loaded / evt.total));
    		})
    		.success(function(data, status, headers, config){
    			// file uploaded
    		});
    	})
    };

  });
