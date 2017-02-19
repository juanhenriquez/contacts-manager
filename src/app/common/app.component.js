var app = {
  templateUrl: './app.template.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        //redirectTo: 'contacts'
        url: '/app',
        component: 'app',
        data: {
          requiredAuth: true
        }
      });
  });