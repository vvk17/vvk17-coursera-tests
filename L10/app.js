/*( function() {
'use strict';


angular.module('vvk17DIApp',[])
  .controller('vvk17DIController',DIController);

DIController.$inject = ['$scope','$filter'];

function DIController($scope, $filter, $injector) {
  $scope.name = "Валерий";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

})();
*/

!function(){"use strict";function e(e,n,r){e.name="Валерий",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("vvk17DIApp",[]).controller("vvk17DIController",e),e.$inject=["$scope","$filter"]}();

/*
( function() {
'use strict';


angular.module('vvk17DIApp',[])
  .controller('vvk17DIController',['$scope','$filter',DIController]);

function DIController($scope, $filter, $injector) {
  $scope.name = "Валерий";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

})();
*/
