/* global angular */
(function(angular) {
	"use strict";
			
	angular.module('angularMultiLineEllipsis', [ 'ng' ])
		.directive('mlEllipsis', function() {
			return {
				restrict: 'EA',
				transclude: true,
				scope: {
					ellipsis: '=',
					ellipsisUrl: '=',
					ellipsisStyle: '='
				},
				template: ''
					+ '<div class="ml-ellipsis">'
						+ '<div class="ml-ellipsis-before"></div>'
						+ '<div class="ml-ellipsis-content" ng-transclude></div>'
						+ '<div class="ml-ellipsis-after">'
							+ '<span ng-if="!ellipsis && !ellipsisUrl" ng-style="ellipsisStyle">&hellip;</span>'
							+ '<span ng-if="ellipsis" ng-bind="ellipsis" ng-style="ellipsisStyle"></span>'
							+ '<span ng-if="!ellipsis && ellipsisUrl" ml-ellipsis-exclude-from-isolated>'
								+ '<span ng-include="ellipsisUrl" ng-style="ellipsisStyle"></span>'
							+ '</span>'
						+ '</div>'
					+ '</div>'
			};
		})
		.directive('mlEllipsisExcludeFromIsolated', function() {
		  return {
			restrict: "EA",
			require: '^mlEllipsis',
			link: [ '$transclude', function($scope, $element, $attrs, $transclude) {
				$transclude($scope.$parent, function(clone) {
				  $element.empty();
				  $element.append(clone);
				});
			} ]
		  };
		})
		;
		
}(angular));
