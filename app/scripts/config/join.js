'use strict';

angular.module('health3App')
.config(function($stateProvider){
	$stateProvider
	.state('join', {
    url: '/join',
    templateUrl: '/templates/views/join.html',
    controller: 'JoinCtrl'
  })

  .state('join.start', {
    url: '/',
    template: '<h2>Join health.com.au</h2>'
  });
});