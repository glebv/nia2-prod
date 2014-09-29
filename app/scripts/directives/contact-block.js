'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:contactBlock
 * @description
 * # contactBlock
 */
angular.module('health3App')
  .directive('contactBlock', function ($http) {
    return {
      templateUrl: 'views/contact-block.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.contact = {
          formButtonText: 'Call me back please!',
          processing: false,
          phone: ''
        }

        scope.showForm = function(){
        	scope.formVisible = true;
        	scope.formButtonText = 'Submit phone number';
        }

        scope.submitPhoneNumber = function(){
        	scope.formButtonText = 'Sending...';
        	$http
        	.post('nia2.wpengine.com')
        	.then(function(result){
        		scope.formButtonText = 'Thanks! Speak to you soon!';
        		scope.formVisible = false;
        	});
        };
      }
    };
  });
