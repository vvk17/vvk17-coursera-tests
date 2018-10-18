( function() {
'use strict';


angular.module('vvk17DIApp',[])
  .controller('vvk17DIController',DIController);

function DIController($scope, $filter, $injector) {
  $scope.name = "Валерий";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));

}

var tSt = function Test ($scope, job, blh) {
  console.log($scope);
  return "Blah!";
}


console.log(DIController.toString());

})();
