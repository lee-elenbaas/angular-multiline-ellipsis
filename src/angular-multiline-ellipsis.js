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
				controller: ['$element', '$transclude', function($element, $transclude) {
					if (!$transclude) {
					  throw minErr('ngTransclude')('orphan',
						  'Illegal use of ngTransclude directive in the template! ' +
						  'No parent directive that requires a transclusion found. ' +
						  'Element: {0}',
						  startingTag($element));
					}

					// remember the transclusion fn but call it during linking so that we don't process transclusion before directives on
					// the parent element even when the transclusion replaces the current element. (we can't use priority here because
					// that applies only to compile fns and not controllers
					this.$transclude = $transclude;
				}],
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
			require: '^mlEllipsis'
			transclude: true,
			link: function($scope, $element, $attrs, controller) {
				controller.$transclude(function(clone) {
				  $element.empty();
				  $element.append(clone);
				});
			}
		  }
		})
		;
		
}(angular));
