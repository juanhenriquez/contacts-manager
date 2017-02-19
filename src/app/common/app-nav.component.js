var appNav = {
  bindings: {
    user: '<',
    onLogout: '&'
  },
  templateUrl: './app-nav.template.html'
}

angular
  .module('common')
  .component('appNav', appNav);