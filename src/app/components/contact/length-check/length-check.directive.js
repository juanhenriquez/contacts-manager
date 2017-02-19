function lengthCheck (){
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function ($element) {
      $element.addClass('dynamic-input');
      return function ($scope, $element, $attrs, $ctrl) {
        var dynamicInput = "dynamic-input--no-contents";
        $scope.$watch(function () {
          return $ctrl.$viewValue;
        }, function (newValue) {
          if (newValue) {
            $element.removeClass(dynamicInput);
          } else {
            $element.addClass(dynamicInput);
          }
        });
      }
    }
  };
}

angular
  .module('components.contact')
  .directive('lengthCheck', lengthCheck);