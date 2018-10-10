(function () {
  'use strict'

//x="hello";
//console.log(x);

angular.module('vvk17App',[])
  .controller('CNT-01', function ($scope) {

    $scope.name = "Валера";
    $scope.sayHello = function (printName) {
      return "Hello "+printName+"!";
    }

  });

})();
