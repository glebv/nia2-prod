'use strict';

/*global _ */

/**
 * @ngdoc function
 * @name health3App.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('JoinCtrl', function ($scope, $rootScope, $upload, $modal, $state) {

    $scope.u = {};
    $scope.u.images = [];
    $scope.control = {};
    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;
    $scope.control.submitted = false;
    $scope.product = $rootScope.product;
    var counter = 0;

    $scope.onFileSelect = function($files){
    	_.each($files, function(file){

        //check for image file type
        var typeValid = file.type.match(/(?:jpe?g|png)/);
        $scope.fileUpload.isValid = true;
        
        if(typeValid === null) {
          $scope.fileUpload.isValid = false;
          return false;
        }

    		$scope.upload = $upload.upload({
    			url: '/upload-script',
    			file: file
    			// data: { myObj: $scope.my }
    		})
    		.progress(function(evt){
    			console.log(parseInt(evt.loaded / evt.total));
    		})
    		.success(function(){
    			// data, status, headers, config = file uploaded args
    		})
        .error(function() {
          
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm.html',
            controller: 'JoinConfirmCtrl'
          });

          modalInstance.result.then(function(data) {
            $scope.u.alternateText = data.alternateText;
            
            //if no alternate text has been set, set the image
            if(!$scope.u.alternateText) {
              var reader = new FileReader();
              reader.onload = function(e) {
                $scope.u.images.push(e.target.result);
              };
              reader.readAsDataURL(file);
            }

            counter++;
            if(counter == 2) {
              $state.go('join.complete');
            }

          }, function() {
            console.log('Some weird thing happened');
          });

        });
    	});

    };

    $scope.process = function(isValid, nextFlag)
    {
      $scope.formInvalid = false;
      $scope.control.submitted = true;

      if(!isValid) {
        return false;
      }

      if(nextFlag === undefined) {
        $state.go('join.license');
      }
      else {
  
        if(!$scope.u.name) {
          $scope.formInvalid = true;
          return false;
        }
        console.log($scope.u);
        //save the form
        $state.go('join.done');
      }
    }

  })

  .controller('JoinLicenseCtrl', function ($scope){
    $scope.page = {
      title: 'Snap a photo of your drivers license',
      desc : 'We use this to easily grab your date of birth and address.',
      next : 'join.medicare',
      type : 'license'
    };
  })

  .controller('JoinMedicareCtrl', function ($scope){
    $scope.page = {
      title: 'Snap a photo of your medicare card',
      desc : 'We use this to grab people who\'ll be on your policy.',
      next : 'join.current',
      type : 'medicare'
    };
  })

  .controller('JoinCurrentInsurerCtrl', function ($scope){
    $scope.page = {
      title: 'Snap a photo of your current insurance card',
      desc : '<strong>If you have one.</strong> We use this to switch you over easily.',
      next : 'join.confirm',
      type : 'current'
    };
  })

  .controller('JoinLicense', function ($scope, $state, $modalInstance) {

      $scope.c = {};
      $scope.c.alternateText = '';
      $scope.isAlternateText = false;

      $scope.closeModal = function() {
        $modalInstance.close($scope.c);
        $state.go('join.medicare');
      }

      $scope.showAlternateText = function() {
        $scope.isAlternateText = !$scope.isAlternateText;
      }

  });

  // .controller('JoinPreviousInsurerCtrl', function ($scope){

  // });
