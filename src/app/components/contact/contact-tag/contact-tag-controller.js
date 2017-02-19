function ContactTagController() {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.tags = [
      'friends', 'family', 'acquaintances', 'following'
    ];
  };
  ctrl.$onChange = function (changes) {
    if (changes.tag) {
      ctrl.tag = angular.copy(ctrl.tag);
    }
  };
  ctrl.updateTag = function (tag) {
    ctrl.onChange({
      $event: {tag: tag}
    });
  }
}

angular
  .module('components.contact')
  .controller('ContactTagController', ContactTagController);