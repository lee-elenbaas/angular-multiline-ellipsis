/* global angular */
(function(angular) {
	"use strict";
		
	angular.module('angularMultiLineEllipsisSample', ['angularMultiLineEllipsis', 'ngSanitize'])
		.controller('simpleSampleCtrl', function ($scope) {
			$scope.content = 'Place some very long text in here. Just to test how the multiline ellipsis work. This test should wrap inside the results boxes and then show ellipsis at the end before the actual content ends.';
			
			$scope.style = {
				height: '100px',
				width: '200px'
			};
			
			$scope.displayLayout = false;
		})
		.controller('ellipsisSampleCtrl', function ($scope) {
			$scope.content = 'Place some very long HTML in here. This content is here just to show that the actual content <b>did not matter.</b> And it can also contain some links: <a href="http://www.cnn.com">CNN</a>, <a href="http://google.com">Google</a>.';
			
			$scope.style = {
				height: '100px',
				width: '200px'
			};
			
			$scope.ellipsis = '-->';
			$scope.displayLayout = false;
		});
	
}(angular));
