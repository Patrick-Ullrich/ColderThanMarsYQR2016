'use strict';

/**
 * @ngdoc function
 * @name colderThanMarsYqr2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colderThanMarsYqr2016App
 */
angular.module('colderThanMarsYqr2016App')
  .controller('MainCtrl',['$scope', function ($scope) {

  		$scope.skByYear = [
			{
				"year": "1990",
				"emission": {
					"energy": 36300,
					"industrial": 318,
					"agriculture": 7900,
					"waste": 590
				}
			},
			{
				"year": "1995",
				"emission": {
					"energy": 49500,
					"industrial": 453,
					"agriculture": 10000,
					"waste": 680
				}
			},
			{
				"year": "2000",
				"emission": {
					"energy": 55800,
					"industrial": 640,
					"agriculture": 12000,
					"waste": 850
				}
			},
			{
				"year": "2005",
				"emission": {
					"energy": 55100,
					"industrial": 789,
					"agriculture": 13000,
					"waste": 820
				}
			},
			{
				"year": "2010",
				"emission": {
					"energy": 57100,
					"industrial": 725,
					"agriculture": 11000,
					"waste": 890
				}
			},
			{
				"year": "2011",
				"emission": {
					"energy": 56000,
					"industrial": 891,
					"agriculture": 11000,
					"waste": 900
				}
			},
			{
				"year": "2012",
				"emission": {
					"energy": 57600,
					"industrial": 829,
					"agriculture": 12000,
					"waste": 920
				}
			},
			{
				"year": "2013",
				"emission": {
					"energy": 59500,
					"industrial": 877,
					"agriculture": 13000,
					"waste": 850
				}
			},			
		];
		
		$scope.dog = 1;
		$scope.elk = 500;
		$scope.truck = 1950;
		$scope.whale = 180000;

		$scope.getTotal = function(year, animal) {
			for(var i = 0; i < $scope.skByYear.length; i++){
				if ($scope.skByYear[i].year == year) {
					var emission = $scope.skByYear[i].emission;
					var total = 0;
					total += emission.energy;
					total += emission.industrial;
					total += emission.agriculture;
					total += emission.waste;
					if(animal){
						return (total*1000000 / $scope[animal]).toFixed(0);
					} else {
						return total.toFixed(0);
					}
				} 
			}
		};
  }]);
