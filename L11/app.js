
( function() {
'use strict';


angular.module('vvk17MsgApp',[])
  .controller('vvk17MsgController',MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Валерий";

  $scope.sayMessage = function () {
    return "Валера любит выпить пива!";
  };

  $scope.noSS = "01";

  $scope.showSanSebastian = function () {
    if ($scope.noSS =="01") {
      $scope.noSS = "02";
    } else {
      $scope.noSS = "01";
    }
  }

}

})();
