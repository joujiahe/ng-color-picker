var services = angular.module('ngColorPicker.services', [])
    .provider('ngColorPicker', function () {

        var colors,
            default_colors = [
                '#7bd148',
                '#5484ed',
                '#a4bdfc',
                '#46d6db',
                '#7ae7bf',
                '#51b749',
                '#fbd75b',
                '#ffb878',
                '#ff887c',
                '#dc2127',
                '#dbadff',
                '#e1e1e1'
            ];

        this.set = function (new_colors) {
            colors = new_colors;
        };

        this.$get = function () {
            return {
                colors: function () {
                    return colors || default_colors;
                }
            };
        };

    });

angular.module('ngColorPicker.directives', ['ngColorPicker.services'])
    .directive('ngColorPicker', function (ngColorPicker) {

        return {
            restrict: 'E',
            require: "ngModel",
            template: '<span ng-repeat="color in colors" ng-class="{selected: selected(color)}" ng-click="pick(color)" style="background-color:{{color}};"></span>',
            link: function (scope, element, attr, ngModelCtrl) {

                scope.colors = ngColorPicker.colors();

                scope.selected = function (color) {
                    return ngModelCtrl.$viewValue === color;
                };

                scope.pick = function (color) {
                    ngModelCtrl.$setViewValue(color);
                };
            }
        };

    });