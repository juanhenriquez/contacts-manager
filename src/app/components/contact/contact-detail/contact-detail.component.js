var contactDetail = {
  bindings: {
    contact: '<',
    onSave: '&',
    onDelete: '&',
    onUpdate: '&'
  },
  templateUrl: './contact-detail.template.html',
  controller: 'ContactDetailController'
};

angular
  .module('components.contact')
  .component('contactDetail', contactDetail);