module.exports = angular
  .module('simditor.directive', [])
  .directive('simditor', simditor);

simditor.$inject = ['simditorOptions'];

function simditor(simditorOptions) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    scope: {
      options: '<'
    },
    link: function(scope, element, attr, ngModel) {
      if (!ngModel) return;

      var options = scope.options || {};

      if (attr.placeholder != null) {
        options.placeholder = attr.placeholder;
      }

      var $textarea = angular.element('<textarea></textarea>');
      element.append($textarea);

      var config = angular.extend({
        textarea: $textarea
      }, simditorOptions, options);

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
