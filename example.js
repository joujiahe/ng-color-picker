angular.module('example', ['ngColorPicker'])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.selectedColor = '#e1e1e1';
    $scope.pickColor = function(color) {
        $scope.selectedColor = color;
    }
}]);