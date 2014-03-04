## ng-color-picker
A simple color picker for AngularJS

### Requirements
* **AngularJS v1.2.0+**

### Usage
```html
<link href="color-picker.css" media="all" rel="stylesheet" type="text/css">
<script src="color-picker.js"></script>

...

<ng-color-picker selected='selectedColor'></ng-color-picker>
```

### Changing the default colors
```js
angular.module('example', ['ngColorPicker.directives', 'ngColorPicker.services'])
.config(function (ngColorPickerProvider) {

	// Set an array of colors here. If this is not configured, it will fall back on a default set.
	ngColorPickerProvider.set([
		'#468966',
		'#FFF0A5',
		'#FFB03B',
		'#B64926',
		'#8E2800',
        '#e1e1e1'
	]);

})
```

### Demo
[http://ng-color-picker.herokuapp.com](http://ng-color-picker.herokuapp.com/)