module.exports = angular
  .module('simditor.directive', [])
  .directive('simditor', simditor);

simditor.$inject = ['$sce'];

function simditor($sce) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      if (!ngModel) return;

      var $textarea = angular.element('<textarea placeholder="' + attr.placeholder + '"></textarea>');
      element.append($textarea);

      var editor = new Simditor({
        textarea: $textarea,
        toolbar: [
          'title',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'color',
          'ol',
          'ul',
          'blockquote',
          'code',
          'table',
          'link',
          'image',
          'hr',
          'indent',
          'outdent',
          'alignment',
        ]
      });

      ngModel.$render = function() {
        editor.setValue(ngModel.$viewValue || '');
      };

      editor.on('valuechanged', function(e) {
        scope.$evalAsync(read);
        read();
      });

      function read() {
        ngModel.$setViewValue(editor.getValue());
      }

    }
  };
};
