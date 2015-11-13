var memories = angular.module('memories', ['ngRoute'])

memories.controller('memoriesCtrl', ['$scope', '$http', function($scope, $http){
  $scope.addMemory = function(){
    var memory = {"data": {"type": "memory",
        "attributes": {
          "old_days": $scope.old_days,
          "these_days": $scope.these_days,
          "year": $scope.year
        }}}

    $http.post('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories', memory).success(function(response){
    })
  }
}])
  
.controller('memoriesGetCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories').success(function(response){
    $scope.memories = response.data
  })
  $http.get('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories/years').success(function(response){
    $scope.years = response.data
  })
}])

.controller('yearShowCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $http.get('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories/years').success(function(response){
    $scope.years = response.data
  })

  var year = $location.url().split('/').join('')

  $http.get('http://g12-varnell-andrew-memories.cfapps.io/api/v1/memories/'+ year).success(function(response){
    $scope.memories = response.data
  })

}])

.config(function($routeProvider,$locationProvider){
  $routeProvider.when('/', {
    templateUrl: '/home.html',
    controller: 'memoriesGetCtrl'
  })
  .when('/:year', {
    templateUrl: '/yearShow.html',
    controller: 'yearShowCtrl'
  })
  $locationProvider.html5Mode(true)
})

