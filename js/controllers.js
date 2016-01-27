angular.module('mathApp')
  .controller("MainController", ["calculate", MainController]);

function MainController(calc) {
  var vm = this;
  vm.title = "Mini Calculator!";
  vm.calculate = calc.calculate;
}
