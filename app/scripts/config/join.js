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
    url: '/license',
    templateUrl: 'views/join-upload.html',
    controller: 'JoinLicenseCtrl'
  })

  .state('join.medicare', {
    url: '/medicare',
    templateUrl: 'views/join-upload.html',
    controller: 'JoinMedicareCtrl'
  });

});