angular.module('ngColorPicker', [])
.provider('ngColorPickerConfig', function(){
    
    var templateUrl = 'color-picker.html';
    var defaultColors =  [
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
    this.setTemplateUrl = function(url){
        templateUrl = url;
    };
    this.setDefaultColors = function(colors){
        defaultColors = colors;
    };
    this.$get = function(){
        return {
            templateUrl : templateUrl,
            defaultColors: defaultColors
        }
    }
})
.directive('ngColorPicker', ['ngColorPickerConfig',function(ngColorPickerConfig) {
    
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors'
        },
        restrict: 'AE',
        templateUrl: ngColorPickerConfig.templateUrl,
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || ngColorPickerConfig.defaultColors;
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
            };

        }
    };

}]);