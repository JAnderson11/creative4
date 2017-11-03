var app = window.angular.module('app', [])

app.factory('fortuneFetcher', fortuneFetcher)
app.controller('mainCtrl', mainCtrl)

function fortuneFetcher ($http) {

  var API_ROOT = 'fortune'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, fortuneFetcher) {

  $scope.fortune = []

  fortuneFetcher.get()
    .then(function (data) {
      $scope.fortune = data
    })

    $scope.refresh = function(){
      fortuneFetcher.get()
      .then(function (data) {
        $scope.fortune = data
      })
    }
}
