'use strict';

/**
 * @ngdoc service
 * @name health3App.getprice
 * @description
 * # getprice
 * Service in the health3App.
 */
angular.module('health3App')
  .service('prices', function price($http) {
  	return {
  		get: function(products, data, callback){
  			$http.get("http://niahealthdata.com/api/priced-sample-products/" + products + '/params/' + data)
  			.success(function(result){
  				callback(result);
  			});
  		},

  		getParams: function(obj){
  			var str = "";
  			_.each(obj, function(val, key){
  				str+= '/' + key.toString() + '/' + val.toString();
  			});

  			return str.toString();
  		},

  		options: {
				policy: [
					{ value: 'Sgl',   label: 'Single' },
					{ value: 'Cpl',   label: 'Couple' },
					{ value: 'Fam',   label: 'Family' },
					{ value: 'SPFam', label: 'Single Parent' }
				],
				state: [
					{ value: 'NSW',		label: 'New South Wales' },
					{ value: 'VIC', 	label: 'Victoria' },
					{ value: 'QLD', 	label: 'Queensland' },
					{ value: 'TAS', 	label: 'Tasmania' },
					{ value: 'ACT', 	label: 'Australian Capital Territory' },
					{ value: 'NT',  	label: 'Northern Territory' },
					{ value: 'SA',  	label: 'South Australia' },
					{ value: 'WA',  	label: 'Western Australia' }
				],
				priority: [
					{value: 'cheap', 	label: 'The cheapest insurance'},
					{value: 'tax', 		label: 'To save on tax'},
					{value: 'family', 	label: 'To have more kids'},
					{value: 'coverage', label: 'The best insurance'},
					{value: 'all', 		label: 'Just show me all products'}
				],
				age: [
					{value: '18-30', 		label: 'Under 31'},
					{value: '31-65', 		label: 'Between 31 and 65'},
					{value: '65-70', 		label: 'Between 65 and 70'},
					{value: '71-100', 		label: 'Older than 70'}
				],
				income: {
					single: [
						{value: 'tier1', 	label: 'Less than $90k'},
						{value: 'tier2', 	label: 'Between $90k and $102k'},
						{value: 'tier3', 	label: 'Between $102k and $136k'},
						{value: 'tier4', 	label: 'More than $136k'}
					],
					house: [
						{value: 'tier1', 	label: 'Less than $180k'},
						{value: 'tier2', 	label: 'Between $180k and $204k'},
						{value: 'tier3', 	label: 'Between $204k and $272k'},
						{value: 'tier4', 	label: 'More than $272k'}
					]
				}
			},
  	}
  });
