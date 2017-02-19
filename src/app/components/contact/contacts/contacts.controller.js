function ContactsController ($state, $filter){
  var ctrl = this;
  ctrl.$onInit = function () {
    var contacts = ctrl.contacts;
    ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);
  };
  ctrl.goToContact = function (event) {
    console.log(event);
    $state.go('app.contact', { id: event.contactId });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);