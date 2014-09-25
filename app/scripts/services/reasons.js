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
    		{name: 'Reasons to switch', desc: 'We cool. We love online. We nice.'},
			{name: 'We rock', desc: 'We’re a new sort of health insurance, and we’ve got some of the best people in the business behind us.'},
			{name: 'We love online', desc: 'We don’t want to send receipts in by snail mail, and we definitely don’t want to visit anyone’s shop to wait inline and fill out forms.'},
			{name: 'Customer service with a heart.', desc: 'When you need to speak with someone, we are here for you.'}
    	]
    };
  });
