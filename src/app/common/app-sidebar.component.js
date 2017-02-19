var appSidebar = {
  templateUrl: './app-sidebar.template.html',
  controller: 'AppSidebarController'
};

angular
  .module('common')
  .component('appSidebar', appSidebar);