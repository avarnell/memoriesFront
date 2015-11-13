var memories = angular.module('memories', ['ngRoute'])

memories.controller('memoriesCtrl', ['$scope', '$http', function($scope, $http){
  $scope.works = 'It Does!'
}])