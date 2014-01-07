/* global angular */
(function(angular) {
	"use strict";
			
	angular.module('angularMultiLineEllipsis', [])
		.directive('mlEllipsis', function() {
			return {
				restrict: 'EA',
				transclude: true,
				scope: {
					height: '=',
					ellipsis: '=ellipsis'
				},
				link: function($scope) {
					if (!$scope.ellipsis) {
						$scope.ellipsis = '&hellip;';
					}
				},
				template: ''
					+ '<div class="ml-ellipsis">'
						+ '<div class="ml-ellipsis-before"></div>'
						+ '<div class="ml-ellipsis-content" ng-transclude></div>'
						+ '<div class="ml-ellipsis-after">{{ellipsis}}</div>'
					+ '</div>'
			};
		});
	
}(angular));
