/* global angular */
(function(angular) {
	"use strict";
			
	angular.module('angularMultiLineEllipsis', [])
		.directive('mlEllipsis', function() {
			return {
				restrict: 'EA',
				transclude: true,
				scope: {
					ellipsis: '=',
					ellipsisType: '=',
					ellipsisStyle: '='
				},
				template: ''
					+ '<div class="ml-ellipsis">'
						+ '<div class="ml-ellipsis-before"></div>'
						+ '<div class="ml-ellipsis-content" ng-transclude></div>'
						+ '<div class="ml-ellipsis-after">'
							+ '<span ng-if="!ellipsis" ng-style="ellipsisStyle">&hellip;</span>'
							+ '<span ng-if="ellipsis && ((ellipsisType == \'text\') || !ellipsisType)" ng-bind="ellipsis" ng-style="ellipsisStyle"></span>'
							+ '<span ng-if="ellipsis && (ellipsisType == \'html\')" ng-bind-html="ellipsis" ng-style="ellipsisStyle"></span>'
							+ '<span ng-if="ellipsis && (ellipsisType == \'templateUrl\')" ng-include="ellipsis" ng-style="ellipsisStyle"></span>'
						+ '</div>'
					+ '</div>'
			};
		});
	
}(angular));
