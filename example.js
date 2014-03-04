angular.module('example', ['ngColorPicker.directives', 'ngColorPicker.services'])
.config(function (ngColorPickerProvider) {

	ngColorPickerProvider.set([
		'#468966',
		'#FFF0A5',
		'#FFB03B',
		'#B64926',
		'#8E2800'
	]);

})
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.selectedColor = '#e1e1e1';
}]);