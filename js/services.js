angular.module("mathApp")

.service('calculate', function() {
  this.calculate = function(first, second, operator) {
    switch (operator) {
      case "add":
        return (first+second);
      case "subtract":
        return (first-second);
      case "multiply":
        return (first*second);
      case "divide":
        return (first/second);
    }
  };
});
