module.exports = angular
  .module('simditor.directive', [])
  .directive('simditor', simditor);

simditor.$inject = ['simditorConfig'];

function simditor(simditorConfig) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      if (!ngModel) return;

      var $textarea = angular.element('<textarea placeholder="' + attr.placeholder + '"></textarea>');
      element.append($textarea);

      var config = angular.extend({
        textarea: $textarea
      }, simditorConfig);

      var editor = new Simditor(config);

      ngModel.$render = function() {
        editor.setValue(ngModel.$viewValue || '');
      };

      editor.on('valuechanged', function(e) {
        ngModel.$setViewValue(editor.getValue());
      });

    }
  };
};
