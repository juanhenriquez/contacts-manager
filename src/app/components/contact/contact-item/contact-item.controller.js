function ContactItemController () {
  var ctrl = this;
  ctrl.selectContact = function (){
    ctrl.onSelect({
      $event: { contactId: ctrl.contact.$id }
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactItemController', ContactItemController);