'use strict';

/* global _ */

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
        $state.go($state.current.data.nextStep);
        return false;
      }

      //save the form goes here
      $state.go('join.done');
    };

  })

  .controller('JoinLicenseCtrl', function ($scope, $rootScope, $upload, $modal, $state){
    
    $scope.license = {};
    $scope.license.image = '';

    $scope.onFileUploaded = function(file) {

      $scope.license.image = file;

      //show the dialog content and get correct address
      var modalInstance = $modal.open({
        templateUrl: 'views/join-confirm-license.html',
        controller: 'JoinLicenseModalCtrl'
      });

      modalInstance.result.then(function(data) {
        $scope.license.isCorrectAddress = !data || false;
        $scope.license.correctAddress = data;
        $rootScope.signupdata.license = $scope.license;
        $state.go($state.current.data.nextStep);
      });
    };

  })

  .controller('JoinMedicareCtrl', function ($scope, $rootScope, $upload, $modal, $state) {

    $scope.medicare = {};
    $scope.medicare.image = [];

    $scope.onFileUploaded = function (file) {
      $scope.medicare.image = file;

      //show the dialog content and get correct address
      var modalInstance = $modal.open({
        templateUrl: 'views/join-confirm-medicare.html',
        controller: 'JoinMedicareModalCtrl'
      });

      modalInstance.result.then(function (data) {
        $scope.medicare.additionalPeople = (data.length > 0) || false;
        $scope.medicare.people = (data.length > 0) ? data : '';
        $rootScope.signupdata.medicare = $scope.medicare;
        $state.go($state.current.data.nextStep);
      });

    };

  })

  .controller('JoinCurrentInsurerCtrl', function ($scope, $rootScope, $upload, $modal, $state){

    $scope.current = {};
    $scope.current.image = '';
    $scope.current.hasCurrentInsurance = false;

    $scope.onFileUploaded = function (file) {
      $scope.current.image = file;

      //show the dialog content and get correct address
      var modalInstance = $modal.open({
        templateUrl: 'views/join-confirm-insurer.html',
        controller: 'JoinInsurerModalCtrl'
      });

      modalInstance.result.then(function(data) {
        $scope.current.everyoneOnPolicy = data || false;
        $rootScope.signupdata.current = $scope.current;
        $state.go($state.current.data.nextStep);
      });
    };

    $scope.setInsuranceStatus = function() {
      $scope.current.everyoneOnPolicy = false;
      $scope.current.hasCurrentInsurance = true;
      $rootScope.signupdata.current = $scope.current;
      $state.go($state.current.data.nextStep);
    };

  })

  .controller('JoinLicenseModalCtrl', function ($scope, $state, $modalInstance) {
    $scope.closeModal = function(correctAddress) {
      $modalInstance.close(correctAddress);
    };
  })

  .controller('JoinMedicareModalCtrl', function ($scope, $state, $modalInstance) {
    $scope.people = [{ name: '' }];

    $scope.closeModal = function(people) {
      $modalInstance.close(people);
    };
  })

  .controller('JoinInsurerModalCtrl', function ($scope, $state, $modalInstance) {
    $scope.closeModal = function(flag) {
      $modalInstance.close(flag);
    };
  });
