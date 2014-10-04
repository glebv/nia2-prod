'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('JoinCtrl', function ($scope, $rootScope, $upload, $modal, $state, Signup) {
    $scope.u = {};
    $scope.processForm = function() {
      Signup.setUser($scope.u);
      $state.go($state.current.data.nextStep);
    };
  })

  .controller('JoinLicenseCtrl', function ($scope, $rootScope, $upload, $modal, $state, Signup) {
    $scope.onFileUploaded = function (file) {
      //show the dialog content and get correct address
      $modal.open({
        templateUrl: 'views/join-confirm-license.html',
        controller: 'JoinLicenseModalCtrl'
      }).result.then(function (data) {
        Signup.setLicense({
          image: file,
          correctAddress: data
        });
        $state.go($state.current.data.nextStep);
      });
    };
  })

  .controller('JoinMedicareCtrl', function ($scope, $rootScope, $upload, $modal, $state, Signup) {
    $scope.onFileUploaded = function (file) {
      //show the dialog content and get correct address
      $modal.open({
        templateUrl: 'views/join-confirm-medicare.html',
        controller: 'JoinMedicareModalCtrl'
      }).result.then(function (data) {
        Signup.setMedicare({
          image: file,
          people: data
        });
        $state.go($state.current.data.nextStep);
      });
    };
  })

  .controller('JoinCurrentInsurerCtrl', function ($scope, $rootScope, $upload, $modal, $state, Signup){

    $scope.onFileUploaded = function (file) {
      //show the dialog content and get correct address
      $modal.open({
        templateUrl: 'views/join-confirm-insurer.html',
        controller: 'JoinInsurerModalCtrl'
      }).result.then(function (data) {
        Signup.setCurrent({
          image: file,
          everyoneOnPolicy: data
        });
        $state.go($state.current.data.nextStep);
      });
    };
    $scope.setInsuranceStatus = function() {
      Signup.setCurrent({
        everyoneOnPolicy: false,
        hasCurrentInsurance: true
      });
      $state.go($state.current.data.nextStep);
    };
  })

  .controller('JoinConfirmCtrl', function($scope, Signup) {
    $scope.signupdata = Signup.get();
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
