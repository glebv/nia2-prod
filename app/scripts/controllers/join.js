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

  })

  .controller('JoinLicenseCtrl', function ($scope){
    $scope.page = {
      title: "Snap a photo of your drivers license",
      desc: "We use this to easily grab your date of birth and address.",
      next: 'join.medicare'
    }
  })

  .controller('JoinMedicareCtrl', function ($scope){
    $scope.page = {
      title: "Snap a photo of your medicare card",
      desc: "We use this to grab people who'll be on your policy."
    }
  })

  .controller('JoinPreviousInsurerCtrl', function ($scope){

  });
