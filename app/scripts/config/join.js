'use strict';

angular.module('health3App')
.config(function($stateProvider){
  
	$stateProvider
	.state('join', {
    url: '/join',
    templateUrl: 'views/join.html',
    controller: 'JoinCtrl'
  })

  .state('join.start', {
    url: '/',
    templateUrl: 'views/join-start.html'
  })

  .state('join.license', {
    url: '/drivers-license',
    templateUrl: 'views/join-upload.html',
    controller: 'JoinLicenseCtrl'
  })

  .state('join.medicare', {
    url: '/medicare-card',
    templateUrl: 'views/join-upload.html',
    controller: 'JoinMedicareCtrl'
  })

  .state('join.current', {
    url: '/current-insurer',
    templateUrl: 'views/join-upload.html',
    controller: 'JoinCurrentInsurerCtrl'
  })

  .state('join.confirm', {
    url: '/confirm',
    templateUrl: 'views/join-confirm.html'
  })

  .state('join.done', {
    url: '/done',
    templateUrl: 'views/join-done.html'
  });

});