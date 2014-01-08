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
		})
		.controller('styleSampleCtrl', function ($scope) {
			$scope.content = 'Place some very long text in here. Just to test how the multiline ellipsis work. This test should wrap inside the results boxes and then show ellipsis at the end before the actual content ends.';
			
			$scope.style = {
				height: '100px',
				width: '200px'
			};
			
			$scope.ellipsis = '-->';
			$scope.ellipsisWidth = '3em';
			$scope.ellipsisBold = false;
			
			$scope.displayLayout = false;
			
			$scope.ellipsisStyle = function() {
				return {
					width: $scope.ellipsisWidth,
					'margin-left': '-'+$scope.ellipsisWidth,
					'font-weight': $scope.ellipsisBold?'bold':'normal'
				};
			};
			
			$scope.more = function() {
				$document.alert('clicked more');
				
				return false;
			};
		})
		.controller('templateSampleCtrl', function ($scope, $document) {
			$scope.content = 'Place some very long text in here. Just to test how the multiline ellipsis work. This test should wrap inside the results boxes and then show ellipsis at the end before the actual content ends.';
			
			$scope.style = {
				height: '100px',
				width: '200px'
			};
			
			$scope.ellipsisStyle = {
				width: '4em',
				'margin-left': '-4em'
			};
		});
	
}(angular));
