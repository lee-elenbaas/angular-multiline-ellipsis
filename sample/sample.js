/* global angular */
(function(angular) {
	"use strict";
		
	angular.module('angularMultiLineEllipsisSample', ['angularMultiLineEllipsis'])
		.controller('simpleSampleCtrl', function ($scope) {
			$scope.content = 'Place some very long text in here. Just to test how the multiline ellipsis work. This test should wrap inside the results boxes and then show ellipsis at the end before the actual content ends.';
			
			$scope.style = {
				height: '100px',
				width: '200px'
			};
			
			$scope.displayLayout = false;
		});
	
}(angular));
