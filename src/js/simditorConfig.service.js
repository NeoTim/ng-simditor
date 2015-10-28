module.exports = angular
  .module('simditorConfig.service', [])
  .value('simditorConfig', {
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
