module.exports = angular
  .module('ngSimditor', [
    require('./simditor.directive').name,
    require('./simditorConfig.service').name
  ]);
