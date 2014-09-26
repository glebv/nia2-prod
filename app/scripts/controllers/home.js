'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('HomeCtrl', function ($scope, $rootScope, $state, Testimonials, Reasons) {
    $scope.testimonials = Testimonials.testimonials;
    $scope.reasons = Reasons.reasons;
  });
