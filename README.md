# ng-simditor
Angular directive for simditor.

[Demo](http://ng-simditor.mipinr.com  )

### Install

```
bower install simditor --save
bower install ng-simditor --save
```


### Usage

``` html
<link rel="stylesheet" href="bower_components/simditor/styles/simditor.css" />

<script src="bower_components/simple-module/lib/module.js"></script>
<script src="bower_components/simple-hotkeys/lib/hotkeys.js"></script>
<script src="bower_components/simditor/lib/simditor.js"></script>
<script src="bower_components/ng-simditor/dist/js/ng-simditor.js"></script>

```

```js
angular.module('app', ['ngSimditor']);
```

``` html
<simditor ng-model="content"></simditor>
```
