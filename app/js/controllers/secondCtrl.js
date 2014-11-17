angular.module('proyectoLuisa').controller('secondCtrl', secondCtrl);

secondCtrl.$inject = ['$scope', '$state', '$firebase'];

function secondCtrl($scope, $state, $firebase){
  // Movie Constructor
  $scope.movie = {};

  $scope.returnedObj = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/1')).$asObject();
  /*$scope.returnedObj.$loaded().then(function () {
    $scope.movie = $scope.returnedObj;
    $scope.renderImage();
  });*/


  $scope.returnedObj.$bindTo($scope, "data").then(function() {
   //console.log($scope.data); // {foo: "bar"}
   $scope.movie = $scope.data;
   //$scope.renderImage();
   //$scope.data.foo = "baz";  // will be saved to Firebase
   //ref.$set({foo: "baz"});   // this would update Firebase and $scope.data
 });

  $scope.renderImage = function(){
    var img = new Image();
    var div = document.getElementById('foo');
    img.src= $scope.movie.imagen;
    img.onload = function() {
      div.appendChild(img);
    };
  };

  //$scope.renderImage();
  /*
  var image = new Image();
  image.src = 'data:image/png;base64,iVBORw0K...';
  document.body.appendChild(image);
*/
};
