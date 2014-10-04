'use strict';

/**
 * @ngdoc service
 * @name health3App.Signup
 * @description
 * # Signup
 * Factory in the health3App.
 */
angular.module('health3App')
  .factory('Signup', function () {
    var signup = {
      u: {},
      license: {
        image: '',
        correctAddress: ''
      },
      medicare : {
        image: '',
        people: []
      },
      current : {
        image : '',
        hasCurrentInsurance : false,
        everyoneOnPolicy: false
      }
    };

    // Public API here
    return {
      get: function () {
        return signup;
      },
      setUser: function (data) {
        signup.u = data;
      },
      setLicense: function(data) {
        signup.license = data;
      },
      setMedicare: function(data) {
        signup.medicare = data;
      },
      setCurrent: function(data) {
        signup.current = data;
      }
    };
  });
