'use strict';

/**
 * @ngdoc filter
 * @name health3App.filter:slugify
 * @function
 * @description
 * # slugify
 * Filter in the health3App.
 */
angular.module('health3App')
  .filter('slugify', function () {
    return function (input) {
      return input.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'');
    };
  });
