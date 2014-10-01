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

    $scope.processForm = function(isValid, nextFlag)
    {
      $scope.formInvalid = false;
      $scope.control.submitted = true;

      if(!isValid) {
        return false;
      }

      if(nextFlag === undefined) {
        $rootScope.signupdata.u = $scope.u;
        $state.go('join.license');
        return false;
      }

      //save the form goes here
      $state.go('join.done');
    }

  })

  .controller('JoinLicenseCtrl', function ($scope, $rootScope, $upload, $modal, $state){
    
    $scope.license = {};
    $scope.license.image = '';
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
          //store image temporarily until api gets ready
          var reader = new FileReader();
          reader.onload = function(e) {
            $scope.license.image = e.target.result;
          };
          reader.readAsDataURL(file);

          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-license.html',
            controller: 'JoinLicenseModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            $scope.license.isCorrectAddress = !data || false;
            $scope.license.correctAddress = data;
            $rootScope.signupdata.license = $scope.license;
            $state.go($scope.page.next);
          });

        });        

      });
    }

  })

  .controller('JoinMedicareCtrl', function ($scope, $rootScope, $upload, $modal, $state){

    $scope.medicare = {};
    $scope.medicare.image = [];
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
          //store image temporarily until api gets ready
          var reader = new FileReader();
          reader.onload = function(e) {
            $scope.medicare.image = e.target.result;
          };
          reader.readAsDataURL(file);

          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-medicare.html',
            controller: 'JoinMedicareModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            $scope.medicare.additionalPeople = (data.length > 0) || false;
            $scope.medicare.people = (data.length > 0)? data : '';
            $rootScope.signupdata.medicare = $scope.medicare;
            $state.go($scope.page.next);
          });

        });        

      });
    }
  })

  .controller('JoinCurrentInsurerCtrl', function ($scope, $rootScope, $upload, $modal, $state, $sce){

    $scope.current = {};
    $scope.current.image = '';
    $scope.current.hasCurrentInsurance = false;
    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;

    $scope.page = {
      title: 'Snap a photo of your current insurance card',
      desc : $sce.trustAsHtml("<strong>If you have one.</strong> We use this to switch you over easily."),
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
          //store image temporarily until api gets ready
          var reader = new FileReader();
          reader.onload = function(e) {
            $scope.current.image = e.target.result;
          };
          reader.readAsDataURL(file);

          //show the dialog content and get correct address
          var modalInstance = $modal.open({
            templateUrl: 'views/join-confirm-insurer.html',
            controller: 'JoinInsurerModalCtrl'            
          });

          modalInstance.result.then(function(data) {
            $scope.current.everyoneOnPolicy = data || false;
            $rootScope.signupdata.current = $scope.current;
            $state.go($scope.page.next);
          });

        });        

      });
    };

    $scope.setInsuranceStatus = function() {
      $scope.current.everyoneOnPolicy = false;
      $scope.current.hasCurrentInsurance = true;
      $rootScope.signupdata.current = $scope.current;
      $state.go($scope.page.next);
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
    };

    $scope.showAlternateText = function() {
      $scope.isAlternateText = !$scope.isAlternateText;
    };    

  })

  .controller('JoinMedicareModalCtrl', function ($scope, $state, $modalInstance) {

    $scope.people = [{ name: '' }];
    $scope.isAlternateText = false;

    $scope.addNew = function (){
      $scope.people.push({ name: '' });
    };

    $scope.closeModal = function() {
      $modalInstance.close(angular.copy($scope.people));
    };

    $scope.showAlternateText = function() {
      $scope.isAlternateText = !$scope.isAlternateText;
    };    

  })

  .controller('JoinInsurerModalCtrl', function ($scope, $state, $modalInstance) {

    $scope.closeModal = function(flag) {
      $modalInstance.close(flag);
    };

  });
