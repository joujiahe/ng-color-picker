angular.module('example', ['ngColorPicker'])

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.colors = [
        '#468966',
        '#FFF0A5',
        '#FFB03B',
        '#B64926',
        '#8E2800',
        '#e1e1e1'
    ];
    $scope.selected = '#e1e1e1';
}]);