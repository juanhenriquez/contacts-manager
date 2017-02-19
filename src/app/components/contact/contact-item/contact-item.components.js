var contactItem = {
  bindings: {
    contact: '<',
    onSelect: '&'
  },
  templateUrl: './contact-item.template.html',
  controller: 'ContactItemController'
};

angular
  .module('components.contact')
  .component('contactItem', contactItem);