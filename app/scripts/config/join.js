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
    templateUrl: 'views/join-start.html',
    data: {
      nextStep: 'join.license'
    }
  })
  .state('join.license', {
    url: '/drivers-license',
    templateUrl: 'views/join-license.html',
    controller: 'JoinLicenseCtrl',
    data: {
      nextStep: 'join.medicare'
    }
  })

  .state('join.medicare', {
    url: '/medicare-card',
    templateUrl: 'views/join-medicare.html',
    controller: 'JoinMedicareCtrl',
    data: {
      nextStep: 'join.current'
    }
  })

  .state('join.current', {
    url: '/current-insurer',
    templateUrl: 'views/join-insurer.html',
    controller: 'JoinCurrentInsurerCtrl',
    data: {
      nextStep: 'join.confirm'
    }
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