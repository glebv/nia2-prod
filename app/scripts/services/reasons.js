'use strict';

/**
 * @ngdoc service
 * @name health3App.reasons
 * @description
 * # reasons
 * Service in the health3App.
 */

angular.module('health3App')
  .service('Reasons', function Reasons() {
    return {
      reasons: [
        [
          { text: 'Awesome Health Insurance' },
          { text: 'Hassle not included' },
          { text: '<a class="small radius rounded button" ui-sref="products.view">Get covered</a>' },
        ],
        [
          { text: 'You rock' },
          { text: 'So should your health insurance' },
          { text: '<a class="small radius rounded button" ui-sref="whyus">Here\'s how</a>' },
        ],
        [
          { text: 'Cash is king' },
          { text: 'Get more money back every time you claim' },
          { text: '<a class="small radius rounded button" ui-sref="get-price.policy">Quote me</a>' },
        ],
        [
          { text: 'Award winning customer service' },
          { text: 'With a heart <3' },
          { text: '<a class="small radius rounded button" href="tel:1300 802 199">Talk to us</a>' },
        ],
      ]
    };
  });
