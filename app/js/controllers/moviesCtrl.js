angular.module('proyectoLuisa').controller('moviesCtrl', moviesCtrl);

moviesCtrl.$inject = ['$scope', '$state', '$firebase'];

function moviesCtrl($scope, $state, $firebase){
  $scope.isShown = false;

  $scope.goCaptura = function(){
    $state.go('first');
  };

  $scope.getData = function(){
    $scope.moviesArray = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.category)).$asArray();
    $scope.isShown = true;

  };
};
