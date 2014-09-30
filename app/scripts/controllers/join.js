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
    $scope.control = {};
    $scope.control.submitted = false;

    $scope.process = function(isValid, nextFlag)
    {
      $scope.formInvalid = false;
      $scope.control.submitted = true;

      if(!isValid) {
        return false;
      }

      $rootScope.signupdata.u = $scope.u;

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

  .controller('JoinLicenseCtrl', function ($scope, $rootScope, $upload, $modal, $state){
    
    $scope.license = {};
    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;
    
    $scope.page = {
      title: 'Snap a photo of your drivers license',
      desc : 'We use this to easily grab your date of birth and address.',
      next : 'join.medicare',
      type : 'license'
    };

    //allow to upload a file and enter correct address
    $scope.onFileSelect = function($files) {
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
          $scope.license.image = file.name;
          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-license.html',
            controller: 'JoinLicenseModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            $scope.license.isCorrectAddress = !data || false;
            $scope.license.correctAddress = data;
            $rootScope.signupdata.license = $scope.license;
            console.log($rootScope.signupdata);
          });

        });        

      });
    }

  })

  .controller('JoinMedicareCtrl', function ($scope){

    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;

    $scope.page = {
      title: 'Snap a photo of your medicare card',
      desc : 'We use this to grab people who\'ll be on your policy.',
      next : 'join.current',
      type : 'medicare'
    };

    //allow to upload a file and add additional people
    $scope.onFileSelect = function($files) {
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
          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-medicare.html',
            controller: 'JoinMedicareModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            
          });

        });        

      });
    }
  })

  .controller('JoinCurrentInsurerCtrl', function ($scope){

    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;

    $scope.page = {
      title: 'Snap a photo of your current insurance card',
      desc : '<strong>If you have one.</strong> We use this to switch you over easily.',
      next : 'join.confirm',
      type : 'current'
    };

    //allow to upload a file and prompt for everyone on policy
    $scope.onFileSelect = function($files) {
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
          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-Insurer.html',
            controller: 'JoinInsurerModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            console.log(data);
          });

        });        

      });
    }    
  })

  .controller('JoinLicenseModalCtrl', function ($scope, $state, $modalInstance) {

    $scope.l = {};
    $scope.l.correctAddress = '';
    $scope.isAlternateText = false;

    $scope.closeModal = function(l) {

      if(l !== undefined) {
        $scope.l.correctAddress = l.correctAddress;
      }

      $modalInstance.close($scope.l.correctAddress);
      $state.go('join.medicare');
    }

    $scope.showAlternateText = function() {
      $scope.isAlternateText = !$scope.isAlternateText;
    }    

  });

  // .controller('JoinPreviousInsurerCtrl', function ($scope){

  // });
