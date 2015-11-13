var memories = angular.module('memories', ['ngRoute'])

memories.controller('memoriesCtrl', ['$scope', '$http', function($scope, $http){
  $scope.works = 'It Does!'
  $http.get('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories').success(function(response){
    $scope.memories = response.data
    console.log(response)
  })

}]).config(function($routeProvider,$locationProvider){
  $routeProvider.when('/', {
    templateUrl: '/home.html',
    controller: 'memoriesCtrl'
  })
  $locationProvider.html5Mode(true)
})

