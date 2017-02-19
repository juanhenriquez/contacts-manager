var contactEdit = {
  bindings: {
    contact: '<'
  },
  templateUrl: './contact-edit.template.html',
  controller: 'ContactEditController'
};

angular
  .module('components.contact')
  .component('contactEdit', contactEdit)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.contact', {
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: {
          contact: function ($transition$, ContactService){
            var key = $transition$.params().id;
            return ContactService.getContactById(key).$loaded();
          }
        }
      })
  });