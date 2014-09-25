'use strict';

/**
 * @ngdoc service
 * @name health3App.Testimonials
 * @description
 * # Testimonials
 * Service in the health3App.
 */
angular.module('health3App')
  .service('Testimonials', function Testimonials() {
    return {
    	testimonials: [
    		{
    			name: 'Jacinta',
    			location: 'NSW',
    			desc: '"Dear health.com.au, where have you been all my life? Just claimed online, took me 2 minutes and I got 65% back on my remedial massage. Awesome!"',
    		},
    		{
    			name: 'Megan',
    			location: 'QLD',
    			desc: '"Impressed with the level of service received so far and it\'s never difficult to make the phone call for assistance."'
    		},
    		{
    			name: 'Lucy',
    			location: 'NSW',
    			desc: '"I found the whole joining process really easy and hassle free! Just the way I like it."'
    		},
    		{
    			name: 'Robyn',
    			location: 'VIC',
    			desc: '"Many many thanks for your time and patience (over live chat assistance)."'
    		},
    		{
    			name: 'Deborah',
    			location: 'VIC',
    			desc: '"I am writing to congratulate you on your services with your customer service team and I was extremely happy with the customer service Jackson provided..."'
    		}
    	]
    };
  });
