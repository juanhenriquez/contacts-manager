var contactNew = {
  templateUrl: './contact-new.template.html',
  controller: 'ContactNewController'
};

angular
  .module('components.contact')
  .component('contactNew', contactNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.new', {
        url: '/new',
        component: 'contactNew'
      })
  });
